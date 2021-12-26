// IMPORT MODULES
import React from "react";

// IMPORT GLOBAL COMPONENTS
import ShortNav from "../components/Global/ShortNav";
import SectionTitle from "../components/Global/SectionTitle";
import NewContactUs from "../components/Global/NewContactUs";
import CustomList from "../components/Global/CustomList";
import TypeDemo from "../components/Global/TypeDemo";

// IMPORT IMAGES
import Img from "../images/stoneware.jpg";

import Stoneware_1 from "../images/stoneware_sub_1.jpg";
import Stoneware_2 from "../images/stoneware_sub_2.jpg";

const StonewareSub = () => {
  return (
    <section className="window-sub">
      <ShortNav
        background={Img}
        centerData={["Ознакомьтесь с видами", "Керамогранит"]}
      />
      <div className="container">
        <div className="window-sub-inner content-block">
          <SectionTitle
            bigTitle={
              "Высококачественные деревяные полы для стильных интерьеров."
            }
          />
          <div className="indent-text">
            <p>
              Нравится теплый пол, хотите наслаждаться красотой древесины и
              предпочитаете использовать в интерьере эко-материалы? Все это
              можно получить, заказав паркет{" "}
              <a
                href="https://www.instagram.com/garofoligroup/?hl=en"
                className="colored"
              >
                от Garofoli Group
              </a>{" "}
              у нас.
            </p>
            <p>
              Древесина, которая используется для изготовления паркета,
              поступает из экологически чистых лесов. Стиль, красота, комфорт,
              престиж и долговечность в сочетании с уважением к окружающей среде
              - вот почему стоит выбрать пол от итальянского производителя.
            </p>
            <p>
              Такой паркет идеально сочетается с дверями, дверцами шкафов и
              декоративными панелями буазери. Вы можете сами выбрать отделку и
              согласовать все элементы интерьера. Эстетичного результата можно
              добиться комбинированием паркета с плинтусом, уголками и порогами.
            </p>
            <p>
              Паркет выпускается толщиной от 12 до 16 мм и состоит из трех
              слоев. Верхний и нижний слои изготовлены из цельного куска
              клееного бруса толщиной 3,5 мм, оба покрыты лаком для повышения
              влагостойкости и устойчивости среднего слоя из березового слоя.
            </p>
          </div>
          <CustomList
            title={"Преимущества"}
            list={[
              "Первоклассный дуб",
              "Экологичный",
              "Подходит для дверей, плинтусов, шкафов и панелей буазери.",
            ]}
          />
          <TypeDemo
            imgList={[Stoneware_1, Stoneware_2]}
            titleList={["Матовый", "Глянцевый"]}
            list={[
              [
                "эстетика и дизайн",
                "естественность",
                "нетоксичность",
                "производительность персонализации",
              ],
              [
                "отсутствие эстетического обслуживания",
                "устойчивость к ржавчине",
                "расчетное исполнение",
              ],
            ]}
            imgWidth={"62rem"}
          />
        </div>
      </div>
      <NewContactUs />
    </section>
  );
};

export default StonewareSub;
