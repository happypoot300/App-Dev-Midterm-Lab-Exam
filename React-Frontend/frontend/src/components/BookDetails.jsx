import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BookForm from "./BookForm";

export default function BookDetails({ form }) {
  const isViewOnly = true;

  const navigate = useNavigate();

  function navigateToHome() {
    navigate("/", { replace: true });
  }

  return (
    <Container>
      <Container className="d-flex justify-content-between">
        <h1>View Book</h1>
        <Button className="m-2" onClick={navigateToHome}>
          Go Back
        </Button>
      </Container>

      <Container>
        <BookForm form={form} isViewOnly={isViewOnly} />
      </Container>
    </Container>
  );
}
