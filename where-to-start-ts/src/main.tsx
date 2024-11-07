import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import AboutUs from './AboutUs/AboutUsPage.tsx'
import './index.css'

//Entry Point To The Whole Application
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AboutUs />
  </StrictMode>,
)
