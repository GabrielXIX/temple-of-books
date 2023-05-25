import Nav from "../../components/Nav";
import { StyledPageStructure } from "../../styles/PageStructure.style";
import SignupForm from "./SignupForm";
import RedirectCard from "../../components/RedirectCard";
import { StyledCenterCard } from "../../styles/CenterCard.style";

export default function SignupPage() {
  return (
    <StyledPageStructure>
      <Nav />
      <main>
        <StyledCenterCard>
          <SignupForm />
          <RedirectCard type="signup" />
        </StyledCenterCard>
      </main>
    </StyledPageStructure>
  );
}
