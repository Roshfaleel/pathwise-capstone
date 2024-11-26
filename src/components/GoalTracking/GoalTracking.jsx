import { ProgressBar, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./GoalTracking.scss"


const GoalTracking = ({ goals }) => (
  <div className="goal-tracking">
    {goals.map((goal) => (
      <Card key={goal.id} className="goal-tracking__card mb-3">
        <Card.Body>
          <Card.Title>{goal.name}</Card.Title>
          <p className="goal-tracking__content">Deadline: {new Date(goal.deadline).toLocaleDateString()}</p>
          <ProgressBar now={goal.progress} label={`${goal.progress}%`} />
        </Card.Body>
      </Card>
    ))}
  </div>
);
export default GoalTracking;