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
            <h2>About Us</h2>
            <p>At Where to Start, we're passionate about helping you achieve a balanced and fulfilling lifestyle. Our platform brings together comprehensive workout plans, nutrition tracking, and delicious, healthy recipes to support your journey toward better health. 
            Whether you're a seasoned runner, a dedicated weightlifter, or just beginning your fitness journey, we have something for everyone. We believe fitness should be accessible to all, regardless of experience or fitness level, and our goal is to provide the tools and guidance you need to reach your personal best.</p>
          </div>
          <div className="about-us-content-box">
            <h2>Our Core Values</h2>
            <p>At the heart of Where to Start are values that guide everything we do. We believe in inclusivity, ensuring fitness is accessible and welcoming to people at every stage of their health journey.
            We prioritize quality, offering expert-designed workouts, evidence-based nutritional advice, and recipes crafted to nourish both body and mind. We're committed to progress, supporting our users as they set and surpass their own unique goals, from building strength to finding balance. Above all, we aim to empower individuals to lead healthier, more fulfilling lives, one step at a time.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
