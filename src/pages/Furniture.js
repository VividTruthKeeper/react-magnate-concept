// IMPORT MODULES
import React, { useEffect } from "react";

// IMPORT GLOBAL COMPONENTS
import Nav from "../components/Global/Nav";
import SectionTitle from "../components/Global/SectionTitle";
import NewContactUs from "../components/Global/NewContactUs";

// IMPORT IMAGES
import Img from "../images/furniture.jpg";

const Furniture = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="furniture">
      <Nav
        links={["/", "/", "/", "/", "/"]}
        linkTitles={["Услуги", "Портфолио", "О компании", "Контакты"]}
        centerData={[
          "Наши услуги",
          "Мебель, материалы и элементы декора",
          "Организуем закупку и поставку материалов и мебели по графику по эксклюзивным ценам. Неограниченный выбор",
        ]}
        background={Img}
      />
      <div className="container">
        <div className="furniture-inner content-block">
          <SectionTitle
            title={"Мы делаем"}
            bigTitle={"Мебель, материалы и элементы декора"}
          />
          <div className="furniture-content indent-text">
            <p>
              Наше главное преимущество – компания специализируется на торговле
              материалами для строительства и товаров для ремонта. Благодаря
              собственной транспортной компании, сможем доставить любые
              материалы, мебель и элементы декора итальянского производства к
              вам до двери. Мы также берем на себя оформление всей документации
              и транспортных накладных.{" "}
            </p>
            <p>
              Только у нас вы можете заказать напольное покрытие индивидуальных
              размеров «одним пластом».
            </p>
            <p>
              Мы сотрудничаем с надежными поставщиками, которые обеспечивают
              качественное обслуживание и быструю доставку. Мы сэкономим ваше
              время и предоставим гарантию, что купленный товар соответствует
              необходимым критериям.
            </p>
            <p>
              Мы понимаем, что ремонт и строительство — это всегда серьезные
              финансовые затраты. Поэтому работаем напрямую с производителями,
              чтобы снизить ваши расходы на закупку строительных материалов,
              будь то розница или приобретение товаров оптом.
            </p>
          </div>
        </div>
      </div>
      <NewContactUs />
    </div>
  );
};

export default Furniture;
