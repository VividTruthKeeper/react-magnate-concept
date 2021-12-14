// IMPORT MODULES
import React from "react";

const CustomList = ({ list }) => {
  return (
    <div className="custom-list">
      <div className="container">
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
                  <span>{el}</span>
                  <div className="border border-1"></div>
                  <div className="border border-2"></div>
                  <div className="border border-3"></div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default CustomList;
