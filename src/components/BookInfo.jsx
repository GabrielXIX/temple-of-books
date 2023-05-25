import { GBA_API_KEY } from "../Keys";
import notAvailable from "../assets/notAvailable.jpg";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { db } from "../ConfigFirebase";
import { collection, addDoc, updateDoc, doc, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import { StyledBookHeader, StyledBookDetails } from "../styles/BookInfo.style";
import { StyledReviewModal } from "../styles/ReviewModal.style";
import { useAuth } from "../contexts/AuthContext";

export default function BookInfo({ bookId }) {
  const URL = `https://www.googleapis.com/books/v1/volumes/${bookId}?key=${GBA_API_KEY}`;
  const [bookDisplayed, setBookDisplayed] = useState({
    title: "Titutlo",
    authors: ["Autores"],
    thumbnail: notAvailable,
    description: "Descripción del libro",
    publishedDate: "DD/MM/AAAA",
    publisher: "Editora",
    categories: ["Categoria"],
    language: "Lenguaje",
    pageCount: 0,
    maturityRating: "Clasificación",
  });

  const [modalShown, setModalShown] = useState(false);
  const { register, handleSubmit } = useForm();
  const auth = useAuth();
  const navigate = useNavigate();
  const [isInBookshelf, setIsInBookshelf] = useState(false);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const bookFetched = await fetch(URL);
        if (!bookFetched.ok) throw new Error(`Error de solicitud de API: ${bookFetched.statusText}, codigo: ${bookFetched.status}`);

        const data = await bookFetched.json();
        console.log(data);
        setBookDisplayed({
          title: data.volumeInfo.title || "Título: N/A",
          authors: data.volumeInfo.authors || ["Autores: N/A"],
          thumbnail: data.volumeInfo.imageLinks.thumbnail || notAvailable,
          description: data.volumeInfo.description || "Descripción: N/A",
          publishedDate: data.volumeInfo.publishedDate || "N/A",
          publisher: data.volumeInfo.publisher || "N/A",
          categories: data.volumeInfo.categories || ["N/A"],
          language: data.volumeInfo.language || "N/A",
          pageCount: data.volumeInfo.pageCount || 0,
          maturityRating: data.volumeInfo.maturityRating || "N/A",
        });

        const usersRef = collection(db, "users");
        const usersData = await getDocs(usersRef);
        const currentUser = usersData.docs.find(doc => doc._document.data.value.mapValue.fields.username.stringValue === auth.user);
        if (!currentUser) return;

        let userBookshelf = currentUser._document.data.value.mapValue.fields.bookshelf.arrayValue.values;

        if (!userBookshelf) {
          setIsInBookshelf(false);
        } else {
          userBookshelf = userBookshelf.map(value => value.stringValue);

          if (userBookshelf.find(e => e === bookId)) setIsInBookshelf(true);
          else setIsInBookshelf(false);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchBookData();
  }, []);

  async function handleAddReview({ reviewText }) {
    try {
      const reviewsRef = collection(db, "reviews");
      const reviewsData = await getDocs(reviewsRef);
      const aux = (reviewsData.docs.length + 1).toString();

      await addDoc(reviewsRef, {
        book_title: bookDisplayed.title,
        review_id: aux,
        review_text: reviewText,
        username: auth.user,
      });

      alert("Se creo la reseña");
      navigate("/reviews");
    } catch (err) {
      console.log(err.message);
    }
  }

  function openModal() {
    if (!auth.user) {
      navigate("/login");
      return;
    }

    setModalShown(true);
  }

  async function addToBookshelf() {
    try {
      const usersRef = collection(db, "users");
      const usersData = await getDocs(usersRef);
      const currentUser = usersData.docs.find(doc => doc._document.data.value.mapValue.fields.username.stringValue === auth.user);
      if (!currentUser) return;

      const userDoc = doc(db, "users", currentUser.id);

      let userBookshelf = currentUser._document.data.value.mapValue.fields.bookshelf.arrayValue.values;

      if (!userBookshelf) userBookshelf = [];
      else if (userBookshelf.length === 10) {
        alert("Se llego al maximo de libros");
        return;
      } else {
        userBookshelf = userBookshelf.map(value => value.stringValue);
      }

      if (userBookshelf.find(e => e === bookId)) {
        alert("El libro ya existe en su lista");
        return;
      }

      userBookshelf.push(bookId);

      await updateDoc(userDoc, {
        bookshelf: [...userBookshelf],
      });

      setIsInBookshelf(true);

      alert("Se agrego el libro a la estanteria");
      navigate("/bookshelf");
    } catch (err) {
      console.log(err.message);
    }
  }

  async function removeBook() {
    const usersRef = collection(db, "users");
    const usersData = await getDocs(usersRef);
    const currentUser = usersData.docs.find(doc => doc._document.data.value.mapValue.fields.username.stringValue === auth.user);
    if (!currentUser) return;

    const userDoc = doc(db, "users", currentUser.id);

    let userBookshelf = currentUser._document.data.value.mapValue.fields.bookshelf.arrayValue.values;

    userBookshelf = userBookshelf.map(value => value.stringValue);

    userBookshelf = userBookshelf.filter(e => e !== bookId);

    await updateDoc(userDoc, {
      bookshelf: [...userBookshelf],
    });

    setIsInBookshelf(false);
    alert("Se quito el libro de la estanteria");
    navigate("/bookshelf");
  }

  return (
    <div>
      <StyledBookHeader>
        <div>
          <img src={bookDisplayed.thumbnail} />
        </div>
        <div>
          <h1>{bookDisplayed.title}</h1>
          <h3>
            {bookDisplayed.authors.map((author, i) => (
              <span key={i}>{author}. </span>
            ))}
          </h3>
          <p>{bookDisplayed.description}</p>
          <div>
            {auth.user &&
              (isInBookshelf ? (
                <button style={{ backgroundColor: "#ff9b9b" }} onClick={removeBook}>
                  Quitar de mis libros
                </button>
              ) : (
                <button style={{ backgroundColor: "#9bff9e" }} onClick={addToBookshelf}>
                  Agregar a mis libros
                </button>
              ))}
            {auth.user && <button onClick={openModal}>Crear reseña</button>}
          </div>
        </div>
      </StyledBookHeader>
      <StyledBookDetails>
        <h2>Detalles del libro</h2>
        <div>
          <p>
            <strong>Fecha de publicación:</strong> {bookDisplayed.publishedDate}
          </p>
          <p>
            <strong>Editora:</strong> {bookDisplayed.publisher}
          </p>
          <p>
            <strong>Categorías:</strong>{" "}
            {bookDisplayed.categories.map((item, i) => (
              <span key={i}>{item} </span>
            ))}
          </p>
          <p>
            <strong>Lenguaje:</strong> {bookDisplayed.language}
          </p>
          <p>
            <strong>Numero de páginas:</strong> {bookDisplayed.pageCount}
          </p>
          <p>
            <strong>Clasificación:</strong> {bookDisplayed.maturityRating}
          </p>
        </div>
      </StyledBookDetails>
      {modalShown && (
        <StyledReviewModal>
          <form onSubmit={handleSubmit(handleAddReview)}>
            <h3>Reseña de "{bookDisplayed.title}"</h3>
            <textarea
              name="reviewText"
              required
              placeholder="Texto de la reseña..."
              maxLength={230}
              rows="6"
              {...register("reviewText", { required: true })}
            ></textarea>
            <div>
              <button onClick={() => setModalShown(false)}>Cancelar</button>
              <button type="submit">Crear</button>
            </div>
          </form>
        </StyledReviewModal>
      )}
    </div>
  );
}
