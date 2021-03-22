import React from "react";
import styles from "./gallery.module.css";
import whiskey from "../../images/whiskeyBottle.png";
import b4 from "../../images/b4.png";
import b5 from "../../images/b5.png";
import $ from "jquery";

export const GallerySection = () => {
  return (
    <div id="gallerySection" className={styles.gallerySection}>
      <div className={styles.content}>
        <h3 className={styles.title}>WINCHESTER WHISKEY</h3>
        <div className={styles.box}>
          <span
            style={{
              "--i": 1,
            }}
          >
            <img alt="img" src={whiskey} />
          </span>
          <span
            style={{
              "--i": 2,
            }}
          >
            <img alt="img" src={b4} />
          </span>
          <span
            style={{
              "--i": 3,
            }}
          >
            <img alt="img" src={b5} />
          </span>
          <span
            style={{
              "--i": 4,
            }}
          >
            <img alt="img" src={b4} />
          </span>
          {$(window).width() < 480 ? null : (
            <>
              <span
                style={{
                  "--i": 5,
                }}
              >
                <img alt="img" src={b5} />
              </span>
              <span
                style={{
                  "--i": 6,
                }}
              >
                <img alt="img" src={whiskey} />
              </span>
              <span
                style={{
                  "--i": 7,
                }}
              >
                <img alt="img" src={b5} />
              </span>
              <span
                style={{
                  "--i": 8,
                }}
              >
                <img alt="img" src={b4} />
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
