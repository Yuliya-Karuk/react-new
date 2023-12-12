import React from "react";
import './styles/App.css';
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Posts from "./pages/Posts";
import About from "./pages/About";
import Error from "./pages/Error";
import Navbar from "./components/UI/Navbar/Navbar";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/error' element={<Error />} />
        <Route path="/*" element={<Navigate to="/error" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
