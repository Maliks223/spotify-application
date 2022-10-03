import React from "react";
import LoginPage from "./Pages/LoginPage/loginPage"
import Artists from "./Pages/ArtistsPage/artists"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="*" element={<Navigate to="/" replace/> } />
      <Route path="/login" element={<LoginPage/>}  />
      <Route path="/" element={<Artists/>}  />
      </Routes>
    </BrowserRouter>
  );
}
