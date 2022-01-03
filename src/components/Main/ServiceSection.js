// IMPORT MODULES
import React, { useRef } from "react";

// IMPORT GLOBAL COMPONENTS
import SectionTitle from "../Global/SectionTitle";

// IMPORT IMAGES

const ServiceSection = () => {
  const img_1 = useRef();
  const img_2 = useRef();
  const img_3 = useRef();
  const img_4 = useRef();
  const img_5 = useRef();

  const HandleZ = (obj, objAr) => {
    objAr.forEach((el) => {
      el.current.style.opacity = "0";
    });
    obj.current.style.opacity = "1";
  };

  return (
    <section className="service-section-outer">
      <div className="container">
        <SectionTitle title={"Узнайте что мы можем"} bigTitle="Наши услуги" />
      </div>
      <div className="service-section">
        <div className="service-content">
          <div ref={img_1} className="service-bg img-1"></div>
          <div ref={img_2} className="service-bg img-2"></div>
          <div ref={img_3} className="service-bg img-3"></div>
          <div ref={img_4} className="service-bg img-4"></div>
          <div ref={img_5} className="service-bg img-5"></div>
          <div
            className="service-block"
            onMouseOver={() =>
              HandleZ(img_1, [img_1, img_2, img_3, img_4, img_5])
            }
          >
            <h3>Проектирование</h3>
            <h6 className="fade-out">
              Мы создаем строгие, стильные, актуальные интерьеры в стиле,
              представляющим собой эклектичный коктейль - лофта, сдержанной
              классики и современных технологий.
            </h6>
          </div>
          <div
            className="service-block"
            onMouseOver={() =>
              HandleZ(img_2, [img_1, img_2, img_3, img_4, img_5])
            }
          >
            <h3>Дизайн</h3>
            <h6 className="fade-out">
              Мы создаем строгие, стильные, актуальные интерьеры в стиле,
              представляющим собой эклектичный коктейль - лофта, сдержанной
              классики и современных технологий.
            </h6>
          </div>
          <div
            className="service-block"
            onMouseOver={() =>
              HandleZ(img_3, [img_1, img_2, img_3, img_4, img_5])
            }
          >
            <h3>Авторский надзор</h3>
            <h6 className="fade-out">
              Мы создаем строгие, стильные, актуальные интерьеры в стиле,
              представляющим собой эклектичный коктейль - лофта, сдержанной
              классики и современных технологий.
            </h6>
          </div>
          <div
            className="service-block"
            onMouseOver={() =>
              HandleZ(img_4, [img_1, img_2, img_3, img_4, img_5])
            }
          >
            <h3>Строительные и отделочные работы</h3>
            <h6 className="fade-out">
              Мы создаем строгие, стильные, актуальные интерьеры в стиле,
              представляющим собой эклектичный коктейль - лофта, сдержанной
              классики и современных технологий.
            </h6>
          </div>
          <div
            className="service-block"
            onMouseOver={() =>
              HandleZ(img_5, [img_1, img_2, img_3, img_4, img_5])
            }
          >
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
