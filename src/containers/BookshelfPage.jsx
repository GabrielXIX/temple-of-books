import BookList from "../components/BookList";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { StyledPageStructure } from "../styles/PageStructure.style";

export default function BookshelfPage() {
  return (
    <StyledPageStructure>
      <Nav />
      <main>
        <BookList type="bookshelf" />
      </main>
      <Footer />
    </StyledPageStructure>
  );
}
