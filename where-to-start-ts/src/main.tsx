import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import LandingPage from './Landing/LandingPage';
import Contact from './Contact/Contact';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
