import BookList from "../components/BookList";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function Home() {
  const navigate = useNavigate();

  function navigateToAddBook() {
    navigate("/AddBook", { replace: true });
  }

  return (
    <div className="md:container md:mx-auto">
      <div className="md:container md:mx-auto p-2">
        <h1 className="m-2 font-black text-4xl">Book Management System</h1>
      </div>

      <section className="md:container md:mx-auto">
        <div className="flex justify-between">
          <h1 className="my-4 font-bold text-2xl underline decoration-4 hoven:text-sky-600">
            Book List
          </h1>

          <button
            className="text-white m-2 px-6 py-2
          uppercase rounded bg-blue-400 hover:bg-blue-500 
          shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
            onClick={navigateToAddBook}
          >
            + Add Book
          </button>
        </div>

        <BookList />
      </section>
    </div>
  );
}
