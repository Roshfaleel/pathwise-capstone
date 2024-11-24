import React from "react";
import "./HomePage.scss";
import skillTracker from "../../assets/images/skill_tracking.jpg";
import goal from "../../assets/images/goal.jpg";
import dashboard from "../../assets/images/dashboard.jpg";
import NavBar from "../../components/NavBar/Navbar";

function HomePage() {
  return (
    <>
      <NavBar />
      <div className="hero-section">
        <div className="hero-section__content">
          <h1 className="hero-section__header">Welcome to PathWise</h1>
          <h2 className="hero-section__subheader">
            Take Charge of Your Journey with Us
          </h2>
        </div>
      </div>
      <section className="hero-section__container">
        <h3 className="hero-section__title"> What is Pathwise?</h3>
        <p className="hero-section__description">
          "Pathwise is your personal companion for growth, designed to help you
          track, visualize, and celebrate your educational and personal
          development journey. More than just a tracker, Pathwise offers a
          <strong>
            {" "}
            dynamic alternative to traditional CVs, allowing you to efficiently
            showcase your skills, achievements, and progress in a way that's
            clear, engaging, and uniquely yours.
          </strong>
          "
        </p>
      </section>
      <section className="features__container">
        <h3 className="features__title">Features</h3>
        <div className="features__cards">
        <div className="features__card">
          <img
            className="features__img"
            src={skillTracker}
            alt="vector image of skill tracking"
          />
          <div className="features__card-content">
            <h4 className="features__card-title">Skill & Achievement Tracking</h4>
            <p className="features__card-content">
              Log and showcase your skills with detailed progress and
              achievements.
            </p>
          </div>
        </div>
        <div className="features__card">
          <img
            className="features__img"
            src={goal}
            alt="vector image of goal visualization"
          />
          <div className="features__card-content">
            <h4 className="features__card-title">Goal Visualization</h4>
            <p className="features__card-content">
              Set, track, and visualize personal and educational milestones.
            </p>
          </div>
        </div>
        <div className="features__card">
          <img className="features__img"
            src={dashboard}
            alt="vector image of goal visualization"/>
          <div className="features__card-content">
            <h4 className="features__card-title">Custom Dashboards</h4>
            <p className="features__card-content">Monitor your journey with intuitive charts and insights.</p>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
