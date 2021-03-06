// IMPORT MODULES
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

// IMPORT COMPONENTS
import BgSlider from "./BgSlider";
import BurgerPopup from "../Global/BurgerPopup";

// IMPORT IMAGES
import Logo from "../../images/main_logo.jpg";

const SliderNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const Dropdown = useRef();
  const Dropdown2 = useRef();
  const DropdownInner = useRef();
  const DropdownSub = useRef();
  const DropHandler = (reference) => {
    reference.forEach((el) => {
      el.current.classList.toggle("active");
    });
  };
  const burger = useRef();
  return (
    <nav className="nav">
      {/* Background slider */}
      <BurgerPopup isVisible={isVisible} setIsVisible={setIsVisible} />
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
                  onClick={(e) => {
                    if (
                      e.target === Dropdown2.current ||
                      e.target === DropdownInner.current
                    ) {
                      return;
                    }
                    if (DropdownSub.current.classList.contains("active")) {
                      DropHandler([Dropdown, DropdownSub]);
                      return;
                    }
                    DropHandler([Dropdown]);
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
                    <li ref={Dropdown2}>
                      <h4
                        ref={DropdownInner}
                        onClick={() => DropHandler([DropdownSub])}
                      >
                        Мебель, материалы и элементы декора
                      </h4>
                    </li>
                  </ul>
                  <ul ref={DropdownSub} className="dropdown-sub">
                    <li>
                      <Link to="/service_furniture">Мебель</Link>
                    </li>
                    <li>
                      <Link to="/portfolio/windows/sub">Окна</Link>
                    </li>
                    <li>
                      <Link to="/portfolio/parquet/sub">Паркет</Link>
                    </li>
                    <li>
                      <Link to="/portfolio/stoneware/sub">Керамогранит</Link>
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
              <div
                ref={burger}
                className="nav-burger"
                onClick={() => {
                  setIsVisible(!isVisible);
                  burger.current.classList.toggle("active");
                }}
              >
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
