import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import { useRef } from "react";
import { useBudgetContext } from "../Contexts/BudgetContext";

export default function AddBudgetModal({ show, handleClose }) {
  const nameInput = useRef();
  const amountInput = useRef();
  const descInput = useRef();
  const { addBudget } = useBudgetContext();

  function handleSubmit(e) {
    e.preventDefault();
    addBudget({
      name: nameInput.current.value,
      description: descInput.current.value,
      amount: parseFloat(amountInput.current.value),
    });
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Budget</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-2" controlId="name">
            <Form.Label>Budget Name:</Form.Label>
            <Form.Control ref={nameInput} type="text" required></Form.Control>
          </Form.Group>
          <Form.Group className="mb-2" controlId="name">
            <Form.Label>Budget Description:</Form.Label>
            <Form.Control ref={descInput} type="text" required></Form.Control>
          </Form.Group>
          <Form.Group controlId="amount">
            <Form.Label>Spending Amount:</Form.Label>
            <Form.Control
              min={0}
              step={0.01}
              ref={amountInput}
              type="number"
              required
            ></Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary">
            Add Budget
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
