// src/pages/AboutUs/AboutUs.tsx

import React from 'react';
import './AboutUs.css'; // Make sure to create this CSS file for styling

const AboutUs: React.FC = () => {
  return (
    <div className="about-us-main">
      <header className="about-us-header">
        <div>WHERE TO START</div>
        <nav>
          <a href="/">Home</a>
          <a href="/about-us">About Us</a>
          <a href="/workouts">Workouts</a>
          <a href="/nutrition">Nutrition</a>
          <a href="/contacts">Contacts</a>
        </nav>
        <button>Login</button>
      </header>

      <main className="about-us-content">
        <div className="about-us-flex-container">
          <div className="about-us-content-box">
            <h2>About Us (TBD)</h2>
            <p>YaddaYadda</p>
          </div>
          <div className="about-us-content-box">
            <h2>Our Core Values</h2>
            <p>YaddaYadda</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
