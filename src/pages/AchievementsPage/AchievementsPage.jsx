import "./AchievementsPage.scss";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axios from "axios";


function AchievementsPage() {
  const [achievements, setAchievements] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentAchievement, setCurrentAchievement]=useState(null)
  const [error, setError] = useState(null);

  const fetchAchievements = async () => {
    const userId = localStorage.getItem("userId");
    const API_URL = import.meta.env.VITE_API_URL;
  
    if (!userId) {
      console.log("User ID not found");
      setError("User ID not found");
      return;
    }
  
    try {
      const achievementsResponse = await axios.get(`${API_URL}/api/users/${userId}/achievements`);
      console.log("Achievements Response:", achievementsResponse.data); 
 
      const achievementsData = achievementsResponse.data.achievements || [];
  
      const formattedAchievements = achievementsData.map((achievement) => ({
        name: achievement.achievement_name, 
        description: achievement.description,
        date: new Date(achievement.date).toLocaleDateString(), 
        type: achievement.type,
      }));
  
      setAchievements(formattedAchievements);
  
    } catch (error) {
      console.error("Error fetching achievements:", error);
      setError("Failed to fetch achievements");
    }
  };
  
  useEffect(() => {
    fetchAchievements();
  }, []);

  const handleEdit= (achievement) =>{
    setIsEditing(true);
    setCurrentAchievement(achievement);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const updatedAchievements = achievements.map((achievement) =>
      achievement.id === currentAchievement.id ? currentAchievement : achievement
    );
    setAchievements(updatedAchievements);
    setIsEditing(false);
    setCurrentAchievement(null);
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const newAchievement = {
      achievement_name : e.target.name.value,
      description :e.target.description.value,
      date : e.target.date.value,
      type : e.target.type.value,
    }
    const userId = localStorage.getItem("userId");
    const API_URL = import.meta.env.VITE_API_URL;

    try {
      await axios.post(`${API_URL}/api/users/${userId}/achievements`, newAchievement);
      setAchievements([...achievements, newAchievement]);
    } catch (error) {
      setError("Failed to add achievement");
    }
  }

  

  return (
    <div className="achievements">
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Achievements</Card.Title>
          <Row>
            {achievements.map((achievement, index) => (
              <Col key={achievement.id || `${achievement.achievement_name}-${index}`} sm={6} md={4}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>{achievement.name}</Card.Title> 
                  <Card.Subtitle className="mb-2 text-muted">{achievement.type}</Card.Subtitle>
                  <Card.Text>{achievement.description}</Card.Text>
                  <Card.Text><small>{new Date(achievement.date).toLocaleDateString()}</small></Card.Text>
                  <Button variant="primary" onClick={() => handleEdit(achievement)}>Edit</Button>
                </Card.Body>
              </Card>
            </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Add Achievement</Card.Title>
          <Form onSubmit={handleAdd}>
            <Form.Group controlId="formName">
              <Form.Label>Achievement Name</Form.Label>
              <Form.Control type="text" name="name" required/>
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" name="description" required />
            </Form.Group>
            <Form.Group controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" name="date" required />
            </Form.Group>
            <Form.Group controlId="formType">
              <Form.Label>Type</Form.Label>
              <Form.Control as="select" name="type" required>
                <option>Award</option>
                <option>Certification</option>
                <option>Course</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">Add Achievement</Button>
          </Form>
        </Card.Body>
      </Card>
      {isEditing && (
        <Card className="mb-4">
          <Card.Body>
            <Card.Title>Edit Achievement</Card.Title>
            <Form onSubmit={handleSave}>
              <Form.Group controlId="formName">
                <Form.Label>Achievement Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={currentAchievement.name}
                  onChange={(e) => setCurrentAchievement({ ...currentAchievement, achievement_name: e.target.value })}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  value={currentAchievement.description}
                  onChange={(e) => setCurrentAchievement({ ...currentAchievement, description: e.target.value })}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formDate">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={new Date(currentAchievement.date).toISOString().split('T')[0]} 
                  onChange={(e) => setCurrentAchievement({ ...currentAchievement, date: e.target.value })}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formType">
                <Form.Label>Type</Form.Label>
                <Form.Control
                  as="select"
                  name="type"
                  value={currentAchievement.type}
                  onChange={(e) => setCurrentAchievement({ ...currentAchievement, type: e.target.value })}
                  required
                >
                  <option>Award</option>
                  <option>Certification</option>
                  <option>Other</option>
                </Form.Control>
              </Form.Group>
              <Button variant="primary" type="submit">Save Changes</Button>
              <Button variant="secondary" onClick={() => setIsEditing(false)} className="ms-2">Cancel</Button>
            </Form>
          </Card.Body>
        </Card>
      )}

      {/* Display Error if any */}
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  )
}

export default AchievementsPage
