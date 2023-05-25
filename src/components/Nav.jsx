import logo from "../assets/mainLogo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { StyledNav } from "../styles/Nav.style";
import { useAuth } from "../contexts/AuthContext";

export default function Nav() {
  const auth = useAuth();

  return (
    <header>
      <StyledNav>
        <div>
          <Link to="/">
            <img src={logo} alt="Logo Image" height="45px" />
          </Link>
          <div>
            <Link className="link" to="/explore">
              Explorar
            </Link>
            <Link className="link" to="/reviews">
              Reseñas
            </Link>
            <Link className="link" to="/bookshelf">
              Mis Libros
            </Link>
          </div>
        </div>
        <div>
          {auth.user ? (
            <Link className="link" to="/account">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
        </div>
      </StyledNav>
    </header>
  );
}
