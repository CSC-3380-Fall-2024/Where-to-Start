// Import React, Background Images
import React from "react";
import HomeBackgroundOne from '../assets/gym_dumbbells_inventory_219519_1440x900.jpg';
import HomeBackgroundTwo from '../assets/home-gym-designer-luxury-concept-hero.jpg';
import HomeBackgroundThree from '../assets/meghan-holmes-buWcS7G1_28-unsplash.jpg';
import HomeBackgroundFour from '../assets/classic-coastal-greenwich-kitchen.jpg';
import HomeBackgroundFive from '../assets/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg';

// Stores imported images in array `backgrounds` so we can loop through them
const backgrounds: string[] = [
    HomeBackgroundOne,
    HomeBackgroundTwo,
    HomeBackgroundThree,
    HomeBackgroundFour,
    HomeBackgroundFive
];

// Text content for each section
const sectionTexts: string[] = [
    "Welcome to your fitness journey! Unlock the best version of yourself today.",
    "Tailored workout plans for every goal. Whether you're a beginner or a pro, we have something for you.",
    "Nutrition made simple. Fuel your body with the right foods for maximum performance.",
    "Our mission: Empowering you to achieve strength, confidence, and overall wellness.",
    "Join our community and take the first step towards transforming your life."
];

// Define type for props for `BackgroundSection`
interface BackgroundSectionProps {
    image: string;
    index: number;
    text: string;
};

// Function for each background section
function BackgroundSection({ image, index, text }: BackgroundSectionProps) {

    // Define position for the rectangle
    const rectanglePosition = (index === 1 || index === 3) ? 'left-0' : 'right-0'; // Left for even, right for odd

    return (
        <div 
            style={{
                width: '100vw',
                height: '900px',
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative' // Add relative positioning
            }}
        >
            {/* Conditionally render rectangle for sections 2-5 */}
            {index > 0 && index < 5 && (
                <div 
                    className={`absolute ${rectanglePosition} top-1/2 transform -translate-y-1/2`}
                    style={{ 
                        width: '580px', 
                        height: '380px',
                        borderRadius: '25px',
                        margin: index === 1 || index === 3 ? '0 0 0 130px' : '0 130px 0 0',
                        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white
                        backdropFilter: 'blur(10px)', // Blur the background
                        border: '1px solid rgba(255, 255, 255, 0.3)', // Light border for definition
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '20px',
                        textAlign: 'center'
                    }}
                >
                    <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>
                        {text.split('.')[0]}.
                    </h2>
                    <p style={{ fontSize: '18px', color: '#555' }}>
                        {text.split('.').slice(1).join('.')}
                    </p>
                </div>
            )}
        </div>
    );
}

// Main component `Home` for displaying
function Home() {

    return (
        <div style={{ width: '100vw', height: 'auto', overflow: 'hidden' }}>
            {backgrounds.map((image, index) => (
                <BackgroundSection key={index} image={image} index={index} text={sectionTexts[index]} />
            ))}
        </div>
    );
}

export default Home;
