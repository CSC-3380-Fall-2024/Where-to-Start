// src/main.tsx or src/index.tsx (depending on your project setup)

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import Nutrition from "./Nutrition/Nutrition";
import Home from "./home/home";
import Workouts from "./Workouts/workouts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </React.StrictMode>
);
