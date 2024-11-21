import React from "react";
import { Link } from "react-router-dom";
import HomeBackgroundOne from '../assets/meghan-holmes-buWcS7G1_28-unsplash.jpg';
import HomeBackgroundTwo from '../assets/home-gym-designer-luxury-concept-hero.jpg';
import HomeBackgroundThree from '../assets/fitness-gym-and-equipment-photography-dn9w2z4r8yd2wi47.jpg';
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

const fontStyles = {
    header: {
        fontFamily: 'KronaOne, sans-serif',
        fontSize: '32px',
        fontWeight: 'bold',
        color: '#FFFFFF',
    },

    body: {
        fontFamily: 'Inter, sans-serif',
        fontSize: '25px',
        fontWeight: 'normal',
        color: '#FFFFFF',
    },

    underline: {
        fontFamily: 'Inter, sans-serif',
        fontSize: '25px',
        fontWeight: 'normal',
        textDecoration: 'underline',
        color: '#FFFFFF',
    },

    title: {
        fontFamily: 'KronaOne, sans-serif',
        fontSize: '20px',
        fontWeight: 'normal',
        color: '#FFFFFF',
    }
};

const backgroundContents = [
    {
        header: "STEP BY STEP, WE'LL GET YOU THERE.",
        description: "Your fitness journey starts.",
        underline: "Explore About Us"
    },
    {
        header: "We're here to support every step.",
        description: "Find workouts, nutrition tips, and guidance to inspire your fitness journey.",
        underline: "Explore About Us"
    },
    {
        header: "Elevate your fitness journey.",
        description: "Be pushed to your limits to build stength, endurancem and flexibility. Reach your goal!",
        underline: "Explore Workouts"
    },
    {
        header: "Fuel your body with proper nutritions.",
        description: "Discover our nutritious recipes and advices to keep you energized and satisfied.",
        underline: "Explore Nutritions"
    },
    {
        header: "Got Questions? Have feedbacks?",
        description: "Reach out and we are here to help guide you. Our team are here ready to answer any of your questions.",
        underline: "Explore Contacts"
    }
];

interface BackgroundSectionProps {
    image: string;
    content: {
        header: string;
        description: string;
        underline: string;
    };
    index: number;
}

function BackgroundSection({ image, content, index }: BackgroundSectionProps) {
    const rectanglePosition = (index === 1 || index === 3) ? 'left-0' : 'right-0';

    // Check if it's the first section (index === 0)
    const isFirstSection = index === 0;

    return (
        <div 
            style={{
                width: '100vw',
                height: '900px',
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative'
            }}
        >
            {/* First section doesn't have the glassmorphism rectangle */}
            {!isFirstSection && (
                <div 
                    className={`absolute ${rectanglePosition} top-1/2 transform -translate-y-1/2 bg-white w-400 h-400 rounded-lg shadow-lg flex flex-col justify-center items-center`}
                    style={{ 
                        width: '580px', 
                        height: '380px',
                        borderRadius: '25px',
                        margin: index === 1 || index === 3 ? '0 0 0 130px' : '0 130px 0 0',
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                        padding: '20px',
                        textAlign: 'left'
                    }}
                >
                    <div style={{ padding: '20px' }}>
                        <h2 style={fontStyles.header}>
                            {content.header}
                        </h2>
                        <p style={fontStyles.body}>
                            {content.description}
                        </p>
                        <span style={fontStyles.underline}>
                            {content.underline}
                        </span>
                    </div>
                </div>
            )}

            {/* For the first section, customize the text and layout */}
            {isFirstSection && (
                <div 
                    className="absolute top-1/2 transform -translate-y-1/2 flex flex-col justify-center"
                    style={{
                        left: '130px',  // Position content 130px from the left
                        paddingRight: '20px',
                        maxWidth: '600px',
                        textAlign: 'left',
                        color: '#FFFFFF',
                    }}
                >
                    <h2 style={{ fontFamily: 'KronaOne, sans-serif', fontSize: '45px', fontWeight: 'bold' }}>
                        {content.header}
                    </h2>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '25px', fontWeight: 'normal' }}>
                        {content.description}
                    </p>
                </div>
            )}
        </div>
    );
}


function Home() {
    return (
        <div className="home-main" style={{ width: '100vw', overflow: 'hidden' }}>
            <header className="home-header">
            <div className="left-wrapper">
                <div className="left-position" style={ fontStyles.title }>WHERE TO START</div>
            </div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/AboutUs">About Us</Link>
                    <Link to="/workouts">Workouts</Link>
                    <Link to="/nutrition">Nutrition</Link>
                    <Link to="/contacts">Contacts</Link>
                </nav>
                <div className="right-wrapper">
                    <button className="login-button right-position">Login</button>
                </div>
            </header>
            {backgrounds.map((image, index) => (
                <BackgroundSection 
                    key={index} 
                    image={image} 
                    content={backgroundContents[index]} 
                    index={index} 
                />
            ))}
        </div>
    );
}

export default Home;