import { Container, Button } from "react-bootstrap";
import BookForm from "../components/BookForm";
import { useNavigate } from "react-router-dom";

export default function AddBook() {
  const navigate = useNavigate();

  function navigateToHome() {
    navigate("/", { replace: true });
  }

  function handleAddBook(parameterForm) {
    fetch("http://127.0.0.1:8000/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parameterForm),
    })
      .then((response) => {
        if (response.ok) {
          navigateToHome();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Container>
      <Container className="d-flex justify-content-between">
        <h1>Add Book</h1>
        <Button className="m-2" onClick={navigateToHome}>
          Go Back
        </Button>
      </Container>

      <Container>
        <BookForm handleAddBook={handleAddBook} />
      </Container>
    </Container>
  );
}
