import "./Dashboard.scss";
import { Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);


function Dashboard() {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [skills, setSkills] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const userId = localStorage.getItem("userId");

      const API_URL = import.meta.env.VITE_API_URL;

      if (!userId) {
        console.log("not found");
        setError("user Id not found");
        return;
      }
      try {
        const [userResponse, skillsResponse, achievementsResponse] =
          await Promise.all([
            axios.get(`${API_URL}/api/users/${userId}`),
            axios.get(`${API_URL}/api/users/${userId}/skills`),
            axios.get(`${API_URL}/api/users/${userId}/achievements`),
          ]);

        setUser(userResponse.data);
        setSkills(skillsResponse.data.skills || []);
        setAchievements(achievementsResponse.data.achievements || []);
      } catch (error) {
        console.error("Failed to fetch details", error);
        setError("Failed to load details.");
      }
    };

    fetchDetails();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  const skillsData = {
    labels: skills.map(skill => skill.skill_name),
    datasets: [
      {
        label: "Proficiency Level",
        data: skills.map(skill => {
          switch (skill.proficiency_level) {
            case "Advanced":
              return 3;
            case "Intermediate":
              return 2;
            case "Beginner":
              return 1;
            default:
              return 0;
          }
        }),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const achievementsData = {
    labels: achievements.map(achievement => achievement.achievement_name),
    datasets: [
      {
        label: "Achievements",
        data: achievements.map(() => 1), // Each achievement gets a count of 1
        backgroundColor: ["#FF5733", "#33FF57", "#3357FF"], // Different colors for each achievement
      },
    ],
  };


  return (
    <div className="d-flex">
      <div className="content">
        <Container>
          <Card className="main-card">
            <h1>Welcome to PathWise Dashboard</h1>
            <h2>Hello {user?.name || "Guest"}</h2>
            <div className="card-grid">
              <Card className="sub-card">
                <Card.Body>
                  <Card.Title>Skills Overview</Card.Title>
                  <Bar data={skillsData} options={{ indexAxis: "y" }}/>
                </Card.Body>
              </Card>
              <Card className="sub-card">
                <Card.Body>
                  <Card.Title>Achievements Overview</Card.Title>
                  <Doughnut data={achievementsData} />
                </Card.Body>
              </Card>
            </div>
          </Card>
        </Container>
      </div>
    </div>
  );
}

export default Dashboard;
