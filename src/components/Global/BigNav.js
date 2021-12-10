// IMPORT MODULES
import React from "react";
import { Link } from "react-router-dom";

// IMPORT COMPONENTS
import Slider from "../Main/Slider";
import BgSlider from "../Main/BgSlider";

// IMPORT IMAGES
import Logo from "../../images/main_logo.jpg";

const BigNav = () => {
  return (
    <nav className="nav">
      <BgSlider />
      {/* A special div to make line horizontal line deco. I found it best among other possibilities. */}
      <div className="deco-horizontal"></div>
      <div className="container">
        <div className="nav__inner">
          <div className="nav__inner__top">
            <div className="footer__left nav__left">
              <div className="footer__left-first nav__left-first">
                <div className="logo">
                  <img src={Logo} alt="Magnat-Logo" />
                </div>
              </div>
            </div>
            <div className="footer__right nav__right">
              <ul>
                <li>
                  <Link to="/">Услуги</Link>
                </li>
                <li>
                  <Link to="/">Каталог товаров</Link>
                </li>
                <li>
                  <Link to="/">Портфолио</Link>
                </li>
                <li>
                  <Link to="/">О компании</Link>
                </li>
                <li>
                  <Link to="/">Контакты</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="nav__inner__bottom">
        <Slider />
      </div>
    </nav>
  );
};

export default BigNav;
