// IMPORT MODULES
import React from "react";
import { Link } from "react-router-dom";

// IMPORT COMPONENTS
import SectionTitle from "../Global/SectionTitle";
import ItemTitle from "../Global/ItemTitle";

// IMPORT IMAGES
import Img_1 from "../../images/project_section_1.jpg";
import Img_2 from "../../images/project_section_2.jpg";
import Img_3 from "../../images/project_section_3.jpg";
import Img_4 from "../../images/project_section_4.jpg";
import Img_5 from "../../images/project_section_5.jpg";
import Img_6 from "../../images/project_section_6.jpg";

const ProjectSection = () => {
  return (
    <div className="container">
      <section className="project-section">
        <SectionTitle
          title={"Ознакомтесь с нашим портфолио"}
          bigTitle={"Наши выполненные проекты"}
        />
        <div className="project-section-content">
          <div className="project-section__left">
            <div className="project-section__content__top">
              <div className="project-section-img small-img">
                <img src={Img_1} alt="Project 1" />
                <div className="title-wrapper">
                  <ItemTitle
                    title={"12.09.2020"}
                    bigTitle={"Ашхабад, 120 м2, плановый дом, 7 комнат"}
                  />
                </div>
              </div>
              <div className="project-section-img small-img">
                <img src={Img_2} alt="Project 2" />
                <div className="title-wrapper">
                  <ItemTitle
                    title={"12.09.2020"}
                    bigTitle={"Ашхабад, 120 м2, плановый дом, 7 комнат"}
                  />
                </div>
              </div>
            </div>
            <div className="project-section__content__bottom">
              <div className="project-section-img big-img">
                <img src={Img_3} alt="Project 3" />
                <div className="title-wrapper">
                  <ItemTitle
                    title={"12.09.2020"}
                    bigTitle={"Ашхабад, 120 м2, плановый дом, 7 комнат"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="project-section__right">
            <div className="project-section__content__bottom">
              <div className="project-section-img big-img">
                <img src={Img_4} alt="Project 4" />
                <div className="title-wrapper">
                  <ItemTitle
                    title={"12.09.2020"}
                    bigTitle={"Ашхабад, 120 м2, плановый дом, 7 комнат"}
                  />
                </div>
              </div>
            </div>
            <div className="project-section__content__top">
              <div className="project-section-img small-img">
                <img src={Img_5} alt="Project 5" />
                <div className="title-wrapper">
                  <ItemTitle
                    title={"12.09.2020"}
                    bigTitle={"Ашхабад, 120 м2, плановый дом, 7 комнат"}
                  />
                </div>
              </div>
              <div className="project-section-img small-img">
                <img src={Img_6} alt="Project 6" />
                <div className="title-wrapper">
                  <ItemTitle
                    title={"12.09.2020"}
                    bigTitle={"Ашхабад, 120 м2, плановый дом, 7 комнат"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-section-button">
          <Link to="/" className="pink-link-default">
            Посмотреть все работы
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectSection;
