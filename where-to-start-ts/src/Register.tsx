import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");                // email input here
  const [password, setPassword] = useState("");          // password input here
  const [confirmPassword, setConfirmPassword] = useState(""); // confirm password input here

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();  // prevent default form behavior

    if (password === confirmPassword) {
      console.log("Registering with", { email, password });
      // Add your registration logic here
    } else {
      alert("Passwords do not match!"); // basic alert for mismatched passwords
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
      {/* Container for the registration form */}
      
      <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
      {/* Title for the registration form */}

      <form onSubmit={handleSubmit}>
        {/* Form submission will trigger handleSubmit */}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          {/* Label for the email input */}

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
          {/* Email input field */}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          {/* Label for the password input */}

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
          {/* Password input field */}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
          {/* Label for the confirm password input */}

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
          {/* Confirm password input field */}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 border border-black text-sm font-medium rounded-md text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Register
        </button>
        {/* Submit button for registration */}
      </form>
    </div>
  );
};

export default Register;
