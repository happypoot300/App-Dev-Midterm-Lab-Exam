import { Container, Button } from "react-bootstrap";
import BookForm from "../components/BookForm";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function EditBook() {
  const [form, setForm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  function navigateToHome() {
    navigate("/", { replace: true });
  }

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/books/${id}`)
      .then((response) => {
        if (!response.ok) {
          setError("Something went wrong in useEffect of EditBook");
        }
        return response.json();
      })
      .then((form) => setForm(form))
      .catch((error) =>
        setError("Something went wrong in useEffect of EditBook")
      );
  }, []);

  function handleEditBook(parameterForm) {
    fetch(`http://127.0.0.1:8000/api/books/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parameterForm),
    })
      .then((response) => {
        console.log("handleEditBook is called: ", parameterForm);
        if (!response.ok) {
          setError("Something went wrong in handleEditBook of EditBook");
        }
      })
      .catch((error) => setError(error));

    navigateToHome();
  }

  return (
    <Container>
      <Container className="d-flex justify-content-between">
        <h1>Edit Book</h1>
        <Button className="m-2" onClick={navigateToHome}>
          Go Back
        </Button>
      </Container>

      <Container>
        <BookForm
          form={form}
          handleEditBook={handleEditBook}
          errorProps={error}
        />
      </Container>
    </Container>
  );
}
