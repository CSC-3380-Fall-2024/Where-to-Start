import React from 'react';
import './workouts.css';

// Workout data categorized by muscle groups
const workoutsData = [
  {
    muscle: 'Chest',
    routines: ['Beginner', 'intermediate', 'Advanced'],
  },
  {
    muscle: 'Back',
    routines: ['Beginner', 'intermediate', 'Advanced'],
  },
  {
    muscle: 'Legs',
    routines: ['Beginner', 'intermediate', 'Advanced'],
  },
  {
    muscle: 'Arms',
    routines: ['Beginner', 'intermediate', 'Advanced'],
  },
  {
    muscle: 'Shoulders',
    routines: ['Beginner', 'intermediate', 'Advanced'],
  },
];

const Workouts = () => {
  return (
    <div className="workouts-page">
      {/* Header Section */}
      <header className="Workouts-header">
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

      {/* Page Title */}
      <h1 className="page-title"></h1>

      {/* Muscle Groups and Routines */}
      {workoutsData.map((category) => (
        <div key={category.muscle} className="muscle-category">
          <h2 className="muscle-title">{category.muscle}</h2>
          <div className="routine-scroll">
            {category.routines.map((routine, index) => (
              <div key={index} className="routine-card">
                {routine}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Workouts;
