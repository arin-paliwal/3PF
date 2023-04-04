import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Introduction from './FirstPage/Introduction'
import './index.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Introduction/>} />
        <Route path="/about" element={<App/>} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
