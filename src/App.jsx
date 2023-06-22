import { Button, Stack } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import BudgetCard from "./BudgetCard";
import { useState } from "react";
import AddBudgetModal from "./Modals/AddBudgetModal";
import { useBudgetContext } from "./Contexts/BudgetContext";

function App() {
  // Modal state
  const [show, setShow] = useState(false);
  const { budgets, deleteBudget } = useBudgetContext();

  // Handling showing and closing modal
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Container className="my-4">
        <Stack direction="horizontal" gap={2} className="mb-5">
          <h1 className="me-auto">Budget</h1>
          <Button onClick={handleShow}>Add Budget</Button>
          <Button variant="outline-primary">Add Expense</Button>
        </Stack>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(450px, 1fr))",
            gap: "1rem",
            alignItems: "flex-start",
          }}
        >
          {budgets.map((budget) => {
            return (
              <BudgetCard
                key={budget.id}
                id={budget.id}
                title={budget.name}
                description={budget.description}
                amount={budget.spent}
                max={budget.amount}
              />
            );
          })}
        </div>
      </Container>
      {show ? <AddBudgetModal show={show} handleClose={handleClose} /> : ""}
    </>
  );
}

export default App;
