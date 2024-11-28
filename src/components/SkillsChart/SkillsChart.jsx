import { Card } from "react-bootstrap";
import { Bar } from "react-chartjs-2";

function SkillsChart({ skills }) {
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

  return (
    <Card className="dashboard__sub-card">
      <Card.Body>
        <Card.Title className="dashboard__sub-card-title">Skills Overview</Card.Title>
        <div className="dashboard__bar-container">
          <Bar data={skillsData} options={{ indexAxis: "y" }} />
        </div>
      </Card.Body>
    </Card>
  );
}

export default SkillsChart;
