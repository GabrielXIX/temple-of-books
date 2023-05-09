import { useEffect, useState } from "react";

import Nav from "./components/Nav";
import BookList from "./containers/books/BookList";

export default function App() {
  const API_KEY = "AIzaSyCbI9hSwcCuB0iECYJW16W_nb8wHNAMAb0";

  const [books, setBooks] = useState([]);

  function searchBook(searchValue) {
    console.log(`Searching: ${searchValue}`);

    // fetch(url)
    //   .then((res) => res.json())
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));

    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&filter=ebooks&maxResults=20&key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setBooks(data.items))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=adventure&filter=ebooks&maxResults=20&key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setBooks(data.items))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Nav searchBook={searchBook} />
      <BookList books={books} />
    </>
  );
}
