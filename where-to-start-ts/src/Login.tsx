import React, { useState } from "react";
import { Link } from "react-router-dom";  // Import Link for navigation

const Login = () => {
  const [email, setEmail] = useState("");          // email input
  const [password, setPassword] = useState("");    // password input

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // prevent default form submission behavior

    console.log("Login submitted with", { email, password });
    // login verif code here==-=====-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  };

  return (
    <div className="w-full h-screen flex flex-col md:flex-row mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Outer container adjusts width/height to fit the screen */}
      {/* flex flex-col: Stack sections vertically on small screens */}
      {/* md:flex-row: Switch layout to side-by-side on larger screens */}
      {/* mx-auto: Center the page horizontally */}
      
      <div
        className="md:w-[57.6388889%] w-full h-1/2 md:h-full bg-cover bg-center relative"
        style={{ backgroundImage: "url('/src/assets/gym-image.jpg')" }}
      >
        {/* Left section */}
        {/* Percentage from Figma felt like a good option */}

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          {/* Positions the button relative to the image */}

          <Link
            to="/where-to-start"
            className="px-16 py-8 text-4xl text-white font-semibold rounded-md hover:bg-yellow-300 hover:text-black transition duration-300 ease-in-out whitespace-nowrap"
            style={{ backgroundColor: 'transparent', fontFamily: '"Inter", sans-serif' }}
          >
            Where to Start
          </Link>
          {/* Button Link */}
        </div>
      </div>

      <div className="md:w-[42.3611111%] w-full h-1/2 md:h-full flex items-center justify-center bg-white">
        {/* Right section containing the login box */}
        
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-sm w-full mx-4 md:mx-0">
          {/* Container for the login form */}
          
          <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">Login</h1>
          {/* Login form title */}

          <p className="text-gray-600 mb-3 md:mb-4 text-center">
            Please enter your login details to sign in.
          </p>

          <form onSubmit={handleSubmit}>
            {/* Calls handleSubmit on form submission */}

            <div className="mb-3 md:mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              {/* Email label */}

              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
              {/* Email input field */}
            </div>

            <div className="mb-4 md:mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              {/* Password label */}

              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
              {/* Password input field */}
            </div>

            <div className="flex items-center justify-between mb-4 md:mb-6">
              <Link to="/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-500">
                Forgot Password?
              </Link>
              {/* Forgot Password link */}
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 border border-black text-sm font-medium rounded-md text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
            {/* Submit button */}
          </form>

          <div className="mt-3 md:mt-4 text-center">
            <p className="text-gray-600">Don't have an account?</p>
            <Link to="/register" className="mt-2 text-sm text-indigo-600 hover:text-indigo-500">
              Register Here
            </Link>
            {/* Register link */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
