// IMPORT MODULES
import React from "react";

// IMPORT GLOBAL COMPONENTS
import SectionTitle from "../Global/SectionTitle";

const ServiceSection = () => {

  return (
    <section className="service-section-outer">
      <div className="container">
        <SectionTitle title={"Узнайте что мы можем"} bigTitle="Наши услуги" />
      </div>
      <div className="service-section">
        <div className="service-content">
          <div className="service-block">
            <h3>Проектирование</h3>
            <h6 className="fade-out">
              Мы создаем строгие, стильные, актуальные интерьеры в стиле,
              представляющим собой эклектичный коктейль - лофта, сдержанной
              классики и современных технологий.
            </h6>
          </div>
          <div className="service-block">
            <h3>Дизайн</h3>
            <h6 className="fade-out">
              Мы создаем строгие, стильные, актуальные интерьеры в стиле,
              представляющим собой эклектичный коктейль - лофта, сдержанной
              классики и современных технологий.
            </h6>
          </div>
          <div className="service-block">
            <h3>Авторский надзор</h3>
            <h6 className="fade-out">
              Мы создаем строгие, стильные, актуальные интерьеры в стиле,
              представляющим собой эклектичный коктейль - лофта, сдержанной
              классики и современных технологий.
            </h6>
          </div>
          <div className="service-block">
            <h3>Строительные и отделочные работы</h3>
            <h6 className="fade-out">
              Мы создаем строгие, стильные, актуальные интерьеры в стиле,
              представляющим собой эклектичный коктейль - лофта, сдержанной
              классики и современных технологий.
            </h6>
          </div>
          <div className="service-block">
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
