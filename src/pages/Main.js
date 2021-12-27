// IMPORT MODULES
import React, { useEffect, useState } from "react";

// IMPORT OWN COMPONENTS
import AboutSection from "../components/Main/AboutSection";
import ServiceSection from "../components/Main/ServiceSection";
import ProjectSection from "../components/Main/ProjectSection";
import SliderNav from "../components/Main/SliderNav";
import Gradient from "../pages/Gradient";

const Main = () => {

  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    setIsLoading(false)
    window.scrollTo(0, 0);
    window.addEventListener("beforeunload", () => {
      window.scrollTo(0, 0);
    });

  }, []);
  return (
    <div className="main">
      <Gradient isLoading={isLoading} />
      <SliderNav />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
    </div>
  );
};
export default Main;
