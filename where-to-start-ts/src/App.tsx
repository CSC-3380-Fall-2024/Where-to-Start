/*
    Where the code is done for many entry points, pages,
    in this application
*/
// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/home';
import AboutUs from './AboutUs/AboutUs';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;

