import React from 'react';
import "./Dashboard.scss";
import SideBar from '../../components/SideBar/SideBar';
import { Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
  return (
    <div className="d-flex">
      <div className="content">
        <Container>
          <Card className="main-card">
            <h1>Welcome to PathWise Dashboard</h1>
            <h2>Hello Roshani!</h2>
            <p>Your journey at a glance!</p>
            <div className="card-grid">
              <Card className="sub-card">
                <Card.Body>
                  <Card.Title>Skills Overview</Card.Title>
                  <Card.Text>
                    {/* Placeholder content; replace with skills chart */}
                    <p>Advanced: React</p>
                    <p>Intermediate: JavaScript</p>
                    <p>Beginner: TypeScript</p>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="sub-card">
                <Card.Body>
                  <Card.Title>Achievements</Card.Title>
                  <Card.Text>
                    {/* Placeholder content; replace with achievements chart */}
                    <p>Project Leadership Award</p>
                    <p>Hackathon Winner</p>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="sub-card">
                <Card.Body>
                  <Card.Title>Ongoing Tasks</Card.Title>
                  <Card.Text>
                    {/* Placeholder content; customize based on your tasks */}
                    <p>Complete React module</p>
                    <p>Submit project proposal</p>
                  </Card.Text>
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
