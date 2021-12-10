// IMPORT MODULES
import React from "react";

// IMPORT SWIPER MODULES
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

// IMPORT SWIPER STYLES
import "swiper/swiper.scss";

const BgSlider = () => {
  return (
    <div className="bg-slider">
      <Swiper
        // initialize Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay]}
        autoplay={({ delay: 3000 }, { disableOnInteraction: false })}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={({ clickable: false }, { el: ".swiper-pagination" })}
        loop={true}
        noSwipingClass="swiper-slide"
      >
        <SwiperSlide>
          <div className="slider-img_1"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-img_2"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-img_3"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-img_4"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BgSlider;
