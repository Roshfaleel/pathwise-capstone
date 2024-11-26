import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Pie } from "react-chartjs-2";
import "./TaskManagement.scss"

const TaskManagement = ({ tasks }) => {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.length - completedTasks;

  const taskData = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        label: "Tasks",
        data: [completedTasks, pendingTasks],
        backgroundColor: ["#11063d", "#0064e0"],
      },
    ],
  };

  return (
    <div className="task-management">
      <div className="task-overview mt-4">
        <Pie data={taskData} />
      </div>
      <div className="task-management__list">
        <Card>
          <Card.Body className="task-management__card">
            <h3 className="task-management__title">To-Do List</h3>
            <ListGroup>
              {tasks.map((task) => (
                <ListGroupItem
                  key={task.id}
                  variant={task.completed ? "success" : "light"}
                >
                  {task.name}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default TaskManagement;
