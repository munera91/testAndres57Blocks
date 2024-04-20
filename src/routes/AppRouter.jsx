import React from "react";
import LoginPage from "../pages/LoginPage";
import { PokDetailPage } from "../pages/PokDetailPage";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { FavoritesPage } from "../pages/FavoritesPage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* Login*/}
        <Route path="/" element={<LoginPage />} />
        {/* Pokemon Home Page */}
        <Route path="home" element={<HomePage />} />
        {/* Pokemon Detail Page */}
        <Route path="pok-detail/:name" element={<PokDetailPage />} />
        {/* Favorites Pokemon Page */}
        <Route path="favorites" element={<FavoritesPage />} />
      </Routes>
    </>
  );
};
