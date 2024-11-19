// src/Contact/Contact.tsx

import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="contact-info">
        <h1>Contact Us</h1>
        <div className="contact-item">
          <h2>Email Us</h2>
          <p>geauxtigers25@tigers.com</p>
        </div>
        <div className="contact-item">
          <h2>Call Us</h2>
          <p>888-222-3333</p>
          <p>Monday through Friday, 1pm to 2pm CST.<br />Holidays never.</p>
        </div>
        <div className="contact-item">
          <h2>Chat With Us</h2>
          <p>Chat with our team by emailing or calling us,<br />Monday through Friday, 1pm to 2pm CST.</p>
        </div>
        <div className="contact-item">
          <h2>Mailing Address</h2>
          <p>This is still in a<br />work in progress<br />no address.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
