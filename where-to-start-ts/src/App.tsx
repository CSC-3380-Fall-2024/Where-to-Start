
import React from 'react';
import './index.css';
import ContactsPage  from '../assets/ContactsPage.jpg';

function App() {
  return (
    <div></div>
  );
}

// src/App.tsx

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './home/home';
import AboutUs from './AboutUs/AboutUs';
import Login from './loginpage/Login';
import Register from './loginpage/Register';
import ForgotPassword from './loginpage/ForgotPassword';
import Contact from './Contact/Contact';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      
      <Route path="*" element={<Navigate replace to="/login" />} />
      //this line of code is routing most things to log in. 

    </Routes>
  );
};


export default App;
