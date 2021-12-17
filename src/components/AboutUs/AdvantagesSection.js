// IMPORT MODULES
import React from "react";

// IMPORT COMPONENTS
import SectionTitle from "../Global/SectionTitle";

const AdvantagesSection = () => {
  return (
    <section className="advantages">
      <div className="container">
        <SectionTitle bigTitle={"Наши преимущества"} />
      </div>
      <div className="advantages-content">
        <div className="advantages-bg-blur">
          <div className="container">
            <div className="advantage-blocks-wrapper">
              <div className="advantage-block">
                <h5 className="advantage-title">
                  Внимательно относимся к вашему финансовому состоянию.
                </h5>
                <p className="advantage-text">
                  ТЗ составляется под разный бюджет. Мы не навязываем ненужные
                  материалы, прислушиваемся к вашим пожеланиям и подскажем, на
                  чем можно сэкономить, а где лучше вложиться сильнее.
                </p>
              </div>
              <div className="advantage-block">
                <h5 className="advantage-title">… лет опыта</h5>
                <p className="advantage-text">
                  За это время мы реализовали больше … проектов с разными типами
                  недвижимости. Наши специалисты берутся за любой проект любой
                  сложности
                </p>
              </div>
              <div className="advantage-block">
                <h5 className="advantage-title">
                  Комплексная реализация проекта
                </h5>
                <p className="advantage-text">
                  Мы не только разработаем дизайн, но и воплотим его. У нас
                  можно заказать ремонтные работы и услугу авторского надзора.
                </p>
              </div>
              <div className="advantage-block">
                <h5 className="advantage-title">
                  Полностью занимаемся комплектацией
                </h5>
                <p className="advantage-text">
                  Мы сами подбираем декор, предметы интерьера и мебели из
                  различных материалов итальянского производства.
                </p>
              </div>
              <div className="advantage-block">
                <h5 className="advantage-title">Понятные чертежи для работы</h5>
                <p className="advantage-text">
                  Мы создаем схемы, в которых без особых усилий сможет
                  разобраться строительная бригада. Если возникнут вопросы, они
                  всегда могут обратиться к нам за разъяснением.
                </p>
              </div>
              <div className="advantage-block">
                <h5 className="advantage-title">
                  Организуем доставку материалов
                </h5>
                <p className="advantage-text">
                  Наличие собственной транспортной компании позволяет доставить
                  необходимые материалы в срок.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
