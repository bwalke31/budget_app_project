import { Button, Card, Stack } from "react-bootstrap";

export function BudgetCard({ title, description, amount, onChange }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Title</Card.Title>
        <Card.Text>Description</Card.Text>
        <Card.Text>
          Amount:<span style={{ marginLeft: 5 }}>$10</span>
        </Card.Text>
        <Stack direction="horizontal" gap={2}>
          <Button>Update</Button>
          <Button variant="outline-danger">Delete</Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}
