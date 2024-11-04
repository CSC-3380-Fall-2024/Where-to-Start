

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> {/* Wraps App with BrowserRouter */}
    </BrowserRouter>
=======
import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18+
import App from './App'; // Ensure this path points correctly to App.tsx
import './index.css'; // Import for global styles

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>
);
