import React from 'react';
import './ContactStyling.css'; // Importing CSS for the Contact page

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact Us</h1> {/*Contact US*/}
      </header>
      <textarea 
        className="contact-textarea" 
        placeholder="Write your message here..." 
      />
    </div>
  );
};

export default Contact; 