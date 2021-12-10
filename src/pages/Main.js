// IMPORT MODULES
import React from "react";
// import { Link } from "react-router-dom";

// IMPORT GLOBAL COMPONENTS
import SliderNav from "../components/Main/SliderNav";

// IMPORT OWN COMPONENTS
import AboutSection from "../components/Main/AboutSection";
import ServiceSection from "../components/Main/ServiceSection";

const Main = () => {
  return (
    <div className="main">
      <SliderNav />
      <AboutSection />
      <ServiceSection />
    </div>
  );
};
export default Main;
