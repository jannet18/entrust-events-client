import React from "react";
import Header from "./components/Header";
import PreviewFrame from "./components/PreviewFrame";
import Footer from "./components/Footer";
import Events from "./components/Events";
import Team from "./components/Team";
import Blog from "./pages/Blog";
import Partners from "./pages/Partners";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<PreviewFrame />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/partners" element={<Partners />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
