import React, { useState } from "react";
import Header from "./components/Header";
import PreviewFrame from "./components/PreviewFrame";
import Footer from "./components/Footer";
import Events from "./components/Events";
import Team from "./components/Team";
import Blog from "./pages/Blog";
import Partners from "./pages/Partners";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Service from "./pages/Service";
import Contacts from "./pages/Contacts";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<PreviewFrame />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/services/:serviceType" element={<Service />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
