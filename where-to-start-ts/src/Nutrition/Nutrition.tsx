import React from 'react';
import './Nutrition.css'; // Import the CSS file for styling

const Nutrition: React.FC = () => {
    return (
        <div>
            {/* Header Section */}
            <header className="nutrition-header">
                <div>WHERE TO START</div>
                <nav>
                    <a href="/">Home</a>
                    <a href="/about-us">About Us</a>
                    <a href="/workouts">Workouts</a>
                    <a href="/nutrition">Nutrition</a>
                    <a href="/contacts">Contacts</a>
                </nav>
                <button className="login-button">Login</button>
            </header>

            {/* Main Content */}
            <div className="Nutrition-content">
                <h1>Nutrition</h1>
                <p>
                    Welcome to the Nutrition page! Here, you can find all the
                    information related to our nutrition plans and tips.
                </p>
                <img
                    src={require('./assets/nutrition.jpg')} // Replace with real image
                    alt="Nutrition"
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>
        </div>
    );
};

export default Nutrition;
