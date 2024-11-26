import { ProgressBar, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const GoalTracking = ({ goals }) => (
  <div className="goal-tracking">
    <h3>Goals Overview</h3>
    {goals.map((goal) => (
      <Card key={goal.id} className="mb-3">
        <Card.Body>
          <Card.Title>{goal.name}</Card.Title>
          <p>Deadline: {new Date(goal.deadline).toLocaleDateString()}</p>
          <ProgressBar now={goal.progress} label={`${goal.progress}%`} />
        </Card.Body>
      </Card>
    ))}
  </div>
);
export default GoalTracking;