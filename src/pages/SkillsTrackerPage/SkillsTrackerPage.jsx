import "./SkillsTrackerPage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Alert
} from "react-bootstrap";

function SkillsTrackerPage() {
  const [skills, setSkills] = useState([]);
  const [form, setForm] = useState({ id: null, name: "", proficiency: "" });
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;

  const userId = localStorage.getItem("userId");

  const fetchSkills = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/users/${userId}/skills`);
      const skillsData = response.data.skills || [];
      setSkills(
        skillsData.map((skill) => ({
          id: skill.skill_id,
          name: skill.skill_name,
          proficiency: skill.proficiency_level,
        }))
      );
    } catch (error) {
      console.error("Error fetching skills", error);
      setError("Failed to fetch skills");
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEditing) {
        await axios.put(`${API_URL}/api/users/${userId}/skills/${form.id}`, {
          skill_name: form.name,
          proficiency_level: form.proficiency,
        });
      } else {
        const response = await axios.post(
          `${API_URL}/api/users/${userId}/skills`,
          {
            skill_name: form.name,
            proficiency_level: form.proficiency,
          }
        );
        const newSkill = {
          id: response.data.skill_id,
          name: form.name,
          proficiency: form.proficiency,
        };
        setSkills([...skills, newSkill]);
      }
      setForm({ id: null, name: "", proficiency: "" });
      setIsEditing(false);
      setShowModal(false);
      fetchSkills(); // Refresh skill list
    } catch (error) {
      console.error("Error saving skill:", error);
      setError("Failed to save skill");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/users/${userId}/skills/${id}`);
      setSkills(skills.filter((skill) => skill.id !== id));
    } catch (error) {
      console.error("Error deleting skill:", error);
      setError("Failed to delete skill");
    }
  };

  // Modal to edit sills
  const handleEdit = (skill) => {
    setForm(skill);
    setIsEditing(true);
    setShowModal(true);
  };

  // Modal to add skill
  const handleAdd = () => {
    setForm({ id: null, name: "", proficiency: "" });
    setIsEditing(false);
    setShowModal(true);
  };

  return (
    <div className="skills">
      <h1 className="skills__header">Your Skills</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <Container className="skills__container">
        <Button className="skills__button mb-4" variant="primary" onClick={handleAdd}>
          Add Skill
        </Button>
        <Row>
          {skills.map((skill) => (
            <Col key={skill.id} xs={12} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{skill.name}</Card.Title>
                  <Card.Text>Proficiency: {skill.proficiency}</Card.Text>
                  <div className="skills__buttons">
                      <img
                        className="skills__icon"
                        src={editIcon}
                        alt="Edit icon"
                        onClick={() => handleEdit(skill)}
                      />
                      <img
                        className="skills__icon"
                        src={deleteIcon}
                        alt="Delete icon"
                        onClick={() => handleDelete(skill.id)}
                      />
                      </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>{isEditing ? "Edit Skill" : "Add Skill"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="skillName" className="mb-3">
                <Form.Label>Skill Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  placeholder="Enter skill name"
                  required
                />
              </Form.Group>
              <Form.Group controlId="proficiencyLevel" className="mb-3">
                <Form.Label>Proficiency Level</Form.Label>
                <Form.Select
                  name="proficiency"
                  value={form.proficiency}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select proficiency</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </Form.Select>
              </Form.Group>
              <Button variant="primary" type="submit">
                {isEditing ? "Save Changes" : "Add Skill"}
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
}

export default SkillsTrackerPage;
