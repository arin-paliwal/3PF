import React from 'react'
import ReactDOM from 'react-dom/client'
 import App from './App'
 import LandingPage from './FirstPage/LandingPage'
 import './index.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const [loading, setLoading] = useState(true);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/about" element={<App/>} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
