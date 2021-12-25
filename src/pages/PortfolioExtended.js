// IMPORT MODULES
import React, { useState, useRef } from "react";

// IMPORT GLOBAL COMPONENTS
import ShortNav from "../components/Global/ShortNav";
import ImageSlider from "../components/Global/ImageSlider";

// IMPORT OWN COMPONENTS
import GridGallery from "../components/PortfolioExtended/GridGallery";

// IMPORT IMAGES
import Img from "../images/portfolio.jpg";

import Gal_1 from "../images/portfolio_window_1.jpg";
import Gal_2 from "../images/portfolio_window_2.jpg";
import Gal_3 from "../images/portfolio_window_3.jpg";
import Gal_4 from "../images/project_section_4.jpg";
import Gal_5 from "../images/project_section_5.jpg";
import Gal_6 from "../images/project_section_6.jpg";

const PortfolioExtended = () => {
  const section = useRef(null);
  const slider = useRef(null);

  const ImageShowHandler = () => {
    section.current.classList.add("stale");
    slider.current.classList.add("shown");
  };

  // I set a state with all the images to pass the down to the image slider
  // This state would need to be updated every the new images are being requested from the server
  // For now, the default value of this state would be 6 images, that are always shown when the page is rendered

  const [images, setImages] = useState([
    [Gal_1, Gal_2, Gal_3, Gal_4, Gal_5, Gal_6],
  ]);

  // This is a state to track the active image's index in the array of images

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // useEffect(() => {
  //   setImages([...images, [Gal_1, Gal_2, Gal_3, Gal_4, Gal_5, Gal_6]]);
  // }, []);
  return (
    <section ref={section} className="portfolio-extended">
      <ImageSlider
        images={images}
        activeImageIndex={activeImageIndex}
        setActiveImageIndex={setActiveImageIndex}
        slider={slider}
      />
      <ShortNav background={Img} centerData={["Ознакомьтесь", "Портфолио"]} />
      <div className="container">
        <div className="portfolio-extended-inner content-block">
          <GridGallery
            title={"Окна"}
            images={images}
            setActiveImageIndex={setActiveImageIndex}
            ImageShowHandler={ImageShowHandler}
          />
          <form className="more-btn">
            <button type="button" className="pink-link-default">
              <span>Ещё</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PortfolioExtended;
