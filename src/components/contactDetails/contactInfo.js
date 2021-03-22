import React from "react";
import styles from "./contactInfo.module.css";
import arrow from "../../images/woodenArrow.png";
import instagram from "../../images/socialNetworkIcons/instagram.png";
import facebook from "../../images/socialNetworkIcons/facebook.png";
import twitter from "../../images/socialNetworkIcons/twitter.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

export const ContactDetails = () => {
  return (
    <section className={styles.contactDetails} id="contactDetails">
      <div className={styles.transition}></div>
      <svg>
        <filter id="wavy3">
          <feTurbulence
            x="0"
            y="0"
            baseFrequency="0.05"
            numOctaves="3"
            seed="4"
          >
            <animate
              attributeName="baseFrequency"
              dur="60s"
              values="0.02;0.03;0.02"
              repeatCount="indefinite"
            ></animate>
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="25"></feDisplacementMap>
        </filter>
      </svg>
      <div className={styles.contactInfo}>
        <img alt="arrow" src={arrow} className={styles.addressArrow} />
        <div className={styles.infoField}>
          <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.mapIcon} />
          <p className={styles.address}>
            10330 Yonge St. Unit 1, Richmond Hill, ON L4C 5N1
          </p>
        </div>
        <img alt="arrow" src={arrow} className={styles.emailArrow} />
        <div className={styles.infoField}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.emailIcon} />
          <p className={styles.email}> info@winchesterWhiskey</p>
        </div>
        <img alt="arrow" src={arrow} className={styles.phoneArrow} />
        <div className={styles.infoField}>
          <FontAwesomeIcon icon={faPhoneAlt} className={styles.phoneIcon} />
          <p className={styles.phone}> 647-804-2808</p>
        </div>
        <img alt="arrow" src={arrow} className={styles.socialNetworksArrow} />
        <p className={styles.socialNetworks}>
          <img src={instagram} alt="instagramLogo" />
          <img src={facebook} alt="facebookLogo" />
          <img src={twitter} alt="twitterLogo" />
        </p>
      </div>
    </section>
  );
};
