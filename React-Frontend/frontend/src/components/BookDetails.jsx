import { useNavigate } from "react-router-dom";
import BookForm from "./BookForm";

export default function BookDetails({ form, error }) {
  const isViewOnly = true;

  const navigate = useNavigate();

  function navigateToHome() {
    navigate("/", { replace: true });
  }

  return (
    <section className="p-8 md:container md:mx-auto">
      <div className="flex justify-between items-center">
        <h1 class="font-bold text-3xl">View Book</h1>

        <button
          class="text-white m-2 py-2 px-6 uppercase rounded
         bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg 
         font-medium transition transform hover:-translate-y-0.5"
          onClick={navigateToHome}
        >
          Go Back
        </button>
      </div>

      <div>
        <BookForm form={form} isViewOnly={isViewOnly} error={error} />
      </div>
    </section>
  );
}
