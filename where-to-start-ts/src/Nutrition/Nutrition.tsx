import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();
    const [selectedRecipe, setSelectedRecipe] = useState<{
        name: string;
        recipe: string;
        calories: string;
    } | null>(null);

    const handleLoginClick = () => {
        navigate('/login');
    };
    // Array of background images for each section
    const handleRecipeClick = (recipe: { name: string; recipe: string; calories: string }) => {
        setSelectedRecipe(recipe);
    };

    const handleCloseModal = () => {
        setSelectedRecipe(null);
    };

    const backgrounds = [
        NutritionBackgroundOne,
        NutritionBackgroundTwo,
        NutritionBackgroundThree,
        NutritionBackgroundFour,
    ];

    const foodDetails = [
        {
            image: FoodOne,
            name: 'Baked Meatballs',
            recipe: 'Mix ground beef, breadcrumbs, and seasonings. Shape into balls and bake at 400°F for 20 minutes.',
            calories: '300 kcal per serving',
        },
        {
            image: FoodTwo,
            name: 'Balsamic Chicken',
            recipe: 'Marinate chicken in balsamic vinegar, garlic, and olive oil. Grill until fully cooked.',
            calories: '280 kcal per serving',
        },
        {
            image: FoodThree,
            name: 'Carrot Cake Banana Bread',
            recipe: 'Combine shredded carrots, mashed bananas, flour, and spices. Bake at 350°F for 50 minutes.',
            calories: '320 kcal per slice',
        },
        {
            image: FoodFour,
            name: 'Turkish Eggs',
            recipe: 'Poach eggs, then serve with garlic yogurt and chili butter. Garnish with dill.',
            calories: '250 kcal per serving',
        },
        {
            image: FoodFive,
            name: 'Tuna, Avocado & Quinoa Salad',
            recipe: 'Mix cooked quinoa, diced avocado, canned tuna, and a lemon vinaigrette.',
            calories: '350 kcal per serving',
        },
        {
            image: FoodSix,
            name: 'Scrambled Oats',
            recipe: 'Cook oats with milk, then scramble with eggs. Add cinnamon and honey for flavor.',
            calories: '230 kcal per serving',
        },
    ];

    return (
        <div className="w-full min-h-[3600px]">
            {/* Header */}
            <header className="Nutrition-header">
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
                            <button
                                className="mt-4 block mx-auto bg-blue-500 text-white px-4 py-2 rounded-lg"
                                onClick={() => handleRecipeClick(foodDetails[sectionIndex * 2])}
                            >
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
                            <button
                                className="mt-4 block mx-auto bg-blue-500 text-white px-4 py-2 rounded-lg"
                                onClick={() => handleRecipeClick(foodDetails[sectionIndex * 2 + 1])}
                            >
                                Ingredients
                            </button>
                        </div>
                    </div>
                </section>
            ))}

            {selectedRecipe && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md text-gray-800">
                        <h2 className="text-2xl font-bold mb-4 text-center">
                            {selectedRecipe.name}
                        </h2>
                        <p className="mb-4">{selectedRecipe.recipe}</p>
                        <p className="text-sm text-gray-600 italic">Calories: {selectedRecipe.calories}</p>
                        <button
                            className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg block mx-auto"
                            onClick={handleCloseModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Nutrition;
