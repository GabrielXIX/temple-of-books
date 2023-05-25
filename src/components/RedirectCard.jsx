import { Link } from "react-router-dom";

import { StyledRedirectCard } from "../styles/RedirectCard.style";

export default function RedirectCard({ type }) {
  return (
    <StyledRedirectCard>
      <p>{(type === "login" && "No tienes cuenta?") || (type === "signup" && "Ya tienes cuenta?")}</p>
      <Link className="mainBtn" to={(type === "login" && "/signup") || (type === "signup" && "/login")}>
        {(type === "login" && "Registrarse") || (type === "signup" && "Iniciar Sesión")}
      </Link>
    </StyledRedirectCard>
  );
}
