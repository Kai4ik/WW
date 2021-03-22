import React from "react";
import styles from "./headline.module.css";
import { HashLink } from "react-router-hash-link";

/* Videos used as a background */
import video1 from "../../videos/bgVideo.mp4";
import video2 from "../../videos/bgVideo2.mp4";
import video3 from "../../videos/bgVideo3.mp4";

/* Owl Carousel module used to create carousel out of above videos */
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";

/* Other components */
import { Navigation } from "../navigation/navigation";

export const Headline = () => {
  const options = {
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
    nav: false,
    dots: false,
  };

  return (
    <header id="headline">
      <Navigation />
      <OwlCarousel options={options}>
        <video autoPlay muted loop className={styles.bgVideo}>
          <source src={video1} type="video/mp4"></source>
        </video>
        <video autoPlay loop muted className={styles.bgVideo2}>
          <source src={video2} type="video/mp4"></source>
        </video>
        <video autoPlay loop muted className={styles.bgVideo}>
          <source src={video3} type="video/mp4"></source>
        </video>
      </OwlCarousel>
      <div className={styles.videoOverlay}></div>
      <div className={styles.headline}>
        <p className={styles.title}>Winchester Whiskey</p>
        <p className={styles.slogan}> taste our Experience</p>
        <HashLink smooth to="/#storySection">
          <button className={styles.learnMore}> Learn More</button>
        </HashLink>
      </div>
      <div className={styles.transition}></div>
      <svg>
        <filter id="wavy">
          <feTurbulence
            x="0"
            y="0"
            baseFrequency="0.03"
            numOctaves="5"
            seed="3"
          >
            <animate
              attributeName="baseFrequency"
              dur="60s"
              values="0.02;0.03;0.02"
              repeatCount="indefinite"
            ></animate>
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="20"></feDisplacementMap>
        </filter>
      </svg>
    </header>
  );
};
