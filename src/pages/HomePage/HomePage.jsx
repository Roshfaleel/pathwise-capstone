import React from "react";
import "./HomePage.scss";
import NavBar from "../../components/NavBar/Navbar";
import logo from "../../assets/images/PW_Logo.png";


function HomePage() {
  return (
    <>
      <NavBar />
      <div className="hero-section">
        <div className="hero-section__content">
          <h1>Welcome to PathWise</h1>
          <h2>Take Charge of Your Journey with Us</h2>
        </div>
      </div>
      <div>
        <h1> What is Pathwise?</h1>
        <p>
          Pathwise is your personal companion for growth, designed to help you
          track, visualize, and celebrate your educational and personal
          development journey. More than just a tracker, Pathwise offers a
          <strong> dynamic alternative to traditional CVs, allowing you to efficiently
          showcase your skills, achievements, and progress in a way that's
          clear, engaging, and uniquely yours.</strong>"
        </p>
      </div>
      <div>
        <h1>Features</h1>
        <h2>Skill Tracking</h2>
        <p>Log and showcase your skills with detailed progress and achievements.</p>
        <h2>Goal Visualization</h2>
        <p>Set, track, and visualize personal and educational milestones.</p>
        <h2>Dynamic Profiles</h2>
        <p>Replace traditional CVs with an engaging, shareable profile.</p>
        <h2>Custom Dashboards</h2>
        <p>Monitor your journey with intuitive charts and insights.</p>
        <h2>Collaborative Growth</h2>
        <p>Connect with mentors and peers to share and inspire progress.</p>
      </div>
      
    </>
  );
}

export default HomePage;
