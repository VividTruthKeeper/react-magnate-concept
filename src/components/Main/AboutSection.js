// IMPORT MODULES
import React from "react";
import { Link } from "react-router-dom";

// IMPORT IMAGES
import Img from "../../images/about_section.jpg";

// IMPORT GLOBAL COMPONENTS
import SectionTitle from "../Global/SectionTitle";

const AboutSection = () => {
  return (
    <div className="container">
      <div className="about-section">
        <div className="about__left">
          <SectionTitle title={"Узнайте кто мы"} bigTitle={"О компании"} />
          <div className="about__left-content">
            <p>
              <span>
                “Magnate Concept” многопрофильная компания в области дизайна,
                проектирования, строительства. Также мы занимаемся поставкой
                отделочных материалов, элементов декора и мебели на заказ из
                Европы.
              </span>
              <span>
                Наша команда работает … лет на туркменском рынке, и мы знаем все
                нюансы дизайна и строительства, создаем функциональное
                пространство для наших клиентов. Мы найдем решение для самого
                требовательного заказчика.
              </span>
            </p>
          </div>
          <div className="about__left-link">
            <Link to="/portfolio" className="pink-link-default">
              Посмотреть все работы
            </Link>
          </div>
        </div>
        <div className="about__right">
          <div className="about__right-img">
            <img src={Img} alt="About Us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
