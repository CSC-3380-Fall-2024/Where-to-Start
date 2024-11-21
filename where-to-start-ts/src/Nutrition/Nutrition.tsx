import React from 'react';
import NutritionBackgroundOne from '../assets/lotus-design-n-print--Vfa35ueUCo-unsplash.jpg';
import NutritionBackgroundTwo from '../assets/clay-banks-4zlQ3CCoIyo-unsplash.jpg';
import NutritionBackgroundThree from '../assets/lotus-design-n-print-9b7wGJQaScw-unsplash.jpg';
import NutritionBackgroundFour from '../assets/lotus-design-n-print-j6QSUeiW6vo-unsplash.jpg';
import './Nutrition.css'; // Import the CSS file with font-face rules
import FoodOne from '../assets/baked-meatballs-tk.jpg';
import FoodTwo from '../assets/6876602-84aec3f3fbd040278214455a8374c1f1.jpg';
import FoodThree from '../assets/carrot-cake-banana-bread-9.jpg';
import FoodFour from '../assets/Cilbir-5.1200px.jpg';
import FoodFive from '../assets/greengoddesssalad-2-1.jpg';
import FoodSix from '../assets/scrambled-oats-recipe_square-min.jpg';

const Nutrition: React.FC = () => {
    // Array of background images for each section
    const backgrounds = [
        NutritionBackgroundOne,
        NutritionBackgroundTwo,
        NutritionBackgroundThree,
        NutritionBackgroundFour,
    ];

    // Array of food images and names
    const foodDetails = [
        { image: FoodOne, name: 'Baked Meatballs' },
        { image: FoodTwo, name: 'Balsamic Chicken' },
        { image: FoodThree, name: 'Carrot Cake Banana Bread' },
        { image: FoodFour, name: 'Turkish Eggs' },
        { image: FoodFive, name: 'Tuna, Avocado & Quinoa Salad' },
        { image: FoodSix, name: 'Scrambled Oats' },
    ];

    return (
        <div className="w-full min-h-[3600px]">
            {/* Section 1 */}
            <section
                className="h-[900px] bg-cover bg-center flex items-center relative"
                style={{ backgroundImage: `url(${backgrounds[0]})` }}
            >
                {/* Overlay for contrast */}
                <div className="absolute inset-0 bg-black opacity-20"></div>

                <div className="ml-[130px] text-white relative z-10 -translate-y-7">
                    <h1 className="text-[45px] font-bold krona-one-font">
                        Discover Delicious and Healthy Recipes.
                    </h1>
                    <p className="text-[25px] mt-4 inter-font">
                        Your journey to nutritious meals starts here. Explore our curated recipes!
                    </p>
                </div>
            </section>

            {/* Sections 2, 3, and 4 */}
            {[0, 1, 2].map((sectionIndex) => (
                <section
                    key={sectionIndex}
                    className="h-[900px] bg-cover bg-center flex items-center px-4 sm:px-8 relative"
                    style={{ backgroundImage: `url(${backgrounds[sectionIndex + 1]})` }}
                >
                    {/* Overlay for contrast */}
                    <div className="absolute inset-0 bg-black opacity-20"></div>

                    <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1280px] relative z-10">
                        {/* Glassmorphism Box 1 (Left) */}
                        <div className="glass-box w-[90%] md:w-[400px] h-[400px] bg-white bg-opacity-40 backdrop-blur-md rounded-lg shadow-md p-4 mb-8 md:mb-0 md:ml-[130px]">
                            <img
                                src={foodDetails[sectionIndex * 2].image}
                                alt={foodDetails[sectionIndex * 2].name}
                                className="w-full h-[200px] object-cover rounded-lg mb-4"
                            />
                            <h2 className="text-lg font-semibold text-center">
                                {foodDetails[sectionIndex * 2].name}
                            </h2>
                            <button className="mt-4 block mx-auto bg-blue-500 text-white px-4 py-2 rounded-lg">
                                Ingredients
                            </button>
                        </div>

                        {/* Glassmorphism Box 2 (Right) */}
                        <div className="glass-box w-[90%] md:w-[400px] h-[400px] bg-white bg-opacity-40 backdrop-blur-md rounded-lg shadow-md p-4 md:mr-[130px]">
                            <img
                                src={foodDetails[sectionIndex * 2 + 1].image}
                                alt={foodDetails[sectionIndex * 2 + 1].name}
                                className="w-full h-[200px] object-cover rounded-lg mb-4"
                            />
                            <h2 className="text-lg font-semibold text-center">
                                {foodDetails[sectionIndex * 2 + 1].name}
                            </h2>
                            <button className="mt-4 block mx-auto bg-blue-500 text-white px-4 py-2 rounded-lg">
                                Ingredients
                            </button>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default Nutrition;
