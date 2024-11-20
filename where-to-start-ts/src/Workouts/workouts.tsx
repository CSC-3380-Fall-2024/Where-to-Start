import React from 'react';
import './workouts.css';

// Workout data categorized by muscle groups with routines
const workoutsData = [
  {
    muscle: 'Chest',
    routines: [
      {
        level: 'Beginner',
        exercises: [
          'Push-Ups – 3x8-12',
          'Incline Dumbbell Press – 3x10 ',
          'Dumbbell Flyes – 3x12',
        ]
      },
      {
        level: 'Novice',
        exercises: [
          'Push-Ups – 3x8-12',
          'Incline Dumbbell Press – 3x10 ',
          'Dumbbell Flyes – 3x12',
        ]
      },
      {
        level: 'Intermediate',
        exercises: [
          'Bench Press – 4x8-10',
          'Cable Crossovers – 4x12-15 ',
          'Dumbbell Pullovers – 3x12 ',
        ]
      },
      {
        level: 'Advanced',
        exercises: [
          'Weighted Dips – 4x8-10 ',
          'Decline Bench Press – 4x8 ',
          'Incline Dumbbell Press – 4x8-12 ',
    
        ]
      },
      {
        level: 'Elite',
        exercises: [
          'Push-Ups – 3x8-12',
          'Incline Dumbbell Press – 3x10 ',
          'Dumbbell Flyes – 3x12',
        ]
      },
    ]
  },
  {
    muscle: 'Back',
    routines: [
      {
        level: 'Beginner',
        exercises: [
          'Lat Pulldowns – 3x12',
          'Seated Cable Rows – 3x12 ',
          'Dumbbell Rows – ',
        ]
      },
      {
        level: 'Novice',
        exercises: [
          'Push-Ups – 3x8-12',
          'Incline Dumbbell Press – 3x10 ',
          'Dumbbell Flyes – 3x12',
        ]
      },
      {
        level: 'Intermediate',
        exercises: [
          'Pull-Ups (or Assisted Pull-Ups) – 4x10 ',
          'Barbell Rows – 4x10 ',
          'Deadlifts – 4x10 ',
        ]
      },
      {
        level: 'Advanced',
        exercises: [
          'Weighted Pull-Ups – 4x10 ',
          'Deadlifts – 5x5',
          'Chest-Supported Rows – 3x12 with drop sets',
        ]
      },
      {
        level: 'Elite',
        exercises: [
          'Push-Ups – 3x8-12',
          'Incline Dumbbell Press – 3x10 ',
          'Dumbbell Flyes – 3x12',
        ]
      },
    ]
  },
  {
    muscle: 'Legs',
    routines: [
      {
        level: 'Beginner',
        exercises: [
          'Bodyweight Squats – 3x12 ',
          'Dumbbell Lunges – 3x12  per leg',
          'RDL – 3x12 ',
        ]
      },
      {
        level: 'Intermediate',
        exercises: [
          'Barbell Squats – 3x10',
          'Leg Press – 3x10',
          'Bulgarian Split Squats – 3x12 ',
          'Hamstring Curls – 3x12',
        ]
      },
      {
        level: 'Advanced',
        exercises: [
          'RDL – 4x10',
          'Bulgarian Split Squats – 4x12',
          'Hip Thurst – 4x12',
          'Walking Lunges – 4x15',
        ]
      },
    ]
  },
  {
    muscle: 'Arms',
    routines: [
      {
        level: 'Beginner',
        exercises: [
          'Bicep Curls – 3x12',
          'Tricep Dips – 3x12',
          'Hammer Curls – 3x12',
        ]
      },
      {
        level: 'Intermediate',
        exercises: [
          'Barbell Curls – 4x12',
          'Skull Crushers – 4x12',
          'Preacher Curls – 3x12',
          'Tricep Rope Pushdowns – 4x12',
        ]
      },
      {
        level: 'Advanced',
        exercises: [
          'Concentration Curls – 4x12s',
          'Close-Grip Bench Press – 4x10',
          'Tricep Extensions – 4x12',
        ]
      },
    ]
  },
  {
    muscle: 'Shoulders',
    routines: [
      {
        level: 'Beginner',
        exercises: [
          'Dumbbell Shoulder Press – 3x10',
          'Lateral Raises – 3x12',
          'Dumbbell Shrugs – 3x 15',
        ]
      },
      {
        level: 'Intermediate',
        exercises: [
          'Barbell Overhead Press – 4x8',
          'Arnold Press – 4x8-12 ',
          'Dumbbell Front Raises – 3x12 ',
        ]
      },
      {
        level: 'Advanced',
        exercises: [
          'Overhead Press – 5x6',
          'Lateral Raises – 4x10-12',
          'Cable Rows – 4x10-12',
          'Dumbbell Shrugs – 4x12',
        ]
      },
    ]
  },
  {
    muscle: 'Core',
    routines: [
      {
        level: 'Beginner',
        exercises: [
          'Brisk Walk - 15 Minutes',
          'Jumping Jacks – 3x30 sec',
          'Jump Rope – 3x30 sec',
        ]
      },
      {
        level: 'Intermediate',
        exercises: [
          'Jogging - 15 Minutes',
          'High Knees – 4x10 sec ',
          'Squat Jumps – 4x10 ',
        ]
      },
      {
        level: 'Advanced',
        exercises: [
          'Stair Stepper - 20 minutes',
          'Mountain Climbers – 3x30 sec',
          'Burpees – 4x12',
        ]
      },
    ]
  },
  {
    muscle: 'Cardio',
    routines: [
      {
        level: 'Beginner',
        exercises: [
          'Brisk Walk - 15 Minutes',
          'Jumping Jacks – 3x30 sec',
          'Jump Rope – 3x30 sec',
        ]
      },
      {
        level: 'Intermediate',
        exercises: [
          'Jogging - 15 Minutes',
          'High Knees – 4x10 sec ',
          'Squat Jumps – 4x10 ',
        ]
      },
      {
        level: 'Advanced',
        exercises: [
          'Stair Stepper - 20 minutes',
          'Mountain Climbers – 3x30 sec',
          'Burpees – 4x12',
        ]
      },
    ]
  },
  {
    muscle: 'Running',
    routines: [
      {
        level: 'Beginner',
        exercises: [
          'Brisk Walk - 15 Minutes',
          'Jumping Jacks – 3x30 sec',
          'Jump Rope – 3x30 sec',
        ]
      },
      {
        level: 'Intermediate',
        exercises: [
          'Jogging - 15 Minutes',
          'High Knees – 4x10 sec ',
          'Squat Jumps – 4x10 ',
        ]
      },
      {
        level: 'Advanced',
        exercises: [
          'Stair Stepper - 20 minutes',
          'Mountain Climbers – 3x30 sec',
          'Burpees – 4x12',
        ]
      },
    ]
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
                <h3>{routine.level}</h3>
                <ul>
                  {routine.exercises.map((exercise, i) => (
                    <li key={i}>{exercise}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Workouts;