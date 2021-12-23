// IMPORT MODULES
import React from "react";

// IMPORT GLOBAL COMPONENTS
import ShortNav from "../components/Global/ShortNav";
import FlexGallery from "../components/Portfolio/FlexGallery";

// IMPORT IMAGES
import Img from "../images/portfolio.jpg";

// GALLERY IMAGES
import Window_1 from "../images/portfolio_window_1.jpg";
import Window_2 from "../images/portfolio_window_2.jpg";
import Window_3 from "../images/portfolio_window_3.jpg";
import Window_4 from "../images/portfolio_window_4.jpg";

import Stoneware_1 from "../images/portfolio_stoneware_1.jpg";
import Stoneware_2 from "../images/portfolio_stoneware_2.jpg";
import Stoneware_3 from "../images/portfolio_stoneware_3.jpg";
import Stoneware_4 from "../images/portfolio_stoneware_4.jpg";

import Parquet_1 from "../images/portfolio_parquet_1.jpg";
import Parquet_2 from "../images/portfolio_parquet_2.jpg";
import Parquet_3 from "../images/portfolio_parquet_3.jpg";
import Parquet_4 from "../images/portfolio_parquet_4.jpg";

const Porfolio = () => {
  return (
    <section className="portfolio">
      <ShortNav background={Img} centerData={["Ознакомьтесь", "Портфолио"]} />
      <div className="container">
        <div className="portfolio-inner content-block">
          <FlexGallery
            images={[
              [Window_1, Window_2, Window_3, Window_4],
              [Stoneware_1, Stoneware_2, Stoneware_3, Stoneware_4],
              [Parquet_1, Parquet_2, Parquet_3, Parquet_4],
            ]}
            titles={["Окна", "Керамогранит", "Паркет"]}
            links={[
              "/portfolio/windows",
              "/portfolio/stoneware",
              "/portfolio/parquet",
            ]}
            linkTitles={["Посмотреть ещё", "Посмотреть ещё", "Посмотреть ещё"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Porfolio;
