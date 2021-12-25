// IMPORT MODULES
import React from "react";

// IMPORT GLOBAL COMPONENTS
import ShortNav from "../components/Global/ShortNav";
import NewContactUs from "../components/Global/NewContactUs";

// IMPORT IMAGES
import Img from "../images/contact_us.jpg";

const ContactUs = () => {
  return (
    <section className="contact-us">
      <ShortNav
        background={Img}
        centerData={["Свяжитесь с нами", "Контакты"]}
      />
      <div className="container">
        <div className="contact-us-inner">
          <form>
            <div className="cu-form-top">
              <div className="input-block">
                <label htmlFor="name">
                  <h5>
                    Ваше имя <span className="colored">*</span>
                  </h5>
                </label>
                <input required type="text" id="name" placeholder="Аман" />
              </div>
              <div className="input-block">
                <label htmlFor="tel">
                  <h5>
                    Ваш телефон <span className="colored">*</span>
                  </h5>
                </label>
                <input
                  required
                  type="text"
                  id="tel"
                  placeholder="+993 65 656565"
                />
              </div>
              <div className="input-block">
                <label htmlFor="mail">
                  <h5>Ваша электронная почта</h5>
                </label>
                <input type="email" id="mail" placeholder="aman@gmail.com" />
              </div>
            </div>
            <div className="cu-form-middle">
              <div className="input-block">
                <label htmlFor="message">
                  <h5>
                    Сообщение <span className="colored">*</span>
                  </h5>
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="10"
                  placeholder="Сообщение"
                ></textarea>
              </div>
            </div>
            <div className="cu-form-bottom">
              <button type="submit" className="pink-link-default">
                Отправить
              </button>
              <p>
                Поля со знаком (<span className="colored">*</span>) обязательны
                для заполнения
              </p>
            </div>
          </form>
        </div>
      </div>
      <NewContactUs />
    </section>
  );
};

export default ContactUs;
