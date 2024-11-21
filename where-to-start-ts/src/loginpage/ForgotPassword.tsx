import React, { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "@/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState(""); // Email input state
  const [loading, setLoading] = useState(false); // For showing a loading state

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Stop the form from refreshing the page

    if (!email) {
      toast.warn("Please enter your email.");
      return;
    }

    setLoading(true);
    try {
      // Send password reset email with Firebase
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset link sent! Check your email.");
      setEmail(""); // Clear the email input
    } catch (error) {
      console.error("Error sending password reset email:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Forgot Password</h1>
        <form onSubmit={handleSubmit}>
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

          <button
            type="submit"
            className="w-full py-2 px-4 border rounded-md bg-indigo-600 text-white hover:bg-indigo-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
