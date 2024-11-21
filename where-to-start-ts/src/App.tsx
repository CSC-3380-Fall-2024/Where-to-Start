// src/App.tsx

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './home/home';
import AboutUs from './AboutUs/AboutUs';
import Login from './loginpage/Login';
import Register from './loginpage/Register';
import ForgotPassword from './loginpage/ForgotPassword';
import Contact from './Contact/Contact';
import Workouts from './Workouts/workouts';
import Nutrition from './Nutrition/Nutrition';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacts" element={<Contact />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/Workouts" element={<Workouts />} />
      <Route path="/Nutrition" element={<Nutrition />} />
      
      {/* <Route path="*" element={<Navigate replace to="/login" />} /> */}
      //this line of code is routing most things to log in. 

    </Routes>
  );
};

export default App;
