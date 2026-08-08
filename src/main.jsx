import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'animate.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import "react-loading-skeleton/dist/skeleton.css";
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Yummies">
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
