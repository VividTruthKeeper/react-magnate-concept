// IMPORT MODULES
import React from "react";
import { Link } from "react-router-dom";

const SectionLink = ({ bigTitle, link, linkTitle }) => {
  return (
    <div className="about__left-title section-link">
      <h2>{bigTitle}</h2>
      <Link to={link}>{linkTitle}</Link>
    </div>
  );
};

export default SectionLink;
