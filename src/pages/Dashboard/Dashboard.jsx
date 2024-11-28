import "./Dashboard.scss";
import { Card, Container} from "react-bootstrap";
import TaskManagement from "../../components/TaskManagement/TaskManagement";
import GoalTracking from "../../components/GoalTracking/GoalTracking";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import SkillsChart from "../../components/SkillsChart/SkillsChart";
import AchievementsChart from "../../components/AchievementsChart/AchievementsChart";
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
);

function Dashboard() {
  const [user, setUser] = useState(null);
  const [skills, setSkills] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [error, setError] = useState(null);

  const tasks = [
    { id: 1, name: "Finish React tutorial", completed: true },
    { id: 2, name: "Start JavaScript exercises", completed: false },
    { id: 3, name: "Plan portfolio sections", completed: false },
  ];

  const goals = [
    { id: 1, name: "Learn React Basics", progress: 70, deadline: "2024-12-10" },
    {
      id: 2,
      name: "Complete JavaScript Course",
      progress: 40,
      deadline: "2024-12-15",
    },
    {
      id: 3,
      name: "Build a Portfolio Website",
      progress: 90,
      deadline: "2024-12-20",
    },
  ];

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
    labels: skills.map((skill) => skill.skill_name),
    datasets: [
      {
        label: "Proficiency Level",
        data: skills.map((skill) => {
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
        backgroundColor: "rgba(17,6,61, 0.8)",
        borderColor: "rgba(51, 51, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const achievementsData = {
    labels: achievements.map((achievement) => achievement.achievement_name),
    datasets: [
      {
        label: "Achievements",
        data: achievements.map(() => 1), 
        backgroundColor: ["#11063d", "#006989", "#a8e0f7","#0064e0"], 
      },
    ],
  };

  return (
    <div className="dashboard">
      <div className="dashboard__content">
        <Container>
          <Card className="dashboard__main-card">
            <h1 className="dashboard__title">Welcome to PathWise Dashboard</h1>
            <h2 className="dashboard__subtitle">
              Hello {user?.name || "Guest"} !
            </h2>
            <div className="dashboard__row">
              <SkillsChart skills={skills}/>
              <AchievementsChart achievements={achievements}/>
            </div>
            <div className="dashboard__row">
              <Card className="dashboard__sub-card">
                <Card.Body>
                  <Card.Title className="dashboard__sub-card-title">
                    Task Management
                  </Card.Title>
                  <div className="dashboard__chart-container">
                    <TaskManagement tasks={tasks} />
                  </div>
                </Card.Body>
              </Card>
              <Card className="dashboard__sub-card">
                <Card.Body>
                  <Card.Title className="dashboard__sub-card-title">
                    Goal Tracking
                  </Card.Title>
                  <div className="dashboard__chart-container">
                    <GoalTracking goals={goals} />
                  </div>
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
