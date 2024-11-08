import React from 'react';
import '../index.css'; // Importing the global CSS file

import ContactsPage from '../assets/ContactsPage.jpg'; // Correct image import

function Contact() {
  return (
    <div
      className="contact-background"
      style={{ backgroundImage: `url(${ContactsPage})` }} // Corrected image usage
    >
      {/* Contact form container */}
      <div className="contact-form-container">
        <h2 className="contact-header">Contact Us</h2>

        {/* Contact information (non-interactive) */}
        <div className="contact-info">
          <p><span className="underline">Email Us</span></p> 
          geauxtigers25@tigers.com
          <p><span className="underline">Call Us</span></p>
          888-222-3333
          <p><span className="underline">Chat With Us</span></p>
          Chat with our team by emailing or calling us, Monday through Friday, 10am-2pm CST
          <p><span className="underline">Mailing Address</span></p>
          TBT.
        </div>
      </div>
    </div>
  );
}

export default Contact;
