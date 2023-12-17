// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeProvider";

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
)
