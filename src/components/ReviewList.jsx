import { StyledItemList } from "../styles/ItemList.style";
import { StyledReviewCard } from "../styles/ReviewCard.style";

import { useEffect, useState } from "react";
import { db } from "../ConfigFirebase";
import { collection, getDocs } from "firebase/firestore";

export default function ReviewList() {
  const [reviews, setReviews] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const reviewsRef = collection(db, "reviews");

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await getDocs(reviewsRef);

        const reviewsData = response.docs.map(doc => ({
          book_title: doc._document.data.value.mapValue.fields.book_title.stringValue,
          review_id: doc._document.data.value.mapValue.fields.review_id.stringValue,
          review_text: doc._document.data.value.mapValue.fields.review_text.stringValue,
          username: doc._document.data.value.mapValue.fields.username.stringValue,
        }));

        setReviews(reviewsData);
        setFetchError(null);
      } catch (err) {
        console.log(err.message);
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    getReviews();
  }, []);

  return (
    <>
      {isLoading && <h4>Cargando todas las reseñas...</h4>}
      {fetchError ? (
        <h4>{fetchError}</h4>
      ) : !isLoading && reviews.length === 0 ? (
        <h4>No hay Reseñas</h4>
      ) : (
        !isLoading &&
        reviews.length > 0 && (
          <div>
            <h2>Ultimas reseñas</h2>
            <StyledItemList>
              {reviews.map((e, i) => {
                return (
                  <StyledReviewCard key={i}>
                    <h4>{e.book_title}</h4>
                    <div>
                      <p>{e.review_text}</p>
                    </div>
                    <p>
                      Por <strong>{e.username}</strong>
                    </p>
                  </StyledReviewCard>
                );
              })}
            </StyledItemList>
          </div>
        )
      )}
    </>
  );
}
