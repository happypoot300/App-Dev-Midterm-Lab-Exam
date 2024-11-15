import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookList({ errorProps }) {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/books")
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
      .then((books) => setBooks(books))
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  }, []);

  function updateBookList() {
    fetch("http://127.0.0.1:8000/api/books")
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
      .then((books) => setBooks(books))
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
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
        .catch((error) => {
          setError(error.message);
          console.log(error);
        });
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  }

  return (
    <section
      className="relative flex flex-col w-full min-w-0 pb-1.5 break-words
     dark:bg-secondary border-0 border-transparent border-solid shadow-xl rounded-2xl"
    >
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
            <h1>{error || errorProps}</h1>
          </div>
        </div>
      )}
      <div className="flex-auto px-0 pt-0 pb-2">
        <table className="items-center w-full mb-0 align-top text-slate-700">
          <thead className="align-bottom">
            <tr
              className=" yfont-bold text-center uppercase align-middle bg-transparent  
            shadow-none text-base border-b-solid tracking-none whitespace-nowrap text-slate-900 opacity-70"
            >
              <th>Viewable</th>
              <th className="pl-6">ID</th>
              <th className="pl-">Title</th>
              <th>Author</th>
              <th className="text-nowrap">Published Year</th>
              <th>Genre</th>
              <th className="text-left pl-7">Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr className="odd:bg-[#f3f9f3]  dark:bg-secondary  dark:hover:bg-[#6a7a6a] ">
                <td>
                  <section className="text-nowrap p-0 m-0">
                    <button
                      class="text-white m-1.5 py-1.5 px-3 
                    uppercase rounded bg-yellow-500 hover:bg-yellow-500 
                    shadow hover:shadow-lg font-medium transition transform 
                    hover:-translate-y-0.5"
                      onClick={() => navigateToViewBook(book.id)}
                    >
                      View
                    </button>
                  </section>
                </td>
                <td className="pl-5">{book.id}</td>
                <td className="pl-5">{book.title}</td>
                <td>{book.author}</td>
                <td>{book.published_year}</td>
                <td>{book.genre}</td>
                <td className="truncate text-left pl-7">{book.description}</td>
                <td>
                  <section className="text-nowrap p-0 m-0">
                    <button
                      class="text-white px-3 py-1.5 m-1.5 uppercase 
                    rounded bg-green-400 hover:bg-green-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                      onClick={() => navigateToEditBook(book.id)}
                    >
                      Edit
                    </button>
                    <button
                      class="text-white px-2.5 py-1.5 uppercase 
                    rounded bg-red-400 hover:bg-red-500 shadow 
                    hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                      onClick={() => deleteBook(book.id)}
                    >
                      Delete
                    </button>
                  </section>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
