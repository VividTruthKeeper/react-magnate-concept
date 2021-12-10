// IMPORT MODULES
import React from "react";
// import { Link } from "react-router-dom";

// IMPORT GLOBAL COMPONENTS
import SliderNav from "../components/Main/SliderNav";

// IMPORT OWN COMPONENTS
import AboutSection from "../components/Main/AboutSection";

const Main = () => {
  return (
    <div className="main">
      <SliderNav />
      <div className="container">
        <div className="main-inner">
          <AboutSection />
        </div>
      </div>
    </div>
  );
};
export default Main;
