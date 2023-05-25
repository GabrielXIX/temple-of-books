import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import { StyledSearchbar } from "../styles/Searchbar.style";

export default function Searchbar({ type, searchBooks }) {
  const [inputState, setInputState] = useState("");

  function handleChange(event) {
    setInputState(event.target.value);
  }

  return (
    <StyledSearchbar>
      <input
        type="text"
        value={inputState}
        onChange={e => handleChange(e)}
        placeholder={(type === "books" && "Buscar Libros/Autor") || (type === "reviews" && "Buscar Libros con Reseña")}
      />
      <button onClick={() => searchBooks(inputState)}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </StyledSearchbar>
  );
}
