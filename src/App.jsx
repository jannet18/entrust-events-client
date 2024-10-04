import React from "react";
import Header from "./components/Header";
import PreviewFrame from "./components/PreviewFrame";
import Footer from "./components/Footer";
import Events from "./components/Events";
import Satisfaction from "./components/Satisfaction";
import Team from "./components/Team";

const App = () => {
  return (
    <div className="">
      <Header />
      <Events />
      <Satisfaction />
      <Team />
      <PreviewFrame />
      <Footer />
    </div>
  );
};

export default App;
