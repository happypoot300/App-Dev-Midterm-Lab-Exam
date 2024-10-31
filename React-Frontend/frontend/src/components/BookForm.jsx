import { Container, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function BookForm({
  form,
  handleEditBook,
  handleAddBook,
  isViewOnly,
}) {
  const bookState =
    form == undefined
      ? {
          title: "",
          author: "",
          year: "",
          genre: "",
          description: "",
        }
      : { ...form };

  const [book, setBook] = useState(bookState);

  useEffect(() => {
    setBook(bookState);
  }, [form]);

  function onChangeBook(column, value) {
    setBook({ ...book, [column]: value });
  }

  function handleEditSubmit(event) {
    event.preventDefault();
    handleEditBook(book);
  }

  function handleAddSubmit(event) {
    event.preventDefault();
    handleAddBook(book);
  }

  return (
    <Form onSubmit={form == undefined ? handleAddSubmit : handleEditSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Title"
          required
          Value={book.title}
          onChange={(e) => onChangeBook("title", e.target.value)}
          readOnly={isViewOnly}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Author"
          required
          Value={book.author}
          onChange={(e) => onChangeBook("author", e.target.value)}
          readOnly={isViewOnly}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Published Year</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Year"
          required
          Value={book.published_year}
          onChange={(e) => onChangeBook("published_year", e.target.value)}
          readOnly={isViewOnly}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Genre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Genre"
          required
          Value={book.genre}
          onChange={(e) => onChangeBook("genre", e.target.value)}
          readOnly={isViewOnly}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Description"
          required
          Value={book.description}
          onChange={(e) => onChangeBook("description", e.target.value)}
          readOnly={isViewOnly}
        />
      </Form.Group>
      {isViewOnly ? (
        <h6>"Currently in View Mode"</h6>
      ) : (
        <Button type="submit" variant="success">
          Submit
        </Button>
      )}
    </Form>
  );
}
