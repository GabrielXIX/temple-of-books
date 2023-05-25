import Nav from "./components/Nav";
import { StyledLandingPage } from "./styles/LandingPage";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <Nav />
      <main style={{ padding: "0" }}>
        <StyledLandingPage>
          <div>
            <h1>Bienvenido a Book Temple</h1>
            <h2>Comenzar a explorar y buscar libros</h2>
            <Link className="link" to="/explore">
              Explorar
            </Link>
          </div>
        </StyledLandingPage>
      </main>
    </>
  );
}
