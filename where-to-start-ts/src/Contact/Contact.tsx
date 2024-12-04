import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div>
      {/* Header Section */}
      <header className="Workouts-header">
        <div>WHERE TO START</div>
        <nav>
          <a href="/">Home</a>
          <a href="/about-us">About Us</a>
          <a href="/workouts">Workouts</a>
          <a href="/nutrition">Nutrition</a>
          <a href="/contacts">Contacts</a>
        </nav>
        <button className="login-button" onClick={handleLoginClick}>
          Login
        </button>
      </header>

      {/* Main Content */}
      <main className="contact-page">
        <section className="contact-info">
          <h1>Contact Us</h1>
          <div className="contact-item">
            <h2>Email Us</h2>
            <p>wheretostartfitness1@gmail.com</p>
          </div>
          <div className="contact-item">
            <h2>Call Us</h2>
            <p>888-222-3333</p>
            <p>
              Monday through Friday, 1pm to 2pm CST.
              <br />
              Closed on Holidays.
            </p>
          </div>
          <div className="contact-item">
            <h2>Chat With Us</h2>
            <p>
              Chat with our team by emailing or calling us,
              <br />
              Monday through Friday, 1pm to 2pm CST.
            </p>
          </div>
          <div className="contact-item">
            <h2>Mailing Address</h2>
            <p>
              This is still in a
              <br />
              work in progress, 
              <br />
              no address as of now.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
