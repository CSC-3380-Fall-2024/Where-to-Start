import React, { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login: React.FC = () => {
  const [email, setEmail] = useState(""); // For email input
  const [password, setPassword] = useState(""); // For password input
  const [loading, setLoading] = useState(false); // For showing a loading state
  const navigate = useNavigate();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Stop the form from refreshing the page

    if (!email || !password) {
      toast.warn("Please fill out both fields.");
      return;
    }

    setLoading(true);
    try {
      // Log in with Firebase
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Welcome back!");
      navigate("/home"); // Go to the homepage
    } catch (error) {
      toast.error("Failed to log in. Check your details and try again.");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex">
      {/* Left side with background image */}
      <div
        className="w-1/2 h-full bg-cover bg-center relative"
        style={{ backgroundImage: "url('/src/assets/gym-image.jpg')" }}
      >
        <div className="absolute bottom-10 left-10">
          <Link
            to="/"
            className="px-6 py-3 text-lg text-white font-bold rounded transition duration-300 ease-in-out"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Translucent black background
              textAlign: "center",
            }}
          >
            Where to Start
          </Link>
        </div>
      </div>

      {/* Right side with the login form */}
      <div className="w-1/2 h-full flex items-center justify-center bg-white">
        <div className="p-6 rounded shadow max-w-sm w-full">
          <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
          <form onSubmit={handleLogin}>
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
                className="mt-1 block w-full p-2 border rounded"
                required
              />
            </div>

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
                className="mt-1 block w-full p-2 border rounded"
                required
              />
            </div>

            <div className="mb-4 flex justify-between items-center">
              <Link to="/forgot-password" className="text-sm text-indigo-600">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 border rounded bg-indigo-600 text-white hover:bg-indigo-500"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-gray-600">Don’t have an account?</p>
            <Link
              to="/register"
              className="text-indigo-600 hover:text-indigo-500"
            >
              Register Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
