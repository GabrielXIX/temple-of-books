import Nav from "../../components/Nav";
import Searchbar from "../../components/Searchbar";
import BookList from "../../components/BookList";

export default function ExplorePage() {
  async function searchBook(searchValue) {
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&filter=ebooks&maxResults=5&key=${
      import.meta.env.VITE_GBA_API_KEY
    }`;
    await fetch(URL)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  return (
    <>
      <Nav />
      <BookList type="recently_viewed" is_large={"false"} />
      <Searchbar search={searchBook} type="books" />
      <BookList type="main" />
    </>
  );
}
