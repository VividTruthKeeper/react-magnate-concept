// IMPORT MODULES
import React from "react";
// import { Link } from "react-router-dom";

// IMPORT GLOBAL COMPONENTS
import SliderNav from "../components/Global/SliderNav";

// IMPORT OWN COMPONENTS

const Main = () => {
  return (
    <div className="main">
      <SliderNav title={""} text={""} />
      <div className="container">
        <div className="main-inner"></div>
      </div>
    </div>
  );
};
export default Main;
