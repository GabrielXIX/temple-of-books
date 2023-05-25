import Nav from "../../components/Nav";
import { StyledPageStructure } from "../../styles/PageStructure.style";
import LoginForm from "./LoginForm";
import RedirectCard from "../../components/RedirectCard";
import { StyledCenterCard } from "../../styles/CenterCard.style";

export default function LoginPage() {
  return (
    <StyledPageStructure>
      <Nav />
      <main>
        <StyledCenterCard>
          <LoginForm />
          <RedirectCard type="login" />
        </StyledCenterCard>
      </main>
    </StyledPageStructure>
  );
}
