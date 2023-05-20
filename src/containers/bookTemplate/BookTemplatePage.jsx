import Nav from "../../components/Nav";
import BookInfo from "../../components/BookInfo";

import { useParams } from "react-router-dom";

//http://localhost:5173/explore/oncq8fPQdbIC

export default function BookTemplatePage() {
  const { bookId } = useParams();

  return (
    <>
      <Nav />

      <BookInfo bookId={bookId} />
    </>
  );
}
