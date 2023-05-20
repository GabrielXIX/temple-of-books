import { GBA_API_KEY } from "../Keys";

import { useEffect, useState } from "react";

import { StyledBookInfo } from "../styles/BookInfo.style";

//lZN5DQAAQBAJ

export default function BookInfo({ bookId }) {
  const URL = `https://www.googleapis.com/books/v1/volumes/${bookId}?key=${GBA_API_KEY}`;
  const [bookDisplayed, setBookDisplayed] = useState({
    title: "Placeholder Title",
    authors: "Placeholder Authors",
    thumbnail: "Placeholder image url",
  });

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const bookFetched = await fetch(URL);
        if (!bookFetched.ok) throw new Error(`Error de solicitud de API: ${bookFetched.statusText}, codigo: ${bookFetched.status}`);

        const data = await bookFetched.json();
        setBookDisplayed({
          title: data.volumeInfo.title,
          authors: data.volumeInfo.authors,
          thumbnail: data.volumeInfo.imageLinks.thumbnail, //! placeholder
        });
      } catch (err) {
        console.log(err.message);
      }
    };
    //fetchBookData();
  }, []);

  return (
    <StyledBookInfo>
      <h1>{bookDisplayed.title}</h1>
      <h3>{bookDisplayed.authors}</h3>
      <img src={bookDisplayed.thumbnail} />
    </StyledBookInfo>
  );
}
