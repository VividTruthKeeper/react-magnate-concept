// IMPORT MODULES
import React, { useState } from "react";

// IMPORT IMAGES
import Exit from "../../svg/exit.svg";
import Next from "../../svg/slider_arrow_right.svg";
import Prev from "../../svg/slider_arrow_left.svg";

const ImageSlider = ({
  images,
  activeImageIndex,
  setActiveImageIndex,
  slider,
}) => {
  // Join all the arrays into one
  const [flattened] = useState(images.flat());
  return (
    <div ref={slider} className="image-slider">
      <div className="container">
        <div className="image-slider-inner">
          <div className="image-slider-top">
            <h3 className="image-index">
              <span>{activeImageIndex + 1} </span>/<p>{flattened.length}</p>
            </h3>
            <div
              className="exit"
              onClick={() => {
                slider.current.classList.remove("shown");
              }}
            >
              <img src={Exit} alt="exit" />
            </div>
          </div>
          <div className="image-slider-bottom">
            <div
              className="image-prev img-nav"
              onClick={() => {
                if (activeImageIndex - 1 > -1) {
                  setActiveImageIndex(activeImageIndex - 1);
                }
              }}
            >
              <img src={Prev} alt="prev" />
            </div>
            <div className="image">
              <img src={flattened[activeImageIndex]} alt="slider" />
            </div>
            <div
              className="image-next img-nav"
              onClick={() => {
                if (activeImageIndex + 1 < flattened.length) {
                  setActiveImageIndex(activeImageIndex + 1);
                }
              }}
            >
              <img src={Next} alt="next" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
