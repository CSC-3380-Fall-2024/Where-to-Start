// src/Register.tsx

import React, { useState } from 'react';

// The Register component is a form for users to create their profile
const Register: React.FC = () => {
  // State variables to hold user input
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page reload on form submit

    // Gather form data into an object
    const profileData = { name, email, password };

    // Send a POST request to the backend API with the user data
    const response = await fetch('/api/create-profile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profileData), // Send data as JSON
    });

    // Check if the request was successful
    if (response.ok) {
      alert("Profile created successfully!"); // Show success message
    } else {
      alert("Failed to create profile"); // Show error message
    }
  };

  
  return (
    <div>
      <h2>Create Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} // Update name state on change
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state on change
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state on change
          />
        </label>
        <br />
        <button type="submit">Create</button> {/* Submit button for the form */}
      </form>
    </div>
  );
};

export default Register; // Export the component to use in other files