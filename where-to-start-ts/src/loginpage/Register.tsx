// Register.tsx: User registration

import React, { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/firebase"; // Import auth and db from firebase.ts
import { doc, setDoc } from "firebase/firestore"; // Firestore methods
import { useNavigate } from "react-router-dom"; // Import navigation hook

const Register: React.FC = () => {
  const [email, setEmail] = useState(""); // Email input state
  const [password, setPassword] = useState(""); // Password input state
  const [confirmPassword, setConfirmPassword] = useState(""); // Confirm password input state
  const [loading, setLoading] = useState(false); // For showing a loading state
  const navigate = useNavigate(); // React Router navigation

  // Handles the registration process
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form submission
  
    if (!email || !password || !confirmPassword) {
      toast.warn("All fields are required.");
      return;
    }
  
    if (password !== confirmPassword) {
      toast.warn("Passwords do not match.");
      return;
    }
  
    setLoading(true);
    try {
      console.log("Starting user registration...");
  
      // Step 1: Create user in Firebase Authentication
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User registered:", res.user);
  
      // Step 2: Save user info in Firestore
      console.log("Saving user info to Firestore...");
      await setDoc(doc(db, "users", res.user.uid), {
        email,
        id: res.user.uid,
        createdAt: new Date().toISOString(),
      });
      console.log("User info saved successfully.");
  
      // Step 3: Notify and redirect
      toast.success("Account created! Redirecting to login...");
      console.log("Navigating to /login...");
      navigate("/login");
  
      // Fallback timeout to ensure it doesn't stay stuck
      setTimeout(() => {
        console.log("Fallback: Redirecting to /login after timeout.");
        setLoading(false);
        navigate("/login");
      }, 5000); // Redirect after 5 seconds if navigate fails
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false); // Ensure loading is stopped
      console.log("Loading state set to false.");
    }
  };
  //todo: error from firebase: 
  /* error 400 (bad request)
    funny enough, the data is registered, but the register page
    locks up and doesn't send the toast. Fix later, but we have a working DB 
    */ 

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        <form onSubmit={handleSubmit}>
          {/* Email input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mt-1 block w-full p-2 border rounded-md"
              required
            />
          </div>

          {/* Password input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-1 block w-full p-2 border rounded-md"
              required
            />
          </div>

          {/* Confirm Password input */}
          <div className="mb-6">
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              className="mt-1 block w-full p-2 border rounded-md"
              required
            />
          </div>

          {/* Register button */}
          <button
            type="submit"
            className="w-full py-2 px-4 border rounded-md bg-indigo-600 text-white hover:bg-indigo-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
