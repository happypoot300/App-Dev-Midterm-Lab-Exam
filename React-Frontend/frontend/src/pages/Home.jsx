import { Container, Button } from "react-bootstrap";
import BookList from "../components/BookList";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function navigateToAddBook() {
    navigate("/AddBook", { replace: true });
  }

  return (
    <Container>
      <Container className="p-2">
        <h1>Book Management System</h1>
      </Container>

      <Container>
        <Container className="d-flex justify-content-between">
          <h1>Book List</h1>
          <Button className="m-2" onClick={navigateToAddBook}>
            + Add Book
          </Button>
        </Container>

        <BookList />
      </Container>
    </Container>
  );
}
