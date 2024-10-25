import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";  // Import React Router components
import Login from "./Login";        // Login component
import Register from "./Register";  // Register component
import ForgotPassword from "./ForgotPassword";  // ForgotPassword component

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
