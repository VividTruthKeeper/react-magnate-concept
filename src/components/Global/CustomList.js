// IMPORT MODULES
import React from "react";

// IMPORT COMPONENTS
import SectionTitle from "./SectionTitle";

const CustomList = ({ list, title }) => {
  return (
    <div className="custom-list">
      <SectionTitle bigTitle={title} title={""} />
      <div className="container">
        <div className="custom-list-inner">
          <ul>
            {list.map((el, i) => {
              if (i === list.length - 1) {
                return (
                  <li key={i} className="custom-list-item">
                    <p>{el}</p>
                  </li>
                );
              } else {
                return (
                  <li key={i} className="custom-list-item">
                    <p>{el}</p>
                    <div className="border-wrapper">
                      <div className="border border-1"></div>
                      <div className="border border-2"></div>
                      <div className="border border-3"></div>
                      <div className="border border-4"></div>
                    </div>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomList;
