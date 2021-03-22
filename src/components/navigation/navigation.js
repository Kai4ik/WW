import React from "react";
import $ from "jquery";
import styles from "./navigation.module.css";
import { HashLink } from "react-router-hash-link";

/* images */
import logo from "../../images/navigation/logo-min.png";
import bull from "../../images/bull.png";
import contactUs from "../../images/navigation/contactUs.png";

export const Navigation = () => {
  /* Functions used to open and close navigation menu */
  const showMenu = () => {
    if ($(window).width() > 900) {
      $(`#navigation`).css("cssText", "transform: translateX(0%);");
    } else {
      $(`#navigation`).css("cssText", "transform: translateY(0%);");
      $("#bull").css("cssText", "opacity: 0;");
    }
  };

  const closeMenu = () => {
    if ($(window).width() > 900) {
      $(`#navigation`).css("cssText", "transform: translateX(-93%);");
      $("#navigation").removeClass();
      $("#navigation").addClass(styles.navigation);
    } else {
      $(`#navigation`).css("cssText", "transform: translateY(-88%);");
      $("#bull").css("cssText", "opacity: 1;");
    }
  };

  /* Function used to show contact form */
  const showForm = () => {
    $(`#showForm`).css("cssText", "display: block;");
  };

  const changeSection = () => {
    $("#loading").css("cssText", "display: block;");
    if ($(window).width() > 900) {
      $(`#navigation`).css("cssText", "transform: translateX(-93%);");
    } else {
      $("#bull").css("cssText", "opacity: 1;");
      $(`#navigation`).css("cssText", "transform: translateY(-88%);");
    }
    setTimeout(() => {
      $("#loading").css("cssText", "display: none;");
    }, 5000);
  };

  const changeBg = (section) => {
    $("#navigation").removeClass();
    switch (section) {
      case "home":
        $("#navigation").addClass(styles.navigation);
        break;
      case "gallery":
        $("#navigation").addClass(styles.navigation3);
        break;
      case "drinks":
        $("#navigation").addClass(styles.navigation2);
        break;
      case "story":
        $("#navigation").addClass(styles.navigation4);
        break;
      case "contactUs":
        $("#navigation").addClass(styles.navigation5);
        break;
      default:
    }
  };

  return (
    <div className={styles.navigation} id="navigation">
      <div className={styles.menu}>
        <div onClick={changeSection} onMouseOver={() => changeBg("home")}>
          <HashLink smooth to="/#headline" className={styles.links}>
            HOME
          </HashLink>
        </div>
        <div onClick={changeSection} onMouseOver={() => changeBg("gallery")}>
          <HashLink smooth to="/#gallerySection" className={styles.links}>
            GALLERY
          </HashLink>
        </div>
        <div onClick={changeSection} onMouseOver={() => changeBg("drinks")}>
          <HashLink smooth to="/#cocktailsSection" className={styles.links}>
            DRINK SUGGESTIONS
          </HashLink>
        </div>
        <div onClick={changeSection} onMouseOver={() => changeBg("story")}>
          <HashLink smooth to="/#storySection" className={styles.links}>
            OUR STORY
          </HashLink>
        </div>
        <div onClick={changeSection} onMouseOver={() => changeBg("contactUs")}>
          <HashLink smooth to="/#contactDetails" className={styles.links}>
            CONTACT US
          </HashLink>
        </div>
        <div onClick={closeMenu}>
          <HashLink className={styles.links} id={styles.closeMenu}>
            CLOSE MENU
          </HashLink>
        </div>
      </div>
      <div className={styles.visible}>
        <div className={styles.menuBtn} onClick={showMenu}></div>
        <img src={logo} alt="logo" className={styles.logo}></img>
        <div className={styles.title} id={styles.title}>
          Winchester Whiskey
        </div>
        <div className={styles.centerTitle}>
          <div className={styles.title}>Winchester Whiskey</div>
          <img src={bull} alt="bull" className={styles.bull} id="bull" />
        </div>
        <img
          alt="contactUs"
          src={contactUs}
          className={styles.mapLogo}
          onClick={showForm}
        />
      </div>
    </div>
  );
};
