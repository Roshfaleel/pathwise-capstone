import { Form, Button, Card } from "react-bootstrap";

function AchievementForm({ onAdd }) {
  const handleAdd = (e) => {
    e.preventDefault();
    const newAchievement = {
      achievement_name: e.target.name.value,
      description: e.target.description.value,
      date: e.target.date.value,
      type: e.target.type.value,
    };
    onAdd(newAchievement);
  };

  return (
    <Card className="achievements__add mb-4">
      <Card.Body>
        <Card.Title>Add Achievement</Card.Title>
        <Form onSubmit={handleAdd}>
          <Form.Group className="achievements__form" controlId="formName">
            <Form.Label>Achievement Name</Form.Label>
            <Form.Control type="text" name="name" required />
          </Form.Group>
          <Form.Group
            className="achievements__form"
            controlId="formDescription"
          >
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" name="description" required />
          </Form.Group>
          <Form.Group className="achievements__form" controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" name="date" required />
          </Form.Group>
          <Form.Group className="achievements__form" controlId="formType">
            <Form.Label>Type</Form.Label>
            <Form.Control as="select" name="type" required>
              <option>Award</option>
              <option>Certification</option>
              <option>Other</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Achievement
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default AchievementForm;
