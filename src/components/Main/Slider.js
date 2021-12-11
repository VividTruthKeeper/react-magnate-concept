// IMPORT MODULES
import React from "react";
import { Link } from "react-router-dom";

// IMPORT SWIPER MODULES
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

// IMPORT SWIPER STYLES
import "swiper/swiper.scss";

const Slider = () => {
  return (
    <div className="slider">
      <Swiper
        // initialize Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay]}
        speed={1988}
        autoplay={({ delay: 5000 }, { disableOnInteraction: false })}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: false }}
        loop={true}
        noSwipingClass="swiper-slide"
      >
        <SwiperSlide>
          <div className="slider-img">
            <div className="slider__slide">
              <div className="slide__top">
                <h6>Прямиком из Италии</h6>
                <h2>
                  Персональный заказ и установка широкоформатных
                  керамо-гранитных плит
                </h2>
              </div>
              <div className="slide__bottom">
                <div className="slide__bottom-text">
                  <p>
                    Доверьте нам, ваш ремонт ведь мы это компания которая много
                    лет занимаемся привозом под заказ строй материалов, их
                    установкой и дальнейшим обслуживанием.
                  </p>
                </div>
                <div className="slide__bottom-link">
                  <Link to="/">Посмотреть каталог</Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-img">
            <div className="slider__slide">
              <div className="slide__top">
                <h6>Прямиком из Италии</h6>
                <h2>
                  Персональный заказ и установка широкоформатных
                  керамо-гранитных плит
                </h2>
              </div>
              <div className="slide__bottom">
                <div className="slide__bottom-text">
                  <p>
                    Доверьте нам, ваш ремонт ведь мы это компания которая много
                    лет занимаемся привозом под заказ строй материалов, их
                    установкой и дальнейшим обслуживанием.
                  </p>
                </div>
                <div className="slide__bottom-link">
                  <Link to="/">Посмотреть каталог</Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-img">
            <div className="slider__slide">
              <div className="slide__top">
                <h6>Прямиком из Италии</h6>
                <h2>
                  Персональный заказ и установка широкоформатных
                  керамо-гранитных плит
                </h2>
              </div>
              <div className="slide__bottom">
                <div className="slide__bottom-text">
                  <p>
                    Доверьте нам, ваш ремонт ведь мы это компания которая много
                    лет занимаемся привозом под заказ строй материалов, их
                    установкой и дальнейшим обслуживанием.
                  </p>
                </div>
                <div className="slide__bottom-link">
                  <Link to="/">Посмотреть каталог</Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-img">
            <div className="slider__slide">
              <div className="slide__top">
                <h6>Прямиком из Италии</h6>
                <h2>
                  Персональный заказ и установка широкоформатных
                  керамо-гранитных плит
                </h2>
              </div>
              <div className="slide__bottom">
                <div className="slide__bottom-text">
                  <p>
                    Доверьте нам, ваш ремонт ведь мы это компания которая много
                    лет занимаемся привозом под заказ строй материалов, их
                    установкой и дальнейшим обслуживанием.
                  </p>
                </div>
                <div className="slide__bottom-link">
                  <Link to="/">Посмотреть каталог</Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
