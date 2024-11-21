import React, { useState } from 'react';

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
          'Decline Push-Ups - 3x12',
          'Dumbbell Bench Press - 3x10',
          'Dumbbell Chest Fly - 3x12 ',
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
          'Ring Dips - 4x10',
          'One-Arm Dumbbell Bench Press - 4x8',
          'Weighted Push-Ups - 4x12',
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
          'Dumbbell Rows – 3x12',
        ]
      },
      {
        level: 'Novice',
        exercises: [
          'Inverted Rows - 3x12',
          'Face Pulls - 3x12',
          'Dumbbell Rear Fly - 3x12',
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
          'One-Arm Pull-Ups - 4x6',
          'Weighted Muscle-Ups - 3x8 ',
          'Deficit Deadlifts - 4x5',
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
        level: 'Novice',
        exercises: [
          'Goblet Squats - 3x12',
          'Step-Ups - 3x12',
          'Dumbbell Romanian Deadlifts - 3x12',
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
      {
        level: 'Elite',
        exercises: [
          'Pistol Squats - 4x8',
          'Weighted Squats - 3x12',
          'Nordic Curl - 3x8',
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
        level: 'Novice',
        exercises: [
          'Close-Grip Push-Ups - 3x12',
          'Dumbbell Kickbacks - 3x12',
          'Zottman Curls - 3x10',
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
      {
        level: 'Elite',
        exercises: [
          'Weighted Chin-Ups - 4x8',
          'Ring Tricep Extensions - 4x10',
          'Drag Curls - 3x12',
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
        level: 'Novice',
        exercises: [
          'Arnold Press - 3x10',
          'Reverse Dumbbell Fly - 3x12',
          'Plate Front Raises - 3x15',
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
      {
        level: 'Elite',
        exercises: [
          'One-Arm Dumbbell Snatch - 4x8',
          'Landmine Press - 3x10',
          'Heavy Dumbbell Shrugs - 4x12',
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
          'Dead Bugs - 3x12',
          'Planks - 3x30 sec',
          'Russian Twists - 3x20',
        ]
      },
      {
        level: 'Novice',
        exercises: [
          'Side Plank - 3x30 sec',
          'Bicycle Crunches - 3x12',
          'Bird Dogs - 3x12',
        ]
      },
      {
        level: 'Intermediate',
        exercises: [
          'Hanging Leg Raises - 3x12',
          'Russian Twists - 3x15',
          'Side Planks - 3x30 sec',
        ]
      },
      {
        level: 'Advanced',
        exercises: [
          'Mountain Climbers - 3x30 sec',
          'Superman Hold - 3x30 sec',
          'Flutter kicks - 3x30 sec',
        ]
      },
      {
        level: 'Elite',
        exercises: [
          'Reverse Crunches - 3x15',
          'Hanging Leg Raises - 3x12',
          'Ab Wheel Rollouts - 3x12',
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
        level: 'Novice',
        exercises: [
          'Rowing Machine - 3x30 sec',
          'Jumping Lunges - 3x12',
          'Bear Crawls - 3x30 sec',
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
      {
        level: 'Elite',
        exercises: [
          'Box Jumps - 3x12',
          'Butt Kicks - 3x45 sec',
          'Kettlebell Swings - 3x20',
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
          'Warm Up - 5 Minutes',
          'Sprint - 1 Minute',
          'Recovery Jog - 2 Minutes',
          'Repeat 3 Times',
        ]
      },
      {
        level: 'Novice',
        exercises: [
          '0.5 Miles in Zone 5',
          '30 second rest',
          'Repeat 4 Times',
        ]
      },
      {
        level: 'Intermediate',
        exercises: [
          '0.5 Mile Warm Up',
          '2-4 Miles Zone 3',
          '0.5 Mile Cool Down',
        ]
      },
      {
        level: 'Advanced',
        exercises: [
          '1 Mile Zone 2',
          '4-6 Miles Zone 4',
          '1 Mile Zone 2',
        ]
      },
      {
        level: 'Elite',
        exercises: [
          '2 Mile Warm Up',
          '8-10 Miles Zone 5',
          '2 Mile Cool Down',
        ]
      },
    ]
  },
];

type ExpandedCard = {
  category: string;
  level: string;
} | null;

const Workouts = () => {
  const [expandedCard, setExpandedCard] = useState<ExpandedCard>(null);

  const toggleExpand = (category: string, level: string) => {
    if (expandedCard?.category === category && expandedCard?.level === level) {
      setExpandedCard(null); // Collapse the card
    } else {
      setExpandedCard({ category, level }); // Expand the card
    }
  };

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
            {category.routines.map((routine, index) => {
              const isExpanded =
                expandedCard?.category === category.muscle &&
                expandedCard?.level === routine.level;
              return (
                <div
                  key={index}
                  className={`routine-card ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => toggleExpand(category.muscle, routine.level)}
                >
                  <h3>{routine.level}</h3>
                  <ul>
                    {routine.exercises.map((exercise, i) => (
                      <li key={i}>{exercise}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Workouts;
