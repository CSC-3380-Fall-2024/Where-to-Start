// Import React, Background Images
import React from "react";
import HomeBackgroundOne from '../assets/gym_dumbbells_inventory_219519_1440x900.jpg';
import HomeBackgroundTwo from '../assets/home-gym-designer-luxury-concept-hero.jpg';
import HomeBackgroundThree from '../assets/meghan-holmes-buWcS7G1_28-unsplash.jpg';
import HomeBackgroundFour from '../assets/classic-coastal-greenwich-kitchen.jpg';
import HomeBackgroundFive from '../assets/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg';

// Stores imported images in array `backgrounds` so we can loop this
const backgrounds: string[] = [
    HomeBackgroundOne,
    HomeBackgroundTwo,
    HomeBackgroundThree,
    HomeBackgroundFour,
    HomeBackgroundFive
];

// Define type for props for `BackgroundSection`
// This is so the image can be recieve as `string`
interface BackgroundSectionProps {
    image: string;
};

// Function for each background sections
function BackgroundSection({ image }: BackgroundSectionProps) {
    return (
        <div 
            style={{
                width: '100vw',
                height: '900px',
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        ></div>
    );
}

// Main component `Home` for displaying
function Home() {
    return (
        <div style={{ width: '100vw', height: 'auto', overflow: 'hidden' }}>
            {backgrounds.map((image, index) => (
                <BackgroundSection key={index} image={image} />
            ))}
        </div>
    );
}

export default Home;