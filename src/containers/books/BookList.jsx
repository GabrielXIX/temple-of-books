import BookCard from "../../components/BookCard";
import { StyledBookList } from "./BookList.style";

export default function BookList({ books }) {
  console.log("Current Books");
  console.log(books);
  return (
    <StyledBookList>
      {books.map((e, i) => {
        return (
          <BookCard
            key={i}
            title={e.volumeInfo.title}
            author={e.volumeInfo.authors}
            image={
              e.volumeInfo.hasOwnProperty("imageLinks")
                ? e.volumeInfo.imageLinks.thumbnail
                : "https://bookcart.azurewebsites.net/Upload/Default_image.jpg"
            }
          />
        );
      })}
    </StyledBookList>
  );
}
