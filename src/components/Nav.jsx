import logo from "../assets/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { StyledNav } from "../styles/Nav.style";

export default function Nav() {
  return (
    <header>
      <StyledNav>
        <div>
          <button>
            <Link to="/">
              <img src={logo} alt="Logo Image" height="30px" />
            </Link>
          </button>
          <div>
            <Link to="/explore">Explorar</Link>
            <Link to="/reviews">Reseñas</Link>
            <Link to="/bookshelf">Mis Libros</Link>
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
