import "./SkillsTrackerPage.scss"
import { useState, useEffect } from "react";
import axios from "axios";

function SkillsTrackerPage() {
  const [skills, setSkills] = useState([]);
  const [form, setForm] = useState({i:null, name:"", proficiency:""})
  const [showModal, setShowModal] = useState(false);
  const [error, setError]=useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;

  const userId = localStorage.getItem("userId");
 
  const fetchSkills =async () =>{
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
      setError("Failed to fetch skills")
    }
  };

  useEffect (()=>{
    fetchSkills();
  },[])

  return (
    <div className='skills'>
      Skill Tracking Page
    </div>
  )
}

export default SkillsTrackerPage
