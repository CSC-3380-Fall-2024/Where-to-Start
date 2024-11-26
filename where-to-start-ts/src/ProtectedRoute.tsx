// src/ProtectedRoute.tsx: Restricts access to authenticated users

import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

// Only render the children if the user is logged in; otherwise, redirect to login
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();

  // Show a loading state while checking authentication
  if (loading) {
    return <div>Loading...</div>;
  }

  // Redirect to login if no user is logged in
  return user ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
