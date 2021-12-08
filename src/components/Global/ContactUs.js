// IMPORT MODULES
import React from "react";

// IMPORT IMAGES
import Bg from "../../images/contact_us_bg.jpg";

const ContactUs = () => {
    return(
        <section className="contact__us">
            <div className="container">
                <div className="contact__us-inner">
                    <form className="contact__us__form">
                        <div className="form-head">
                            <label htmlFor="name" className="head-small">Заполните форму</label>
                            <label htmlFor="name" className="head-big">Связаться с нами</label>
                        </div>
                        <div className="form-content">
                            <input type="text" id="name" placeholder="Ваше имя" />
                            <input type="telephone" placeholder="Ваш телефон" />
                            <textarea name="message" id="form-text" rows="5" placeholder="Сообщение"></textarea>
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