import React from "react";
import "./HomePage.scss";

import NavBar from "../../components/NavBar/Navbar";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";

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
      <FeaturesSection/>
    </>
  );
}

export default HomePage;
