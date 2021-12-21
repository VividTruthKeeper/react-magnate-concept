// IMPORT MODULES
import React, { useEffect } from "react";

// IMPORT GLOBAL COMPONENTS
import Nav from "../components/Global/Nav";
import SectionTitle from "../components/Global/SectionTitle";
import NewContactUs from "../components/Global/NewContactUs";
import CustomList from "../components/Global/CustomList";

// IMPORT IMAGES
import Img from "../images/engineering.jpg";

const Engineering = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="engineering">
      <Nav
        links={["/", "/", "/", "/about_us", "/"]}
        linkTitles={["Услуги", "Портфолио", "О компании", "Контакты"]}
        centerData={[
          "Наши услуги",
          "Проектирование",
          "Проектирование частного жилого дома, загородного коттеджа или другого помещения по индивидуальному проекту под ключ.",
        ]}
        background={Img}
      />
      <div className="container">
        <div className="engineering-inner content-block">
          <SectionTitle
            title={"Что такое"}
            bigTitle={"Архитектурное проектирование"}
          />
          <div className="indent-text">
            <p>
              Сложный многогранный процесс, который включает в себя разработку
              концепции, конструктивные и инженерные решения, прямой диалог с
              заказчиком, совместный творческий поиск.
            </p>
            <p>
              Это обязательный этап подготовки строительной документации,
              который необходим для получения разрешения на строительство.
            </p>
            <p>
              Иногда без архитектурного проекта эксплуатация объекта невозможна.
              Поэтому исходно разрешительная документация, проведение
              геологических и геодезических изысканий позволит пройти
              бюрократические процедуры при вводе жилья в эксплуатацию, повысит
              инвестиционную привлекательность объекта в случае его продажи.
            </p>
          </div>
          <CustomList
            title={"Авторский надзор"}
            list={[
              "Соблюдаем единую стилистику при оформлении дома, интерьера, инфраструктуры и участка. Создаем живую гармоничную систему.",
              "Разрабатываем грамотную планировку с учетом конкретных потребностей вашей семьи или бизнеса. С максимальной пользой задействуем каждый квадратный метр в доме или офисном пространстве.",
              "Находим идеальные решения под потребности клиента. Создаем проект под ваш бюджет – уже на этапе проектирования будет понимание сколько ресурсов потребуется.",
              "Не только проектируем пространство, но и предоставляем возможности для его реализации: авторский надзор и контроль строительных работ, комплектация и закупка, декорирование и дизайн.",
            ]}
          />
          <div className="indent-text">
            <p>
              Мы проектируем частные жилые дома, загородные коттеджи или другие
              помещения по индивидуальному проекту под ключ. Чтобы реализовать
              свои идеи перед началом строительства и избежать непредвиденных
              расходов, закажите услугу на нашем сайте.
            </p>
          </div>
        </div>
      </div>
      <NewContactUs />
    </section>
  );
};

export default Engineering;
