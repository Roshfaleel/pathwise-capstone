import { useState, useEffect } from "react";
import axios from "axios";
import "./AchievementsPage.scss";
import AchievementsList from "../../components/AchievementsList/AchievementsList";
import EditAchievementForm from "../../components/EditAchievementForm/EditAchievementForm";
import AchievementForm from "../../components/AchievementForm/AchievementForm";

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
  const handleSave = async (updatedAchievement) => {

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
  const handleAdd = async (newAchievement) => {
    const userId = localStorage.getItem("userId");
    const API_URL = import.meta.env.VITE_API_URL;

    try {
      const response = await axios.post(
        `${API_URL}/api/users/${userId}/achievements`,
        newAchievement
      );
  
      if (response.status === 201) {
        const addedAchievement = {
          ...newAchievement,
          id: response.data.achievement_id, 
        };

        setAchievements((prevAchievements) => [
          ...prevAchievements,
          addedAchievement,
        ]);
        fetchAchievements();
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
      {error && <div className="alert alert-danger">{error}</div>}
      <AchievementsList
        achievements={achievements}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {isEditing && (
        <EditAchievementForm
          achievement={currentAchievement}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      )}
      <AchievementForm onAdd={handleAdd} />
    </div>
  );
}

export default AchievementsPage;
