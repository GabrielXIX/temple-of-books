import Nav from "../../components/Nav";
import Searchbar from "../../components/Searchbar";
import ReviewList from "./ReviewList";

import { useEffect, useState } from "react";
import { db } from "../../ConfigFirebase";
import { collection, getDocs } from "firebase/firestore";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const reviewsRef = collection(db, "reviews");

  useEffect(() => {
    const getReviews = async () => {
      const reviewsDocs = await getDocs(reviewsRef);
      const reviewsData = reviewsDocs.docs.map(doc => ({
        book_id: doc._document.data.value.mapValue.fields.book_id.stringValue,
        review_id: doc._document.data.value.mapValue.fields.review_id.stringValue,
        review_text: doc._document.data.value.mapValue.fields.review_text.stringValue,
      }));

      setReviews(reviewsData);
    };

    getReviews();
  }, []);

  function searchReview() {
    console.log("search review");
  }

  return (
    <>
      <Nav />
      <Searchbar search={searchReview} type="reviews" />
      <h2>Ultimas reseñas</h2>
      <ReviewList reviews={reviews} />
    </>
  );
}
