import { useState, useEffect } from "react";

export default function BookForm({
  form,
  handleEditBook,
  handleAddBook,
  isViewOnly,
  error,
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
    <form onSubmit={form == undefined ? handleAddSubmit : handleEditSubmit}>
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
      <div class="mt-8 space-y-6">
        <div>
          <label
            for="title"
            class="text-md text-gray-700 block mb-1 font-medium text-left"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
            placeholder="Enter Title"
            value={book.title}
            onChange={(e) => onChangeBook("title", e.target.value)}
            readOnly={isViewOnly}
          />
        </div>

        <div>
          <label
            for="author"
            class="text-md text-gray-700 block mb-1 font-medium text-left"
          >
            Author
          </label>
          <input
            type="text"
            name="author"
            id="author"
            class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
            placeholder="Enter Author"
            value={book.author}
            onChange={(e) => onChangeBook("author", e.target.value)}
            readOnly={isViewOnly}
          />
        </div>

        <div>
          <label
            for="published_year"
            class="text-md text-gray-700 block mb-1 font-medium text-left"
          >
            Published Year
          </label>
          <input
            type="number"
            name="published_year"
            id="published_year"
            class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
            placeholder="Enter Year"
            value={book.published_year}
            onChange={(e) => onChangeBook("published_year", e.target.value)}
            readOnly={isViewOnly}
          />
        </div>

        <div>
          <label
            for="genre"
            class="text-md text-gray-700 block mb-1 font-medium text-left"
          >
            Genre
          </label>
          <input
            type="text"
            name="genre"
            id="genre"
            class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
            placeholder="Enter Genre"
            value={book.genre}
            onChange={(e) => onChangeBook("genre", e.target.value)}
            readOnly={isViewOnly}
          />
        </div>

        <div>
          <label
            for="description"
            class="text-md text-gray-700 block mb-1 font-medium text-left"
          >
            Description
          </label>
          <input
            type="text"
            name="description"
            id="description"
            class="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
            placeholder="Enter Description"
            value={book.description}
            onChange={(e) => onChangeBook("description", e.target.value)}
            readOnly={isViewOnly}
          />
        </div>
      </div>

      <div class="space-x-4 mt-8">
        {isViewOnly ? (
          <div class="px-8 py-3 bg-blue-400 text-white flex justify-between rounded">
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7 mr-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              <h6>Currently in View Mode.</h6>
            </div>
          </div>
        ) : (
          <button
            type="submit"
            className="text-white m-2 px-6 py-2
          uppercase rounded bg-blue-400 hover:bg-blue-500 
          shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
          >
            Submit
          </button>
        )}
      </div>
    </form>
  );
}
