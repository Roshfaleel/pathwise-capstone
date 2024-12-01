import "./MyaccountPage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Image } from "react-bootstrap";
import avatar from "../../assets/images/avatar.jpg";
import Timeline from "../../components/Timeline/Timeline";
import PDFdownload from "../../components/CreatePDF/CreatePDF";

function MyaccountPage() {
  const [userDetails, setUserDetails] = useState(null);
  const [achievements, setAchievements] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const API_URL = import.meta.env.VITE_API_URL;

    const fetchUser = async () => {
      try {
        const userResponse = await axios.get(`${API_URL}/api/users/${userId}`);
        const userData = userResponse.data;
        setUserDetails(userData);

        const achievementsResponse = await axios.get(
          `${API_URL}/api/users/${userId}/achievements`
        );
        const achievementsData = achievementsResponse.data || {};
        setAchievements(achievementsData.achievements || []);

        const skillsResponse = await axios.get(
          `${API_URL}/api/users/${userId}/skills`
        );
        const skillsData = skillsResponse.data || {};
        setSkills(skillsData.skills || []);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchUser();
  }, []);
  if (!userDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className="account">
      <h1 className="account__header">My Account</h1>
      <Card className="account__card">
        <Image
          src={avatar}
          alt="avatar"
          roundedCircle
          style={{
            width: "100px",
            height: "100px",
            margin: "auto",
            marginTop: "10px",
          }}
        />
        <Card.Body>
          <Card.Title className="account__name">
            <strong>{userDetails.name}</strong>
          </Card.Title>
          <Card.Text className="account__content">
            <strong>Email:</strong> {userDetails.email} <br />
            <strong>Address:</strong> 123 Main Street, Springfield <br />
            <strong>Highest Education:</strong> Master's in Computer Science{" "}
            <br />
            <strong>LinkedIn:</strong> https://linkedin.com/in/alicewong
          </Card.Text>
        </Card.Body>
        <div className="account__button">
          <PDFdownload
            userDetails={userDetails}
            achievements={achievements}
            skills={skills}
          />
        </div>
      </Card>
      <div className="account__timeline">
        <Timeline achievements={achievements} skills={skills} />
      </div>
    </div>
  );
}

export default MyaccountPage;
