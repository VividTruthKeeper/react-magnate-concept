// IMPORT MODULES
import React from "react";

// IMPORT COMPONENTS
import SectionTitle from "./SectionTitle";

const TypeDemo = ({ imgList, titleList, list }) => {
  console.log(typeof imgList.length);
  return (
    <div className="type-demo">
      {imgList.map((img, i) => {
        return (
          <div key={i} className="type-block">
            <div
              className="type-img"
              style={
                imgList.length === 2
                  ? { maxWidth: "62rem" }
                  : { maxWidth: "40rem" }
              }
            >
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
