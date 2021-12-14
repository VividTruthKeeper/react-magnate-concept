// IMPORT MODULES
import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

// IMPORT COMPONENTS
import SectionTitle from "./SectionTitle";

// IMPORT IMAGES
import Phone from "../../svg/phone.svg";
import Email from "../../svg/email.svg";
import Whatsapp from "../../svg/whatsapp.svg";
import Instagram from "../../svg/instagram.svg";

const NewContactUs = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
  });
  const animated = useRef();
  useEffect(() => {
    if (inView) {
      animated.current.style.transform = "scale(1)";
      animated.current.style.opacity = "1";
      animated.current.style.transition = "0.5s all ease";
    }
  }, [inView]);
  return (
    <div ref={animated} className="new-contact-us">
      <div ref={ref} className="container">
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
              <div className="list-item">
                <div className="list-img">
                  <img src={Email} alt="Email" />
                </div>
                <h6 className="list-text">magnate.concept@gmail.com</h6>
              </div>
            </li>
            <li>
              <div className="list-item">
                <div className="list-img">
                  <img src={Whatsapp} alt="Whatsapp" />
                </div>
                <h6 className="list-text">+99363217733</h6>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewContactUs;
