import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import { StyledSearchbar } from "../styles/Searchbar.style";

export default function Searchbar({ search, type }) {
  const [searchValue, setSearchValue] = useState("");

  function handleInputChange(event) {
    setSearchValue(event.target.value);
  }

  return (
    <StyledSearchbar>
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder={(type === "books" && "Buscar Libros/Autor") || (type === "reviews" && "Buscar Libros con Reseña")}
      />
      <button onClick={() => search(searchValue)} disabled={searchValue === ""}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </StyledSearchbar>
  );
}
