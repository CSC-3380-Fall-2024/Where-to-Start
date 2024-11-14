// src/pages/AboutUs/AboutUs.tsx

import React from 'react';
import './AboutUs.css'; 

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
            <p>We are a group of young fitness enthusiasts that want to help you on your journey to becoming your best self!</p>
          </div>
          <div className="about-us-content-box">
            <h2>Our Core Values</h2>
            <p>Progress is our main core value. We want you to feel the impact and therefore, keep wanting more!</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
