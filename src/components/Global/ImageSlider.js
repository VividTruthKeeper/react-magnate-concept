// IMPORT MODULES
import React, { useState, useRef } from "react";

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
  const img = useRef();
  const imgBlock = useRef();
  const numbers = useRef();
  const numberSpan = useRef();
  const numberP = useRef();
  const next = useRef();
  const nextImg = useRef();
  const prevImg = useRef();
  const prev = useRef();
  return (
    <div
      ref={slider}
      className="image-slider"
      onClick={(e) => {
        if (
          e.target !== prev.current &&
          e.target !== prevImg.current &&
          e.target !== next.current &&
          e.target !== nextImg.current &&
          e.target !== numbers.current &&
          e.target !== numberSpan.current &&
          e.target !== numberP.current &&
          e.target !== img.current &&
          e.target !== imgBlock.current
        ) {
          slider.current.classList.remove("shown");
        }
      }}
    >
      <div className="container">
        <div className="image-slider-inner">
          <div className="image-slider-top">
            <h3 ref={numbers} className="image-index">
              <span ref={numberSpan}>{activeImageIndex + 1} </span>/
              <p ref={numberP}>{flattened.length}</p>
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
              ref={prev}
              onClick={() => {
                if (activeImageIndex - 1 > -1) {
                  setActiveImageIndex(activeImageIndex - 1);
                }
              }}
            >
              <img ref={prevImg} src={Prev} alt="prev" />
            </div>
            <div ref={imgBlock} className="image">
              <img ref={img} src={flattened[activeImageIndex]} alt="slider" />
            </div>
            <div
              className="image-next img-nav"
              ref={next}
              onClick={() => {
                if (activeImageIndex + 1 < flattened.length) {
                  setActiveImageIndex(activeImageIndex + 1);
                }
              }}
            >
              <img ref={nextImg} src={Next} alt="next" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
