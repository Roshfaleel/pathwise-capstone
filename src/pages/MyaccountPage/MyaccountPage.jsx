import "./MyaccountPage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Image } from "react-bootstrap";

function MyaccountPage() {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const API_URL = import.meta.env.VITE_API_URL;

    const fetchUser = async () => {
      try {
        const userResponse = await axios.get(`${API_URL}/api/users/${userId}`);
        const userData = userResponse.data;
        setUserDetails(userData)
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
      <h1>My Account</h1>      
    </div>
  );
}

export default MyaccountPage;
