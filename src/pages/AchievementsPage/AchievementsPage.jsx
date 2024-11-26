import "./AchievementsPage.scss";
import { Card, Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axios from "axios";


function AchievementsPage() {
  const [achievements, setAchievements] = useState([]);
  const [error, setError] = useState(null);

  const fetchDetails = async () => {
    const userId = localStorage.getItem("userId");
    const API_URL = import.meta.env.VITE_API_URL;
  
    if (!userId) {
      console.log("User ID not found");
      setError("User ID not found");
      return;
    }
  
    try {
      const achievementsResponse = await axios.get(`${API_URL}/api/users/${userId}/achievements`);
      console.log("Achievements Response:", achievementsResponse.data); // Log the response
  
      // Access the achievements array directly
      const achievementsData = achievementsResponse.data.achievements || [];
  
      // Format the achievements as needed
      const formattedAchievements = achievementsData.map((achievement) => ({
        name: achievement.achievement_name, // Use 'achievement_name' field
        description: achievement.description,
        date: new Date(achievement.date).toLocaleDateString(), // Format the date
        type: achievement.type,
      }));
  
      // Set the state with the formatted achievements
      setAchievements(formattedAchievements);
  
    } catch (error) {
      console.error("Error fetching achievements:", error);
      setError("Failed to fetch achievements");
    }
  };
  

  // Call fetchDetails when the component mounts
  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div className="achievements">
      {error && <div className="alert alert-danger">{error}</div>}
      {/* Render achievements or any loading state */}
      <div>
        {achievements.length > 0 ? (
          <ul>
            {achievements.map((achievement, index) => (
              <li key={index}>
                <h5>{achievement.name}</h5>
                <p>{achievement.description}</p>
                <small>{achievement.date}</small>
                <p>{achievement.type}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No achievements found</p>
        )}
      </div>
    </div>
  )
}

export default AchievementsPage
