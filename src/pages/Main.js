// IMPORT MODULES
import React from "react";
// import { Link } from "react-router-dom";

// IMPORT GLOBAL COMPONENTS
import SliderNav from "../components/Main/SliderNav";

// IMPORT OWN COMPONENTS
import AboutSection from "../components/Main/AboutSection";
import ServiceSection from "../components/Main/ServiceSection";
import ProjectSection from "../components/Main/ProjectSection";
import { useEffect } from "react/cjs/react.development";

const Main = () => {
  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      window.scrollTo(0, 0);
    });
  }, []);
  return (
    <div className="main">
      <SliderNav />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
    </div>
  );
};
export default Main;
