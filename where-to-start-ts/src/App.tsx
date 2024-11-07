
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";  // Import React Router components
import Login from "./loginpage/Login";        // Login component
import Register from "./loginpage/Register";  // Register component
import ForgotPassword from "./loginpage/ForgotPassword";  // ForgotPassword component

function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      {/* Full-screen container, centers content */}
      
      <Routes>
        {/* Define app routes */}

        <Route path="/login" element={<Login />} /> 
        {/* Login page route */}

        <Route path="/register" element={<Register />} /> 
        {/* Register page route */}

        <Route path="/forgot-password" element={<ForgotPassword />} /> 
        {/* Forgot Password page route */}

        <Route path="/" element={<Navigate replace to="/login" />} />
        {/* Default redirect to login */}
      </Routes>
    </div>
  );
}

export default App;  // Export App component
=======
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

