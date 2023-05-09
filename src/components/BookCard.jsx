import { StyledBookCard } from "../styles/BookCard.style";

export default function BookCard({ title, author, image }) {
  return (
    <StyledBookCard>
      <div>
        <img src={image} alt="image cover" />
      </div>
      <div>
        <h4>{title}</h4>
        <p>{author}</p>
      </div>
    </StyledBookCard>
  );
}
