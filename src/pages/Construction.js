// IMPORT MODULES
import React from "react";

// IMPORT GLOBAL COMPONENTS
import Nav from "../components/Global/Nav";
import SectionTitle from "../components/Global/SectionTitle";
import NewContactUs from "../components/Global/NewContactUs";
import CustomList from "../components/Global/CustomList";

// IMPORT IMAGES
import Img from "../images/construction.jpg";

const Construction = () => {
  return (
    <section className="construction">
      <Nav
        links={["/", "/", "/", "/", "/"]}
        linkTitles={["Услуги", "Портфолио", "О компании", "Контакты"]}
        centerData={[
          "Наши услуги",
          "Строительные и отделочные работы",
          "Весь комплекс ремонтно-отделочных работ под заказ. Качественное выполнение внутренних, наружных и фасадных отделочных работ",
        ]}
        background={Img}
      />
      <div className="container">
        <div className="construction-inner content-block">
          <SectionTitle title={"Что такое"} bigTitle={"Отделочные работы "} />
          <div className="indent-text">
            <p>
              Это заключительный этап строительства или ремонта зданий. Их
              выполняют с целью защиты конструкции дома от воздействия внешней
              среды, создать комфортные условия проживания, придать дому
              завершенный вид
            </p>
          </div>
          <CustomList
            title={"Ремонтно-строительные работы включают в себя:"}
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
            <p>
              С нами вы можете исполнить свою мечту об идеальном ремонте
              благодаря современным, безопасным, красивым и долговечным
              отделочным материалам и оборудованию, купленным по лучшим ценам.
              Наши материалы для отделки соответствуют санитарно-гигиеническим
              нормам, противостоят разрушающим механическим воздействиям,
              длительно сохраняют свой изначальный вид.
            </p>
          </div>
          <CustomList
            title={"Преимущества работы с нами"}
            list={[
              "Адаптация помещения под ваши потребности с соблюдением всех технических норм",
              "Профессиональная команда строителей с большим опытом работы",
              "Вы избавляетесь от необходимости регулярно присутствовать на объекте благодаря услуге «Авторский надзор» (заказывается отдельно). ",
              "Полная и подробная финансовая отчетность, фото и видеоматериалы",
              "Опыт работы с иностранными поставщиками",
              "Мы реализуем самые смелые дизайн-проекты точно в срок и в рамках оговоренного бюджета",
              "Обследование объекта – бесплатно",
              "Разработка подробной сметной документации и консультации – бесплатно",
              "Предоставляется гарантия на весь комплекс выполненных работ",
            ]}
          />
          <CustomList
            title={"Какие работы мы выполняем? "}
            list={[
              "Демонтажные работы",
              "Монтажный комплекс",
              "Малярно-штукатурные и облицовочные работы",
              "Устройство водоснабжения, канализации и отопления",
              "Малярно-штукатурные и облицовочные работы",
              "Изготовление и установка окон и дверей",
              "Устройство натяжных потолков",
              "Устройство систем вентиляции и кондиционирования",
            ]}
          />
          <div className="indent-text">
            <p>
              Наша ремонтная бригада выполняет весь комплекс
              ремонтно-строительных и отделочных работ, с легкостью реализует
              качественный ремонт под ключ любого помещения: квартиры, коттеджа,
              офиса, ресторана, банка, магазина, торгового центра, помещений
              производственного назначения и т.д.
            </p>
          </div>
        </div>
      </div>
      <NewContactUs />
    </section>
  );
};

export default Construction;
