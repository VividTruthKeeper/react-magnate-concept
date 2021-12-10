// IMPORT MODULES
import React from "react";

const ItemTitle = ({ title, bigTitle }) => {
  return (
    <div className="about__left-title item-title">
      <h6>{title}</h6>
      <h2>{bigTitle}</h2>
    </div>
  );
};

export default ItemTitle;
