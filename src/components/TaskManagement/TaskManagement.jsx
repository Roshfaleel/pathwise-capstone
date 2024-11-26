import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Pie } from "react-chartjs-2";

const TaskManagement = ({ tasks }) => {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.length - completedTasks;

  const taskData = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        label: "Tasks",
        data: [completedTasks, pendingTasks],
        backgroundColor: ["#4CAF50", "#FF5733"],
      },
    ],
  };

  return (
    <div className="task-management">
      <h3>To-Do List</h3>
      <Card>
        <Card.Body>
          <ListGroup>
            {tasks.map((task) => (
              <ListGroupItem key={task.id} variant={task.completed ? "success" : "light"}>
                {task.name}
              </ListGroupItem>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
      <div className="task-overview mt-4">
        <h4>Task Completion Overview</h4>
        <Pie data={taskData} />
      </div>
    </div>
  );
};
export default TaskManagement;