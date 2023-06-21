import { Button, Card, ProgressBar, Stack } from "react-bootstrap";

export default function BudgetCard({
  title,
  description,
  onChange,
  amount,
  max,
}) {
  return (
    <Card style={{ width: "30rem" }}>
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
          <Button>View Expenses</Button>
          <Button variant="outline-danger">Delete</Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}
