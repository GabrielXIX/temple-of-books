import Nav from "../components/Nav";
import Searchbar from "../components/Searchbar";
import BookList from "../components/BookList";
import { GBA_API_KEY } from "../Keys";
import Footer from "../components/Footer";

import { StyledPageStructure } from "../styles/PageStructure.style";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";

// ! state
// TODO: generate a random genre of books to display on first render
// todo normalize input elements on all site

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
