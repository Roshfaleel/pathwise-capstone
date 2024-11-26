import "./Dashboard.scss";
import { Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
const location = useLocation();
const [user, setUser] = useState(null);
const [error, setError] = useState(null);

useEffect(()=>{
  const fetchUserDetails = async () =>{
    const userId = localStorage.getItem("userId");

    const API_URL = import.meta.env.VITE_API_URL;

    if(!userId){
      console.log("not found")
      setError("user Id not found");
      return;
    }
    try {
      const response = await axios.get(`${API_URL}/api/users/${userId}`)
      setUser(response.data);
    } catch (error) {
      console.error("Failed to fetch user details", error);
      setError("Failed to load user details")
    }
  };

  fetchUserDetails();
}, [])

if(error){
  return <p>{error}</p>
}

  return (
    <div className="d-flex">
      <div className="content">
        <Container>
          <Card className="main-card">
            <h1>Welcome to PathWise Dashboard</h1>
            <h2>Hello {user?.name || "Guest"}!</h2>
            {/* <p>Your journey at a glance!</p> */}
            <div className="card-grid">
              <Card className="sub-card">
                <Card.Body>
                  <Card.Title>Skills Overview</Card.Title>
                  <Card.Text>
                    {/* Placeholder content; replace with skills chart */}
                    {/* <p>Advanced: React</p>
                    <p>Intermediate: JavaScript</p>
                    <p>Beginner: TypeScript</p> */}
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="sub-card">
                <Card.Body>
                  <Card.Title>Achievements</Card.Title>
                  <Card.Text>
                    {/* Placeholder content; replace with achievements chart */}
                    {/* <p>Project Leadership Award</p>
                    <p>Hackathon Winner</p> */}
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="sub-card">
                <Card.Body>
                  <Card.Title>Ongoing Tasks</Card.Title>
                  <Card.Text>
                    {/* Placeholder content; customize based on your tasks */}
                    {/* <p>Complete React module</p>
                    <p>Submit project proposal</p> */}
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
