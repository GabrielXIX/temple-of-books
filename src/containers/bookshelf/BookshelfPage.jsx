import BookList from "../../components/BookList";
import Nav from "../../components/Nav";

export default function BookshelfPage() {
  return (
    <>
      <Nav />
      <h2>Mis Libros</h2>
      <BookList type="bookshelf" />
    </>
  );
}
