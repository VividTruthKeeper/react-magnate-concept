// IMPORT MODULES
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// IMPORT GLOBAL COMPONENTS
import Nav from "../components/Global/Nav";
import SectionTitle from "../components/Global/SectionTitle";
import CustomList from "../components/Global/CustomList";

// IMPORT OWN COMPONENTS
import AdvantagesSection from "../components/AboutUs/AdvantagesSection";

// IMPORT IMAGES
import Img from "../images/about_us.jpg";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="about-us">
      <Nav
        centerData={[
          "Узнайте кто мы",
          "О компании",
          "“Magnate Concept” многопрофильная компания в области дизайна, проектирования, строительства. Также мы занимаемся поставкой отделочных материалов, элементов декора и мебели на заказ из Европы",
        ]}
        background={Img}
      />
      <div className="container">
        <div className="about-us-inner content-block">
          <SectionTitle title={"О нас"} bigTitle={"Magnate Concept"} />
          <div className="indent-text">
            <p>
              Наша команда работает … лет на туркменском рынке, и мы знаем все
              нюансы дизайна и строительства, создаем функциональное
              пространство для наших клиентов. Мы найдем решение для самого
              требовательного заказчика.
            </p>
            <p>
              «Magnate Concept» прошла долгий путь совершенствования и на
              сегодняшний день для нас нет ничего невозможного, мы найдем выход
              из самой сложной ситуации так как работаем с лучшими специалистами
              в сфере строительства и ремонта.
            </p>
            <p>
              Черпая вдохновение в архитектуре, искусстве, индустрии моды и
              путешествиях, мы создаем интерьеры с использованием
              высококачественных натуральных материалов, на основе новейших
              технологий и профессионального подхода к эргономике, комфорту и
              функциональности.
            </p>
            <p>
              Компания «Magnate Concept» - это: … Архитекторов, … дизайнеров, …
              менеджеров, 5 пакетов услуг. Работаем в различных стилях и
              реализуем любые проекты интерьеров.
            </p>
          </div>
        </div>
      </div>
      <div className="about-us-outer">
        <AdvantagesSection />
      </div>
      <div className="container">
        <div className="about-us-inner content-block">
          <CustomList
            title={"Почему стоит выбрать нашу компанию?"}
            list={[
              "Индивидуальный подход – мы тщательно прорабатываем варианты планировки в соответствии со строительными нормами и пожеланиями клиента.",
              "Профессиональный подход – высокая квалификация инженеров и дизайнеров позволяет применять оптимальные технологические решения при разработке и реализации проекта.",
              "Полная документация – полный и подробный набор строительной документации.",
              "Безопасность – работаем по договору и гарантируем фиксированную стоимость, сроки выполнения, качество и долговечность.",
              "Работаем «под ключ» - все услуги планирования, дизайна, ремонта и комплектации в одном месте.",
              "Экономия – за ту же стоимость, что у других компаний, вы получите качественные материалы и услуги специалистов из Италии.",
            ]}
          />
          <CustomList
            title={"Вместе с командой «Magnate Concept» вы можете"}
            list={[
              "Сделать ремонт под ключ по лучшим мировым стандартам",
              "Выбрать отделочные материалы, мебель и оборудование для квартиры или офиса",
              "Создать уникальный интерьер под свой стиль жизни",
            ]}
          />
          <div className="indent-text">
            <p>
              Чтобы связаться с нами заполните форму на сайте или позвоните по
              номерам, указанные в разделе «
              <Link to={"/"} className="colored">
                Контакты
              </Link>
              ».{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
