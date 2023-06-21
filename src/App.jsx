import { Button, Stack } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import BudgetCard from "./BudgetCard";
import { useState } from "react";
import AddBudgetModal from "./Modals/AddBudgetModal";

function App() {
  // Modal state
  const [show, setShow] = useState(false);

  // Handling showing and closing modal
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <Container className="my-4">
      <Stack direction="horizontal" gap={2} className="mb-5">
        <h1 className="me-auto">Budget</h1>
        <Button onClick={handleShow}>Add Budget</Button>
        <Button variant="outline-primary">Add Expense</Button>
      </Stack>
      <BudgetCard
        title={"Title"}
        description={"This is a budget"}
        onChange={null}
        amount={500}
        max={1000}
      />
      {show ? <AddBudgetModal show={show} handleClose={handleClose} /> : ""}
    </Container>
  );
}

export default App;
