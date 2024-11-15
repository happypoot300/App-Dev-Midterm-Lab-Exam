import BookForm from "../components/BookForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AddBook() {
  const [error, setError] = useState("");
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
        } else {
          throw new Error(
            response.statusText +
              " " +
              response.status +
              " The server encountered an unexpected condition that prevented it from fulfilling the request"
          );
        }
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  }

  return (
    <div className="md:container md:mx-auto m-20 bg-secondary rounded-2xl border">
      <section className="p-8 md:container md:mx-auto">
        <div className="flex justify-between items-center">
          <h1 class="font-bold text-3xl">Add Book</h1>

          <button
            class="text-white m-2 py-2 px-6 uppercase rounded
         bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg 
         font-medium transition transform hover:-translate-y-0.5"
            onClick={navigateToHome}
          >
            Go Back
          </button>
        </div>

        {error && (
          <div class="px-8 py-6 bg-red-400 text-white flex justify-between rounded">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7 mr-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 
                2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 
                1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
              <h1>{error}</h1>
            </div>
          </div>
        )}

        <div>
          <BookForm handleAddBook={handleAddBook} />
        </div>
      </section>
    </div>
  );
}
