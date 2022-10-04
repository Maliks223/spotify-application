import React from "react";
import LoginPage from "./Pages/LoginPage/loginPage";
import Artists from "./Pages/ArtistsPage/artists";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TokenPage from "./Pages/TokenPage/TokenPage";
import Albums from "./Pages/AlbumsPage/albums";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<TokenPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/albums" element={<Albums />} />
      </Routes>
    </BrowserRouter>
  );
}
