import React from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeBackgroundOne from "../assets/gym_dumbbells_inventory_219519_1440x900.jpg";
import HomeBackgroundTwo from "../assets/home-gym-designer-luxury-concept-hero.jpg";
import HomeBackgroundThree from "../assets/meghan-holmes-buWcS7G1_28-unsplash.jpg";
import HomeBackgroundFour from "../assets/classic-coastal-greenwich-kitchen.jpg";
import HomeBackgroundFive from "../assets/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg";
import "./home.css";

const sections = [
  {
    image: HomeBackgroundOne,
    title: "Our Mission",
    content:
      "At Where to Start, we empower individuals to achieve their fitness and health goals. Whether you're new or experienced, we're here for every step of your journey.",
  },
  {
    image: HomeBackgroundTwo,
    title: "Workouts",
    content:
      "Discover expertly crafted workouts tailored to all fitness levels. From strength training to cardio, we have something for everyone.",
  },
  {
    image: HomeBackgroundThree,
    title: "Nutrition",
    content:
      "Nutrition is the foundation of health. Explore balanced meal plans, recipes, and tips to fuel your fitness journey.",
  },
  {
    image: HomeBackgroundFour,
    title: "Community",
    content:
      "Join a supportive community of like-minded individuals. Share your progress, get inspired, and stay motivated.",
  },
  {
    image: HomeBackgroundFive,
    title: "Get Started",
    content:
      "Ready to transform your life? Start today with Where to Start and take control of your health and fitness.",
  },
];

interface SectionProps {
  image: string;
  title: string;
  content: string;
}

function Section({ image, title, content }: SectionProps) {
  return (
    <div
      className="section"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="section-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}

function Home() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="home-main">
      <header className="home-header">
        <div>WHERE TO START</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/workouts">Workouts</Link>
          <Link to="/nutrition">Nutrition</Link>
          <Link to="/contacts">Contacts</Link>
        </nav>
        <button className="login-button" onClick={handleLoginClick}>
          Login
        </button>
      </header>
      {sections.map((section, index) => (
        <Section
          key={index}
          image={section.image}
          title={section.title}
          content={section.content}
        />
      ))}
    </div>
  );
}

export default Home;
