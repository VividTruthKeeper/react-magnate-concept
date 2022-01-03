// IMPORT MODULES
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

// IMPORT IMAGES
import Logo from "../../images/main_logo.jpg";
import BurgerPopup from "../Global/BurgerPopup";

const Nav = ({ background, centerData }) => {
  const Dropdown = useRef();
  const Dropdown2 = useRef();
  const DropdownInner = useRef();
  const DropdownSub = useRef();
  const DropHandler = (reference) => {
    reference.forEach((el) => {
      el.current.classList.toggle("active");
    });
  };
  const [isVisible, setIsVisible] = useState(false);
  const burger = useRef();
  return (
    <div
      className="nav"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${background})`,
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        backgroundClip: "content-box",
        backgroundSize: "cover",
      }}
    >
      <BurgerPopup isVisible={isVisible} setIsVisible={setIsVisible} />
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
          <div className="nav__inner__bottom">
            <div className="slider__slide">
              <div className="slide__top">
                <h6>{centerData[0]}</h6>
                <h2>{centerData[1]}</h2>
              </div>
              <div className="slide__bottom">
                <div className="slide__bottom-text">
                  <p>{centerData[2]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
