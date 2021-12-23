// IMPORT MODULES
import React from "react";

// IMPORT GLOBAL COMPONENTS
import ShortNav from "../components/Global/ShortNav";

// IMPORT OWN COMPONENTS
import GridGallery from "../components/PortfolioExtended/GridGallery";

// IMPORT IMAGES
import Img from "../images/portfolio.jpg";

import Gal_1 from "../images/portfolio_window_1.jpg";
import Gal_2 from "../images/portfolio_window_2.jpg";
import Gal_3 from "../images/portfolio_window_3.jpg";

const PortfolioExtended = () => {
  return (
    <section className="portfolio-extended">
      <ShortNav background={Img} centerData={["Ознакомьтесь", "Портфолио"]} />
      <div className="container">
        <div className="portfolio-extended-inner content-block">
          <GridGallery
            title={"Окна"}
            images={[[Gal_1, Gal_2, Gal_3, Gal_3, Gal_1, Gal_2]]}
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
