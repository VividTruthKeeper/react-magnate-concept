// IMPORT MODULES
import React, { useEffect } from "react";

// IMPORT GLOBAL COMPONENTS
import CustomList from "../components/Global/CustomList";

// IMPORT OWN COMPONENTS
import AboutSection from "../components/Main/AboutSection";
import ServiceSection from "../components/Main/ServiceSection";
import ProjectSection from "../components/Main/ProjectSection";
import SliderNav from "../components/Main/SliderNav";

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
      <CustomList list={["a", "b", "c"]} />
    </div>
  );
};
export default Main;
