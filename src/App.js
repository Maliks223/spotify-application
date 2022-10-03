import React from "react";
import Login from "./Components/Login/login";
import Home from "./Pages/HomePage/home"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function App() {

  return (
    
    // <Login/>
    <BrowserRouter>
      <Routes>
      <Route path="*" element={<Navigate to="/" replace/> } />
      <Route path="/login" element={<Login/>}  />
      <Route path="/" element={<Home/>}  />
      </Routes>
    </BrowserRouter>
  );
}
