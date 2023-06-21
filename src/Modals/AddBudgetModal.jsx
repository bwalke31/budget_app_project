import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

export default function AddBudgetModal({ show, handleClose }) {
  const handleSubmit = () => null;
  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Budget</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-2" controlId="name">
            <Form.Label>Budget Name:</Form.Label>
            <Form.Control type="text" required></Form.Control>
          </Form.Group>
          <Form.Group controlId="amount">
            <Form.Label>Spending Amount:</Form.Label>
            <Form.Control type="text" required></Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleClose}>
            Add Budget
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
