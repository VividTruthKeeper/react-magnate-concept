// IMPORT MODULES
import React from "react";

// IMPORT GLOBAL COMPONENTS
import ShortNav from "../components/Global/ShortNav";
import SectionTitle from "../components/Global/SectionTitle";
import NewContactUs from "../components/Global/NewContactUs";
import TypeDemo from "../components/Global/TypeDemo";

// IMPORT IMAGES
import Img from "../images/window_sub.jpg";

import Win_1 from "../images/window_sub_1.jpg";
import Win_2 from "../images/window_sub_2.jpg";
import Win_3 from "../images/window_sub_3.jpg";

const WindowSub = () => {
  return (
    <section className="window-sub">
      <ShortNav
        background={Img}
        centerData={["Ознакомьтесь с видами", "Наших окон"]}
      />
      <div className="container">
        <div className="window-sub-inner content-block">
          <SectionTitle
            bigTitle={"Окна из дерева с защитой от кражи со взломом."}
          />
          <div className="indent-text">
            <p>
              У нас Вы можете заказать окна из дерева, дерево-алюминия,
              дерево-бронзы и ненесущие стены. А также двери, ставни, двери для
              окон, жалюзи и подъемно- поворотные двери из Италии. Вся продукция
              сочетает в себе стиль, вкус и элегантность. Мы доставляем товар
              напрямую от производителя. Поэтому гарантируем эстетичность,
              максимальную безопасность и высокие эксплуатационные
              характеристики систем. Каждое окно изготавливается на основе
              конкретного проекта, индивидуально под клиента. Все
              автоматизированные окна можно настроить по любым параметрам,
              необходимых для конкретного помещения. Они производятся
              промышленным способом и обрабатываются вручную по передовым
              европейским технологиям.
            </p>
          </div>
          <TypeDemo
            imgList={[Win_1, Win_2, Win_3]}
            titleList={["Деревянные окна", "Алюминевые окна", "Бронзовые окна"]}
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
              [
                "отсутствие эстетического обслуживания",
                "устойчивость к ржавчине",
                "расчетное исполнение",
              ],
            ]}
          />
        </div>
      </div>
      <NewContactUs />
    </section>
  );
};

export default WindowSub;
