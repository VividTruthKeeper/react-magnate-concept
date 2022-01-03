// IMPORT MODULES
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const BurgerPopup = ({ isVisible, setIsVisible }) => {
  useEffect(() => {
    if (isVisible) {
      popup.current.classList.add("active");
      document.body.style.overflowY = "hidden";
    } else {
      popup.current.classList.remove("active");
      document.body.style.overflowY = "visible";
    }
    window.addEventListener("beforeunload", () => {
      setIsVisible(false);
    });
  }, [isVisible, setIsVisible]);
  const dropSub = useRef();
  const dropTrig = useRef();
  const trig = useRef();
  const dropdown = useRef();
  const popup = useRef();
  const DropdownHandler = (obj) => {
    obj.forEach((el) => {
      el.current.classList.toggle("active");
    });
  };
  return (
    <section ref={popup} className="popup">
      <div className="container">
        <div className="popup-inner">
          <ul className="popup-list">
            <li
              ref={trig}
              className="drop-trig"
              onClick={() => {
                if (dropSub.current.classList.contains("active")) {
                  DropdownHandler([dropdown, dropSub]);
                  return;
                }
                DropdownHandler([dropdown]);
              }}
            >
              <h4>Услуги</h4>
            </li>
            <li className="dropdown-li">
              <ul ref={dropdown} className="popup-dropdown">
                <li className="drop-1">
                  <Link to="/service_engineering">Проектирование</Link>
                </li>
                <li className="drop-2">
                  <Link to="/service_design">Дизайн</Link>
                </li>
                <li className="drop-3">
                  <Link to="/service_construction">
                    Строительные и отделочные работы
                  </Link>
                </li>
                <li className="drop-4">
                  <Link to="/service_supervision">Авторский надзор</Link>
                </li>
                <li
                  ref={dropTrig}
                  className="drop-5"
                  onClick={() => dropSub.current.classList.toggle("active")}
                >
                  <h4>Мебель, материалы и элементы декора</h4>
                </li>
              </ul>
            </li>
            <li className="dropdown-li">
              <ul ref={dropSub} className="popup-dropdown addit-dropdown">
                <li className="drop-1">
                  <Link to="/service_furniture">Мебель</Link>
                </li>
                <li className="drop-2">
                  <Link to="/portfolio/windows/sub">Окна</Link>
                </li>
                <li className="drop-3">
                  <Link to="/portfolio/parquet/sub">Паркет</Link>
                </li>
                <li className="drop-4">
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
        </div>
      </div>
    </section>
  );
};

export default BurgerPopup;
