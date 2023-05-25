import Nav from "../components/Nav";
import Searchbar from "../components/Searchbar";
import BookList from "../components/BookList";
import Footer from "../components/Footer";

import { StyledPageStructure } from "../styles/PageStructure.style";
import { useState } from "react";

export default function ExplorePage() {
  const [search, setSearch] = useState("");

  function searchBooks(searchValue) {
    setSearch(searchValue);
  }

  return (
    <StyledPageStructure>
      <Nav />
      <main>
        <Searchbar type="books" searchBooks={searchBooks} />
        <BookList type="main" search={search} />
      </main>
      <Footer />
    </StyledPageStructure>
  );
}
