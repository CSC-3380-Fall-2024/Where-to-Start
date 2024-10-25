import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");   // email here

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();  // forces input

    console.log("Forgot Password submitted for", { email });
    // password reset code goes here=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
      {/* Container for the forgot password form */}

      <h1 className="text-2xl font-bold mb-6 text-center">Forgot Password</h1>
      {/* Title for forgot password form */}

      <form onSubmit={handleSubmit}>
        {/* Form submission will trigger handleSubmit */}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          {/* Label for email input */}

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
          {/* Email input field */}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 border border-black text-sm font-medium rounded-md text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Send Reset Link
        </button>
        {/* Button to submit the forgot password form */}
      </form>
    </div>
  );
};

export default ForgotPassword;
