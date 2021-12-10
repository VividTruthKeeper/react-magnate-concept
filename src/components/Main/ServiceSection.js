// IMPORT MODULES
import React, { UseRef, useEffect } from "react";
// import { useInView } from "react-intersection-observer";

// IMPORT GLOBAL COMPONENTS
import SectionTitle from "../Global/SectionTitle";

const ServiceSection = () => {
  // const [ref2, inView2] = useInView({
  //   threshold: 0.3,
  // });
  // const service = UseRef();
  // useEffect(() => {
  //   if (inView2) {
  //     service.current.style.transform = "scale(1)";
  //     service.current.style.opacity = "1";
  //     service.current.style.transition = "0.5s all ease";
  //   }
  // }, [inView2]);
  return (
    <section className="service-section-outer">
      <div className="container">
        <SectionTitle title={"Узнайте что мы можем"} bigTitle="Наши услуги" />
      </div>
      <div className="service-section">
        <div className="service-content">
          <div className="service-block service-block-1">
            <h3>Проектирование</h3>
            <h6 className="fade-out">
              Мы создаем строгие, стильные, актуальные интерьеры в стиле,
              представляющим собой эклектичный коктейль - лофта, сдержанной
              классики и современных технологий.
            </h6>
          </div>
          <div className="service-block service-block-1">
            <h3>Дизайн</h3>
            <h6 className="fade-out">
              Мы создаем строгие, стильные, актуальные интерьеры в стиле,
              представляющим собой эклектичный коктейль - лофта, сдержанной
              классики и современных технологий.
            </h6>
          </div>
          <div className="service-block service-block-1">
            <h3>Авторский надзор</h3>
            <h6 className="fade-out">
              Мы создаем строгие, стильные, актуальные интерьеры в стиле,
              представляющим собой эклектичный коктейль - лофта, сдержанной
              классики и современных технологий.
            </h6>
          </div>
          <div className="service-block service-block-1">
            <h3>Строительные и отделочные работы</h3>
            <h6 className="fade-out">
              Мы создаем строгие, стильные, актуальные интерьеры в стиле,
              представляющим собой эклектичный коктейль - лофта, сдержанной
              классики и современных технологий.
            </h6>
          </div>
          <div className="service-block service-block-1">
            <h3> Мебель, материалы и элементы декора</h3>
            <h6 className="fade-out">
              Мы создаем строгие, стильные, актуальные интерьеры в стиле,
              представляющим собой эклектичный коктейль - лофта, сдержанной
              классики и современных технологий.
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
