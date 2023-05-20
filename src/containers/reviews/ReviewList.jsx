import { StyledItemList } from "../../styles/ItemList.style";
import { StyledReviewCard } from "../../styles/ReviewCard.style";

export default function ReviewList({ reviews }) {
  return (
    <StyledItemList>
      {reviews.map((e, i) => {
        return (
          <StyledReviewCard key={i}>
            <h4>{e.book_id}</h4>
            <p>{e.review_id}</p>
            <p>{e.review_text}</p>
          </StyledReviewCard>
        );
      })}
    </StyledItemList>
  );
}
