// src/App.tsx: Set up routes and apply ProtectedRoute

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/home";
import AboutUs from "./AboutUs/AboutUs";
import Login from "./loginpage/Login";
import Register from "./loginpage/Register";
import ForgotPassword from "./loginpage/ForgotPassword";
import Contact from "./Contact/Contact";
import Workouts from "./Workouts/workouts";
import Nutrition from "./Nutrition/Nutrition";
import { AuthProvider } from "./AuthContext"; // Import AuthProvider
import ProtectedRoute from "./ProtectedRoute"; // Import ProtectedRoute

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        
        {/* Protected Routes */}
        <Route
          path="/workouts"
          element={
            <ProtectedRoute>
              <Workouts />
            </ProtectedRoute>
          }
        />
        <Route
          path="/nutrition"
          element={
            <ProtectedRoute>
              <Nutrition />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
};

export default App;
