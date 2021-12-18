// IMPORT MODULES
import React, { useEffect } from "react";

// IMPORT OWN COMPONENTS
import AboutSection from "../components/Main/AboutSection";
import ServiceSection from "../components/Main/ServiceSection";
import ProjectSection from "../components/Main/ProjectSection";
import SliderNav from "../components/Main/SliderNav";
import ShortNav from "../components/Global/ShortNav";

import Img from "../images/short_nav.jpg";

const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
      <ShortNav
        links={["/", "/", "/", "/", "/"]}
        linkTitles={["Услуги", "Портфолио", "О компании", "Контакты"]}
        centerData={["Наши услуги", "Дизайн"]}
        background={Img}
      />
    </div>
  );
};
export default Main;
