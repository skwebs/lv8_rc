import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "./../pages/Home";
import About from "./../pages/About";
import Contact from "./../pages/Contact";
import Login from "./../pages/Login";
import Sitemap from "./../pages/Sitemap";
import Page404 from "./../pages/ErrorPages/Page404";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
