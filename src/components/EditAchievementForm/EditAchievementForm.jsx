import { Form, Button, Card } from "react-bootstrap";

function EditAchievementForm({ achievement, onSave, onCancel }) {
  const handleSave = (e) => {
    e.preventDefault();
    const updatedAchievement = {
      id: achievement.id,
      name: e.target.name.value,
      description: e.target.description.value,
      date: e.target.date.value,
      type: e.target.type.value,
    };
    onSave(updatedAchievement);
  };

  return (
    <Card className="achievements__edit mb-4">
      <Card.Body>
        <Card.Title>Edit Achievement</Card.Title>
        <Form onSubmit={handleSave}>
          <Form.Group className="achievements__form" controlId="formName">
            <Form.Label>Achievement Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              defaultValue={achievement.name}
              required
            />
          </Form.Group>
          <Form.Group className="achievements__form" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              defaultValue={achievement.description}
              required
            />
          </Form.Group>
          <Form.Group className="achievements__form" controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              defaultValue={achievement.date}
              required
            />
          </Form.Group>
          <Form.Group className="achievements__form" controlId="formType">
            <Form.Label>Type</Form.Label>
            <Form.Control as="select" name="type" defaultValue={achievement.type} required>
              <option>Award</option>
              <option>Certification</option>
              <option>Other</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
          <Button variant="secondary" onClick={onCancel} className="ms-2">
            Cancel
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default EditAchievementForm;
