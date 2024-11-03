import React from "react";
import { Link } from "react-router-dom";
import HomeBackgroundOne from '../assets/gym_dumbbells_inventory_219519_1440x900.jpg';
import HomeBackgroundTwo from '../assets/home-gym-designer-luxury-concept-hero.jpg';
import HomeBackgroundThree from '../assets/meghan-holmes-buWcS7G1_28-unsplash.jpg';
import HomeBackgroundFour from '../assets/classic-coastal-greenwich-kitchen.jpg';
import HomeBackgroundFive from '../assets/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg';
import './home.css'; 

const backgrounds: string[] = [
    HomeBackgroundOne,
    HomeBackgroundTwo,
    HomeBackgroundThree,
    HomeBackgroundFour,
    HomeBackgroundFive
];

interface BackgroundSectionProps {
    image: string;
}

function BackgroundSection({ image }: BackgroundSectionProps) {
    return (
        <div
            className="background-section"
            style={{ backgroundImage: `url(${image})` }}
        ></div>
    );
}

function Home() {
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
                <button className="login-button">Login</button>
            </header>
            {backgrounds.map((image, index) => (
                <BackgroundSection key={index} image={image} />
            ))}
        </div>
    );
}

export default Home;
