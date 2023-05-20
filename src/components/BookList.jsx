import userContext from "../contexts/UserContext";
import { GBA_API_KEY } from "../Keys";

import { db } from "../ConfigFirebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import { StyledBookCard } from "../styles/BookCard.style";
import { StyledItemList } from "../styles/ItemList.style";

export default function BookList({ is_large = "true", type }) {
  const [books, setBooks] = useState(["temp"]);
  const [fetchError, setFetchError] = useState(null);
  const { username } = useContext(userContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (type === "main") {
          const URL = `https://www.googleapis.com/books/v1/volumes?q=adventure&filter=ebooks&maxResults=1&key=${GBA_API_KEY}`;
          const response = await fetch(URL);
          if (!response.ok) throw new Error(`Error de solicitud de API: ${response.statusText}, codigo: ${response.status}`);

          const data = await response.json();
          setBooks(data.items);
        } else {
          const usersRef = collection(db, "users");
          const usersData = await getDocs(usersRef);
          const currentUser = usersData.docs.find(doc => doc._document.data.value.mapValue.fields.username.stringValue === username);
          if (currentUser == null) return;

          const book_ids = currentUser._document.data.value.mapValue.fields[type].arrayValue.values.map(value => value.stringValue);
          if (!book_ids) return [];

          const promises = book_ids.map(async book_id => {
            const URL = `https://www.googleapis.com/books/v1/volumes/${book_id}?key=${GBA_API_KEY}`;
            const response = await fetch(URL);
            if (!response.ok) throw new Error(`Error de solicitud de API: ${response.statusText}, codigo: ${response.status}`);

            const data = await response.json();
            return data;
          });

          setBooks(await Promise.all(promises));
        }
        setFetchError(null);
      } catch (err) {
        console.log(err.message);
        setFetchError(err.message);
      }
    };
    //fetchData();

    //Cleanup abort
    return () => {};
  }, []);

  return (
    <>
      {fetchError ? (
        <h4>{fetchError}</h4>
      ) : books.length === 0 ? (
        <h4>No se encontraron libros</h4>
      ) : (
        books.length > 0 &&
        books[0] !== "temp" && (
          <div>
            <h2>
              {(type === "main" && "<Search>") ||
                (type === "recently_viewed" && "Libros recientes") ||
                (type === "bookshelf" && "Mis Libros")}
            </h2>
            <StyledItemList>
              {books.map(e => {
                return (
                  <Link to={`/explore/${e.id}`} key={e.id}>
                    <StyledBookCard is_large={is_large}>
                      <div>
                        <img
                          src={
                            e.volumeInfo.hasOwnProperty("imageLinks")
                              ? e.volumeInfo.imageLinks.thumbnail
                              : "https://bookcart.azurewebsites.net/Upload/Default_image.jpg"
                          }
                          alt="image cover"
                        />
                      </div>
                      <div>
                        <h4>{e.volumeInfo.title}</h4>
                        {is_large === "true" && <p>{e.volumeInfo.authors}</p>}
                      </div>
                    </StyledBookCard>
                  </Link>
                );
              })}
            </StyledItemList>
          </div>
        )
      )}
    </>
  );
}
