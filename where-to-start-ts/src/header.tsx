// src/header.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/workouts">Workouts</Link>
        <Link to="/nutrition">Nutrition</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login" className="login-button">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
