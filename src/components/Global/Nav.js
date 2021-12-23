// IMPORT MODULES
import React, { useRef } from "react";
import { Link } from "react-router-dom";

// IMPORT IMAGES
import Logo from "../../images/main_logo.jpg";

const Nav = ({ background, centerData }) => {
  const Dropdown = useRef();
  const DropHandler = (reference) => {
    const object = reference.current;
    object.classList.toggle("active");
  };
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
                  <Link to="/">Контакты</Link>
                </li>
              </ul>
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
