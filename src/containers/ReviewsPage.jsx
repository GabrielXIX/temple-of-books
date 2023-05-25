import Nav from "../components/Nav";
import ReviewList from "../components/ReviewList";
import Footer from "../components/Footer";
import { StyledPageStructure } from "../styles/PageStructure.style";
import { useAuth } from "../contexts/AuthContext";

export default function ReviewsPage() {
  const auth = useAuth();

  return (
    <StyledPageStructure>
      <Nav />
      <main>
        <ReviewList />
      </main>
      <Footer />
    </StyledPageStructure>
  );
}
