// IMPORT MODULES
import React, { useRef } from "react";
import { Link } from "react-router-dom";

// IMPORT COMPONENTS
import BgSlider from "./BgSlider";

// IMPORT IMAGES
import Logo from "../../images/main_logo.jpg";

const SliderNav = () => {
  const Dropdown = useRef();
  const DropHandler = (reference) => {
    const object = reference.current;
    object.classList.toggle("active");
  };
  return (
    <nav className="nav">
      {/* Background slider */}
      <BgSlider />
      {/* A special div to make line horizontal line deco. I found it best among other possibilities. */}
      <div className="deco-horizontal"></div>
      <div className="container">
        <div className="nav__inner">
          <div className="nav__inner__top">
            <div className="footer__left nav__left">
              <div className="footer__left-first nav__left-first">
                <Link to="/" className="logo">
                  <img src={Logo} alt="Magnat-Logo" />
                </Link>
              </div>
            </div>
            <div className="footer__right nav__right">
              <ul>
                <li
                  className="service-dropdown"
                  onClick={() => {
                    DropHandler(Dropdown);
                  }}
                >
                  <h4>Услуги</h4>
                  <ul ref={Dropdown} className="dropdown">
                    <li>
                      <Link to="/service_engineering">Проектирование</Link>
                    </li>
                    <li>
                      <Link to="/service_design">Дизайн</Link>
                    </li>
                    <li>
                      <Link to="/service_construction">
                        Строительные и отделочные работы
                      </Link>
                    </li>
                    <li>
                      <Link to="/service_supervision">Авторский надзор</Link>
                    </li>
                    <li>
                      <Link to="/service_furniture">
                        Мебель, материалы и элементы декора
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/portfolio">Портфолио</Link>
                </li>
                <li>
                  <Link to="/about_us">О компании</Link>
                </li>
                <li>
                  <Link to="/contact_us">Контакты</Link>
                </li>
              </ul>
              <div className="nav-burger">
                <div className="line-wrapper">
                  <div className="burger-line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SliderNav;
