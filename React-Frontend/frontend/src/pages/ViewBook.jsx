import BookDetails from "../components/BookDetails";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ViewBook() {
  const [form, setForm] = useState("");
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/books/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(
            response.statusText +
              " " +
              response.status +
              " The server has not found anything matching the Request-URI"
          );
        }
      })
      .then((form) => setForm(form))
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  }, []);

  return (
    <div className="md:container md:mx-auto m-20 bg-secondary rounded-2xl border">
      <BookDetails form={form} />
    </div>
  );
}
