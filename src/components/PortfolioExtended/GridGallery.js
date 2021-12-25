// IMPORT MODULES
import React from "react";

// IMPORT GLOBAL COMPONENTS
import SectionTitle from "../Global/SectionTitle";

const GridGallery = ({
  title,
  images,
  ImageShowHandler,
  setActiveImageIndex,
}) => {
  return (
    <section className="grid-gallery">
      <SectionTitle bigTitle={title} />
      <div className="grid-gallery-images">
        {images.map((imgList, i) => {
          return (
            <div className="image-block" key={i}>
              <div className="gg__left">
                <div className="gg__left__top">
                  <div className="gg-img">
                    <img
                      src={imgList[0]}
                      alt="gallery"
                      onClick={(e) => {
                        setActiveImageIndex(
                          images.flat().indexOf(e.target.getAttribute("src"))
                        );
                        ImageShowHandler();
                      }}
                    />
                  </div>
                  <div className="gg-img">
                    <img
                      src={imgList[1]}
                      alt="gallery"
                      onClick={(e) => {
                        setActiveImageIndex(
                          images.flat().indexOf(e.target.getAttribute("src"))
                        );
                        ImageShowHandler();
                      }}
                    />
                  </div>
                </div>
                <div className="gg__left__bottom">
                  <div className="gg-img gg-img-big">
                    <img
                      src={imgList[2]}
                      alt="gallery"
                      onClick={(e) => {
                        setActiveImageIndex(
                          images.flat().indexOf(e.target.getAttribute("src"))
                        );
                        ImageShowHandler();
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="gg__left gg__right">
                <div className="gg__left__top gg__right__top">
                  <div className="gg-img gg-img-big">
                    <img
                      src={imgList[5]}
                      alt="gallery"
                      onClick={(e) => {
                        setActiveImageIndex(
                          images.flat().indexOf(e.target.getAttribute("src"))
                        );
                        ImageShowHandler();
                      }}
                    />
                  </div>
                </div>
                <div className="gg__left__bottom gg__right__bottom">
                  <div className="gg-img">
                    <img
                      src={imgList[3]}
                      alt="gallery"
                      onClick={(e) => {
                        setActiveImageIndex(
                          images.flat().indexOf(e.target.getAttribute("src"))
                        );
                        ImageShowHandler();
                      }}
                    />
                  </div>
                  <div className="gg-img">
                    <img
                      src={imgList[4]}
                      alt="gallery"
                      onClick={(e) => {
                        setActiveImageIndex(
                          images.flat().indexOf(e.target.getAttribute("src"))
                        );
                        ImageShowHandler();
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GridGallery;
