import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const Slider = ({ children }) => {
  const params = {
    effect: "coverflow",
    grabCursor: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        centeredSlides: false,
      },
      // when window width is <= 640px
      640: {
        slidesPerView: 2,
        centeredSlides: true,
      },
    },
    loop: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0, // Stretch space between slides (in px)
      depth: 400, // Depth offset in px (slides translate in Z axis)
      modifier: 1, // Effect multiplier
      slideShadows: true, // Enables slides shadows
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  };

  return <Swiper {...params}>{children}</Swiper>;
};

export default Slider;
