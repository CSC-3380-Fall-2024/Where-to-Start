// src/Contact/Contact.tsx

import React from 'react';

import '../index.css'; // Importing global styles
import './Contact.css';
import ContactsPage from '../assets/ContactsPage.jpg'; // Import the background image

const fontStyles = {
    header: {
        fontFamily: 'KronaOne, sans-serif',
        fontSize: '32px',
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    body: {
        fontFamily: 'Inter, sans-serif',
        fontSize: '20px',
        fontWeight: 'normal',
        color: '#FFFFFF',
    },
    underline: {
        fontFamily: 'Inter, sans-serif',
        fontSize: '20px',
        fontWeight: 'normal',
        textDecoration: 'underline',
        color: '#FFFFFF',
    },
};

function Contact() {
    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                backgroundImage: `url(${ContactsPage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
                minWidth: '1440px',
                minHeight: '900px',
            }}
        >
            {/* Glassmorphism box */}
            <div
                className="absolute bg-white rounded-lg shadow-lg"
                style={{
                    left: '130px',
                    top: '150px',
                    width: '580px',
                    height: '580px',
                    borderRadius: '25px',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                    padding: '20px',
                    textAlign: 'left',
                    position: 'absolute', // Ensures the position is absolute relative to the parent
                }}
            >
                <h2 style={fontStyles.header}>Contact Us</h2>
                <div style={{ marginTop: '20px' }}>
                    <p>
                        <span style={fontStyles.underline}>Email Us</span>
                    </p>
                    <p style={fontStyles.body}>geauxtigers25@tigers.com</p>
                    <p>
                        <span style={fontStyles.underline}>Call Us</span>
                    </p>
                    <p style={fontStyles.body}>888-222-3333</p>
                    <p>
                        <span style={fontStyles.underline}>Chat With Us</span>
                    </p>
                    <p style={fontStyles.body}>
                        Chat with our team by emailing or calling us, Monday through Friday,
                        10am-2pm CST
                    </p>
                    <p>
                        <span style={fontStyles.underline}>Mailing Address</span>
                    </p>
                    <p style={fontStyles.body}>TBT.</p>
                </div>
            </div>

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
    );
}

export default Contact;
