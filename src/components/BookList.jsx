import { db } from "../ConfigFirebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import notAvailable from "../assets/notAvailable.jpg";

import { StyledBookCard } from "../styles/BookCard.style";
import { StyledItemList } from "../styles/ItemList.style";
import { useAuth } from "../contexts/AuthContext";

export default function BookList({ type, search }) {
  const [books, setBooks] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const auth = useAuth();
  const username = auth.user;

  if (type === "main") {
    useEffect(() => {
      const fetchSearch = async () => {
        try {
          let URL = "";

          if (search === "")
            URL = `https://www.googleapis.com/books/v1/volumes?q=adventure&filter=ebooks&maxResults=12&key=${
              import.meta.env.VITE_GBA_API_KEY
            }`;
          else
            URL = `https://www.googleapis.com/books/v1/volumes?q=${search}&filter=ebooks&maxResults=12&key=${
              import.meta.env.VITE_GBA_API_KEY
            }`;

          let response = await fetch(URL);
          if (!response.ok)
            throw new Error(
              `Error de solicitud de API: ${response.statusText}, codigo: ${response.status}`
            );
          let data = await response.json();

          setBooks(data.items);
        } catch (err) {
          console.log(err.message);
          setFetchError(err.message);
        } finally {
          setIsLoading(false);
        }
      };
      fetchSearch();
    }, [search]);
  } else {
    useEffect(() => {
      const fetchData = async () => {
        try {
          const usersRef = collection(db, "users");
          const usersData = await getDocs(usersRef);
          const currentUser = usersData.docs.find(
            doc => doc._document.data.value.mapValue.fields.username.stringValue === username
          );
          if (currentUser == null) return;

          const auxBooks =
            currentUser._document.data.value.mapValue.fields.bookshelf.arrayValue.values;
          if (!auxBooks) return [];

          const book_ids = auxBooks.map(value => value.stringValue);
          if (!book_ids) return [];

          const promises = book_ids.map(async book_id => {
            const URL = `https://www.googleapis.com/books/v1/volumes/${book_id}?key=${
              import.meta.env.VITE_GBA_API_KEY
            }`;
            const response = await fetch(URL);
            if (!response.ok)
              throw new Error(
                `Error de solicitud de API: ${response.statusText}, codigo: ${response.status}`
              );

            const data = await response.json();
            return data;
          });

          setBooks(await Promise.all(promises));
          setFetchError(null);
        } catch (err) {
          console.log(err.message);
          setFetchError(err.message);
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();

      //return () => {};
    }, []);
  }

  return (
    <>
      {isLoading && (
        <h4>
          Cargando{" "}
          {(type === "main" && "libros...") ||
            (type === "bookshelf" && "libros del usuario...") ||
            (type === "recently_viewed" && "libros recientes...")}
        </h4>
      )}
      {fetchError ? (
        <h4>{fetchError}</h4>
      ) : !isLoading && books.length === 0 ? (
        <h4>No se encontraron libros</h4>
      ) : (
        !isLoading &&
        books.length > 0 && (
          <div>
            <h2>
              {(type === "recently_viewed" && "Libros recientes") ||
                (type === "bookshelf" && "Mis Libros")}
            </h2>
            <StyledItemList>
              {books.map(e => {
                return (
                  <Link className="link" to={`/explore/${e.id}`} key={e.id}>
                    <StyledBookCard>
                      <div>
                        <img
                          src={
                            e.volumeInfo.hasOwnProperty("imageLinks")
                              ? e.volumeInfo.imageLinks.thumbnail
                              : { notAvailable }
                          }
                          alt="image cover"
                        />
                      </div>
                      <div>
                        <h3>{e.volumeInfo.title}</h3>
                        <p>{e.volumeInfo.authors}</p>
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
