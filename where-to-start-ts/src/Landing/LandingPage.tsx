import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // We'll add styling here later.

const LandingPage = () => {
  const navigate = useNavigate();

  const handleContactUsClick = () => {
    navigate('/contact'); 
  };

  return (
    <div className="landing-page">
      <div className="landing-header">
        <nav className="nav-bar">
          <h1>WHERE TO START</h1>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#workouts">Workouts</a></li>
            <li><a href="#nutrition">Nutritions</a></li>
            <li><button onClick={handleContactUsClick}>Contact Us</button></li>
          </ul>
        </nav>
      </div>
      <div className="landing-hero">
        <img className="landing-background" src="/src/assets/ContactsPage.jpg" alt="Gym Background" />
        <div className="hero-content">
          <h2>Temp holder text.</h2>
          <p>Figure out later.</p>
          <button className="join-now-button">Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
