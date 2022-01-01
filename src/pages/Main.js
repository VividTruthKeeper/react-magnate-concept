// IMPORT MODULES
import React, { useEffect } from "react";

// IMPORT OWN COMPONENTS
import AboutSection from "../components/Main/AboutSection";
import ServiceSection from "../components/Main/ServiceSection";
import ProjectSection from "../components/Main/ProjectSection";
import SliderNav from "../components/Main/SliderNav";

const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {}, []);

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
