import { Container } from "react-bootstrap";
import BookDetails from "../components/BookDetails";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ViewBook() {
  const [form, setForm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/books/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Server Error Status: ${response.status}`);
        } else {
          setError("Something went wrong in useEffect of ViewBook");
        }
        return response.json();
      })
      .then((form) => setForm(form))
      .catch((error) =>
        setError("Something went wrong in useEffect of ViewBook")
      );
  }, []);

  return (
    <Container>
      <BookDetails form={form} />
    </Container>
  );
}
