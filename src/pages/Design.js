// IMPORT MODULES
import React, { useEffect } from "react";

// IMPORT GLOBAL COMPONENTS
import Nav from "../components/Global/Nav";
import SectionTitle from "../components/Global/SectionTitle";
import NewContactUs from "../components/Global/NewContactUs";
import CustomList from "../components/Global/CustomList";

// IMPORT IMAGES
import Img from "../images/design.jpg";

const Design = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="design">
      <Nav
        links={["/", "/", "/", "/", "/"]}
        linkTitles={["Услуги", "Портфолио", "О компании", "Контакты"]}
        centerData={[
          "Наши услуги",
          "Дизайн",
          "Разработка дизайн-проектов частных и общественных интерьеров.",
        ]}
        background={Img}
      />
      <div className="container">
        <div className="design-inner content-block ">
          <SectionTitle title={"Что такое"} bigTitle={"Дизайн интерьера"} />
          <div className="indent-text">
            <p>
              Дизайн-проект интерьера - это пакет рабочей документации, который
              включает в себя стилевое решение интерьера и исчерпывающую
              техническую информацию для строительной бригады. Профессионально
              разработанный дизайн-проект гарантирует максимально точную
              реализацию всех идей дизайнера.
            </p>
            <p>
              <span className="strong">
                Дизайн-проект интерьера состоит из трех частей:
              </span>{" "}
              планировочное решение пространства, комплект рабочих чертежей и
              само стилевое решение.
            </p>
            <p>
              При разработке планировочного решения дизайнер, основываясь на
              ваших пожеланиях, предлагает варианты организации и зонирования
              пространства с учетом функциональных требований.
            </p>
            <p>
              Комплект рабочих чертежей – неотъемлемая часть качественного
              ремонта. Планы расположения сантехнического оборудования,
              электротехнических выводов, осветительного оборудования позволяют
              избежать многих ошибок и бесчисленных переделок в ходе ремонта.
              Наличие чертежей сводит к минимуму непонимания между вами и
              строительной бригадой и дает возможность заранее утвердить объем
              работ и проверять их исполнение.
            </p>
            <p>
              Стилевое решение - самая красочная и ожидаемая часть. Исходя из
              ваших предпочтений и бюджета, дизайнер предложит стильное решение,
              соответствующее последним модным тенденциям в интерьере.
            </p>
          </div>
          <CustomList
            title={"Этапы работы"}
            list={[
              "Вы заказываете услугу дизайна на сайте.",
              "Общение с клиентом, определение целей и задач, его пожеланий и возможностей",
              "Обмеры объекта",
              "Планировка объекта",
              "3D-визуализация",
              "Создание чертежей",
              "Подбор материалов",
              "Подбор мебели",
            ]}
          />
          <div className="indent-text">
            <p>Проект готов! Следующий этап – начало ремонта.</p>
            <p>
              Профессиональный подход в планировании ремонта избавит вас от
              лишних трат времени и денег. Заказывать дизайн-проект необходимо
              до начала ремонтных работ, чтобы его стоимость была сопоставима, а
              то и меньше, со стоимостью переделок по ходу ремонта.
            </p>
          </div>
        </div>
      </div>
      <NewContactUs />
    </section>
  );
};

export default Design;
