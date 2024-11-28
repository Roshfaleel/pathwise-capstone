import { useState, useEffect } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import axios from "axios";
import "./AchievementsPage.scss";
import AchievementsList from "../../components/AchievementsList/AchievementsList";

function AchievementsPage() {
  const [achievements, setAchievements] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentAchievement, setCurrentAchievement] = useState(null);
  const [error, setError] = useState(null);

  // Fetch achievements data from API
  const fetchAchievements = async () => {
    const userId = localStorage.getItem("userId");
    const API_URL = import.meta.env.VITE_API_URL;

    if (!userId) {
      console.log("User ID not found");
      setError("User ID not found");
      return;
    }

    try {
      const achievementsResponse = await axios.get(
        `${API_URL}/api/users/${userId}/achievements`
      );
      console.log("Achievements Response:", achievementsResponse.data);

      const achievementsData = achievementsResponse.data.achievements || [];

      const formattedAchievements = achievementsData.map((achievement) => ({
        id: achievement.achievement_id,
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

  // Handle edit button click
  const handleEdit = (achievement) => {
    setIsEditing(true);
    setCurrentAchievement(achievement);
  };

  // Handle save changes to an achievement
  const handleSave = async (e) => {
    e.preventDefault();

    const updatedAchievement = {
      achievement_name: currentAchievement.name,
      description: currentAchievement.description,
      date: currentAchievement.date,
      type: currentAchievement.type,
    };

    const userId = localStorage.getItem("userId");
    const API_URL = import.meta.env.VITE_API_URL;

    try {
      // Send PUT request to update the achievement
      const response = await axios.put(
        `${API_URL}/api/users/${userId}/achievements/${currentAchievement.id}`,
        updatedAchievement
      );

      if (response.status === 200) {
        console.log("Achievement updated successfully:", response.data.message);
        setAchievements(
          achievements.map((achievement) =>
            achievement.id === currentAchievement.id
              ? currentAchievement
              : achievement
          )
        );
        setIsEditing(false);
        setCurrentAchievement(null);
      }
    } catch (error) {
      console.error("Error updating achievement:", error);
      setError("Failed to update achievement");
    }
  };

  // Handle adding a new achievement
  const handleAdd = async (e) => {
    e.preventDefault();

    const newAchievement = {
      achievement_name: e.target.name.value,
      description: e.target.description.value,
      date: e.target.date.value,
      type: e.target.type.value,
    };

    const userId = localStorage.getItem("userId");
    const API_URL = import.meta.env.VITE_API_URL;

    try {
      // Send POST request to add new achievement
      const response = await axios.post(
        `${API_URL}/api/users/${userId}/achievements`,
        newAchievement
      );

      if (response.status === 201) {
        console.log("Achievement added successfully:", response.data.message);
        setAchievements([...achievements, newAchievement]);
      }
    } catch (error) {
      setError("Failed to add achievement");
    }
  };

  // Handle delete an achievement
  const handleDelete = async (achievementId) => {
    const userId = localStorage.getItem("userId");
    const API_URL = import.meta.env.VITE_API_URL;

    if (!userId) {
      console.log("User ID not found");
      setError("User ID not found");
      return;
    }

    try {
      await axios.delete(
        `${API_URL}/api/users/${userId}/achievements/${achievementId}`
      );
      // Update the achievements state by removing the deleted achievement
      setAchievements(
        achievements.filter((achievement) => achievement.id !== achievementId)
      );
    } catch (error) {
      console.error("Error deleting achievement:", error);
      setError("Failed to delete achievement");
    }
  };

  return (
    <div className="achievements">
      <h1 className="achievements__header"> Your Achievements</h1>
      {/* Display error message */}
      {error && <div className="alert alert-danger">{error}</div>}
      {/* Display Achievements */}
      <AchievementsList
        achievements={achievements}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {isEditing && (
        <Card className="achievements__edit mb-4">
          <Card.Body>
            <Card.Title className="achievements__edit-title">
              Edit Achievement
            </Card.Title>
            <Form onSubmit={handleSave}>
              <Form.Group className="achievements__form" controlId="formName">
                <Form.Label>Achievement Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={currentAchievement.name}
                  onChange={(e) =>
                    setCurrentAchievement({
                      ...currentAchievement,
                      name: e.target.value,
                    })
                  }
                  required
                />
              </Form.Group>
              <Form.Group
                className="achievements__form"
                controlId="formDescription"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  value={currentAchievement.description}
                  onChange={(e) =>
                    setCurrentAchievement({
                      ...currentAchievement,
                      description: e.target.value,
                    })
                  }
                  required
                />
              </Form.Group>
              <Form.Group className="achievements__form" controlId="formDate">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={
                    new Date(currentAchievement.date)
                      .toISOString()
                      .split("T")[0]
                  }
                  onChange={(e) =>
                    setCurrentAchievement({
                      ...currentAchievement,
                      date: e.target.value,
                    })
                  }
                  required
                />
              </Form.Group>
              <Form.Group className="achievements__form" controlId="formType">
                <Form.Label>Type</Form.Label>
                <Form.Control
                  as="select"
                  name="type"
                  value={currentAchievement.type}
                  onChange={(e) =>
                    setCurrentAchievement({
                      ...currentAchievement,
                      type: e.target.value,
                    })
                  }
                  required
                >
                  <option>Award</option>
                  <option>Certification</option>
                  <option>Other</option>
                </Form.Control>
              </Form.Group>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
              <Button
                variant="secondary"
                onClick={() => setIsEditing(false)}
                className="ms-2"
              >
                Cancel
              </Button>
            </Form>
          </Card.Body>
        </Card>
      )}

      {/* Add Achievement Form */}
      <Card className="achievements__add mb-4">
        <Card.Body>
          <Card.Title className="achievements__edit-title">
            Add Achievement
          </Card.Title>
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
    </div>
  );
}

export default AchievementsPage;
