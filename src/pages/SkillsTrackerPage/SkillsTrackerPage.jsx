import "./SkillsTrackerPage.scss";
import { useState, useEffect } from "react";
import axios from "axios";

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

  return <div className="skills">Skill Tracking Page</div>;
}

export default SkillsTrackerPage;
