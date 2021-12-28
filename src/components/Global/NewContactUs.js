// IMPORT MODULES
import React from "react";

// IMPORT COMPONENTS
import SectionTitle from "./SectionTitle";

// IMPORT IMAGES
import Phone from "../../svg/phone.svg";
import Email from "../../svg/email.svg";
import Whatsapp from "../../svg/whatsapp.svg";
import Instagram from "../../svg/instagram.svg";

const NewContactUs = () => {
  return (
    <div className="new-contact-us">
      <div className="container">
        <SectionTitle
          title={"Не знаете, какое окно лучше подойдет для Вашего помещения? "}
          bigTitle={
            "Свяжитесь с нами прямо сейчас, и получите профессиональную консультацию нашего сотрудника."
          }
        />
        <div className="new-cu-content">
          <ul>
            <li>
              <a href="tel:+99363217733" className="list-item">
                <div className="list-img">
                  <img src={Phone} alt="Phone" />
                </div>
                <h6 className="list-text">+99363217733</h6>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/magnate_concept"
                className="list-item"
              >
                <div className="list-img">
                  <img src={Instagram} alt="Instagram" />
                </div>
                <h6 className="list-text">magnate_concept</h6>
              </a>
            </li>
            <li>
              <a href="mailto:magnate.concept@gmail.com" className="list-item">
                <div className="list-img">
                  <img src={Email} alt="Email" />
                </div>
                <h6 className="list-text">magnate.concept@gmail.com</h6>
              </a>
            </li>
            <li>
              <a href="https://wa.me/+99363217733" className="list-item">
                <div className="list-img">
                  <img src={Whatsapp} alt="Whatsapp" />
                </div>
                <h6 className="list-text">+99363217733</h6>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewContactUs;
