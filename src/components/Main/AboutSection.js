// IMPORT MODULES
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

// IMPORT IMAGES
import Img from "../../images/about_section.jpg";

// IMPORT GLOBAL COMPONENTS
import SectionTitle from "../Global/SectionTitle";

const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
  });
  const animated = useRef();
  useEffect(() => {
    if (inView) {
      animated.current.style.transform = "scale(1)";
      animated.current.style.opacity = "1";
      animated.current.style.transition = "0.5s all ease";
    }
  }, [inView]);

  return (
    <div ref={ref} className="container">
      <div ref={animated} className="about-section">
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
            <Link to="/" className="pink-link-default">
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
