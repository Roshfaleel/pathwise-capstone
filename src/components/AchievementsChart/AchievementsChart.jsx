import { Card } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";

function AchievementsChart({ achievements }) {
  const achievementsData = {
    labels: achievements.map((achievement) => achievement.achievement_name),
    datasets: [
      {
        label: "Achievements",
        data: achievements.map(() => 1),
        backgroundColor: ["#11063d", "#006989", "#a8e0f7", "#0064e0"],
      },
    ],
  };

  return (
    <Card className="dashboard__sub-card">
      <Card.Body>
        <Card.Title className="dashboard__sub-card-title">Achievements Overview</Card.Title>
        <div className="dashboard__chart-container">
          <Doughnut data={achievementsData} />
        </div>
      </Card.Body>
    </Card>
  );
}

export default AchievementsChart;
