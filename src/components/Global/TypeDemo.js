// IMPORT MODULES
import React from "react";

// IMPORT COMPONENTS
import SectionTitle from "./SectionTitle";

const TypeDemo = ({ imgList, titleList, list }) => {
  return (
    <div className="type-demo">
      {imgList.map((img, i) => {
        return (
          <div key={i} className="type-block">
            <div className="type-img">
              <img src={img} alt="type" />
            </div>
            <SectionTitle bigTitle={titleList[i]} />
            <ul className="type-list">
              {list[i].map((el, i) => {
                return (
                  <li key={i}>
                    <h6>{el}</h6>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default TypeDemo;
