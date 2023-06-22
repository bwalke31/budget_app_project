import { Button, Card, ProgressBar, Stack } from "react-bootstrap";
import { useBudgetContext } from "./Contexts/BudgetContext";

export default function BudgetCard({ id, title, description, amount, max }) {
  const { deleteBudget } = useBudgetContext();

  function handleDelete(e) {
    e.preventDefault();
    deleteBudget({
      id: id,
    });
  }

  return (
    <Card style={{ width: "40rem" }}>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between">
          {title}
          <div className="fw-normal">
            ${amount} / ${max}
          </div>
        </Card.Title>
        <Card.Text>{description}</Card.Text>
        <ProgressBar className="mb-4" animated now={(amount / max) * 100} />
        <Stack
          direction="horizontal"
          gap={2}
          className="d-flex justify-content-end"
        >
          <Button>Update Expenses</Button>
          <Button onClick={handleDelete} variant="outline-danger">
            Delete
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}
