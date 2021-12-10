// IMPORT MODULES
import React from "react";

const SectionTitle = ({ title, bigTitle }) => {
  return (
    <div className="about__left-title">
      <h6>{title}</h6>
      <h2>{bigTitle}</h2>
    </div>
  );
};

export default SectionTitle;
