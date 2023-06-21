import { Button, Stack } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { BudgetCard } from "./BudgetCard";

function App() {
  return (
    <Container className="my-4">
      <Stack direction="horizontal" gap={2} className="mb-5">
        <h1 className="me-auto">Budget</h1>
        <Button>Add Budget</Button>
        <Button variant="outline-primary">Add Expense</Button>
      </Stack>
      <BudgetCard />
    </Container>
  );
}

export default App;
