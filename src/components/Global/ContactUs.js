// IMPORT MODULES
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const ContactUs = () => {
  const animated = useRef();
  const [ref, inView] = useInView({
    threshold: 0.3,
  });
  useEffect(() => {
    if (inView) {
      animated.current.style.transform = "scale(1)";
      animated.current.style.opacity = "1";
      animated.current.style.transition = "all 0.5s ease";
    }
  }, [inView]);
  return (
    <section ref={animated} className="contact__us">
      <div ref={ref} className="container">
        <div className="contact__us-inner">
          <form className="contact__us__form">
            <div className="form-head">
              <label htmlFor="name" className="head-small">
                Заполните форму
              </label>
              <label htmlFor="name" className="head-big">
                Связаться с нами
              </label>
            </div>
            <div className="form-content">
              <input type="text" id="name" placeholder="Ваше имя" />
              <input type="telephone" placeholder="Ваш телефон" />
              <textarea
                name="message"
                id="form-text"
                rows="5"
                placeholder="Сообщение"
              ></textarea>
            </div>
            <div className="form-submit">
              <button type="submit">Отправить сообщение</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
