import { useEffect, useState } from "react";
import { Container, Table, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function BookList({ errorProps }) {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/books")
      .then((response) => {
        if (!response.ok) {
          setError("Something went wrong in useEffect of BookList");
        }
        return response.json();
      })
      .then((books) => setBooks(books))
      .catch((error) =>
        setError("Something went wrong in useEffect of BookList")
      );
  }, []);

  function updateBookList() {
    fetch("http://127.0.0.1:8000/api/books")
      .then((response) => {
        if (!response.ok) {
          setError("Something went wrong in updateBookList of BookList");
        }
        return response.json();
      })
      .then((books) => setBooks(books))
      .catch((error) =>
        setError("Something went wrong in updateBookList of BookList")
      );
  }

  function navigateToViewBook(id) {
    navigate(`ViewBook/${id}`, { replace: true });
  }

  function navigateToEditBook(id) {
    navigate(`EditBook/${id}`, { replace: true });
  }

  function deleteBook(id) {
    try {
      fetch(`http://127.0.0.1:8000/api/books/${id}`, { method: "DELETE" })
        .then(() => updateBookList())
        .catch((error) =>
          setError("Something went wrong in deleteBook of BookList")
        );
    } catch (error) {
      setError("Something went wrong in deleteBook of BookList");
    }
  }

  return (
    <Container>
      {error && (
        <Alert variant="danger">
          <h1>{error || errorProps}</h1>
        </Alert>
      )}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Viewable</th>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th className="text-nowrap">Published Year</th>
            <th>Genre</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr>
              <td className="pt-3">
                <Container className="text-nowrap p-0 m-0">
                  <Button
                    variant="secondary"
                    onClick={() => navigateToViewBook(book.id)}
                  >
                    View
                  </Button>
                </Container>
              </td>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.published_year}</td>
              <td>{book.genre}</td>
              <td className="truncate">{book.description}</td>
              <td>
                <Container className="text-nowrap p-0 m-0">
                  <Button
                    variant="warning"
                    className="m-2"
                    onClick={() => navigateToEditBook(book.id)}
                  >
                    Edit
                  </Button>
                  <Button variant="danger" onClick={() => deleteBook(book.id)}>
                    Delete
                  </Button>
                </Container>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
