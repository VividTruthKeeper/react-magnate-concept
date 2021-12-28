// IMPORT MODULES
import React from "react";

// IMPORT COMPONENTS
import SectionLink from "../Portfolio/SectionLink";

const FlexGallery = ({ images, titles, links, linkTitles }) => {
  return (
    <section className="flex-gallery content-block">
      {titles.map((title, i) => {
        return (
          <div className="gallery-block content-block" key={i}>
            <SectionLink
              bigTitle={title}
              link={links[i]}
              linkTitle={linkTitles[i]}
            />
            <div className="gallery-block-inner">
              {images[i].map((img, i) => {
                return (
                  <div className="img-wrapper" key={i}>
                    <img src={img} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default FlexGallery;
