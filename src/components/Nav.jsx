import { useState } from "react";

import { StyledNav } from "../styles/Nav.style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Nav({ searchBook }) {
  const [searchValue, setSearchValue] = useState("");

  function handleInputChange(event) {
    setSearchValue(event.target.value);
  }

  return (
    <header>
      <StyledNav>
        <div>
          <FontAwesomeIcon icon={faBook} />
          <div>
            <input
              type="text"
              value={searchValue}
              onChange={handleInputChange}
              placeholder="Buscar Libro"
            />
            <button
              onClick={() => searchBook(searchValue)}
              disabled={searchValue === ""}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>
        <div>
          <button>
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
      </StyledNav>
    </header>
  );
}
