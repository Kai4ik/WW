import React from "react";
import styles from "./loading.module.css";

export const Loading = () => {
  return (
    <div className={styles.loading} id="loading">
      <div className={styles.loaderWrap}>
        <div className={styles.bottleWrap}>
          <div className={styles.cap}>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
          <div className={styles.bottle}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="26.81px"
              height="106.124px"
              viewBox="0 0.5 26.81 106.124"
              enableBackground="new 0 0.5 26.81 106.124"
              xmlSpace="preserve"
            >
              <defs>
                <pattern
                  id="water_fill"
                  width=".25"
                  height="1.1"
                  patternContentUnits="objectBoundingBox"
                >
                  <path
                    fill="#FD9201"
                    d="M0.25,1H0c0,0,0-0.659,0-0.916c0.083-0.303,0.158,0.334,0.25,0C0.25,0.327,0.25,1,0.25,1z"
                  />
                </pattern>
                <path
                  id="bottle"
                  d="M17.905,38.109V9.734c0,0,1.75-3.125,1.375-5.5s-5.875-2.232-5.875-2.232s-5.5-0.143-5.875,2.232
	s1.375,5.5,1.375,5.5v28.375c0,0-7.405,1.311-7.405,16.03s0,40.72,0,45.47s5.515,5.515,5.515,5.515h6.39h6.39
	c0,0,5.515-0.765,5.515-5.515s0-30.75,0-45.47S17.905,38.109,17.905,38.109z"
                />
                <mask id="bottle_mask">
                  <use
                    x="0"
                    y="0"
                    xlinkHref="#bottle"
                    opacity="1"
                    fill="#ffffff"
                  />
                </mask>
              </defs>
              <rect
                className={styles.bottleFill}
                mask="url(#bottle_mask)"
                fill="url(#water_fill)"
                x="-400"
                y="0"
                width="1600"
                height="120"
              />
              <path
                id="btl-out"
                fill="none"
                stroke="#FCE480"
                strokeWidth="3"
                strokeMiterlimit="10"
                d="M17.905,38.109V9.734
	c0,0,1.75-3.125,1.375-5.5s-5.875-2.232-5.875-2.232s-5.5-0.143-5.875,2.232s1.375,5.5,1.375,5.5v28.375
	c0,0-7.405,1.311-7.405,16.03s0,40.72,0,45.47s5.515,5.515,5.515,5.515h6.39h6.39c0,0,5.515-0.765,5.515-5.515s0-30.75,0-45.47
	S17.905,38.109,17.905,38.109z"
              />
            </svg>
          </div>
          <div className={styles.bottle}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="26.81px"
              height="106.124px"
              viewBox="0 0.5 26.81 106.124"
              enableBackground="new 0 0.5 26.81 106.124"
              xmlSpace="preserve"
            >
              <defs>
                <pattern
                  id="water_fill"
                  width=".25"
                  height="1.1"
                  patternContentUnits="objectBoundingBox"
                >
                  <path
                    fill="#FBCE13"
                    d="M0.25,1H0c0,0,0-0.659,0-0.916c0.083-0.303,0.158,0.334,0.25,0C0.25,0.327,0.25,1,0.25,1z"
                  />
                </pattern>
                <path
                  id="bottle"
                  d="M17.905,38.109V9.734c0,0,1.75-3.125,1.375-5.5s-5.875-2.232-5.875-2.232s-5.5-0.143-5.875,2.232
	s1.375,5.5,1.375,5.5v28.375c0,0-7.405,1.311-7.405,16.03s0,40.72,0,45.47s5.515,5.515,5.515,5.515h6.39h6.39
	c0,0,5.515-0.765,5.515-5.515s0-30.75,0-45.47S17.905,38.109,17.905,38.109z"
                />
                <mask id="bottle_mask">
                  <use
                    x="0"
                    y="0"
                    xlinkHref="#bottle"
                    opacity="1"
                    fill="#ffffff"
                  />
                </mask>
              </defs>
              <rect
                className={styles.bottleFill}
                mask="url(#bottle_mask)"
                fill="url(#water_fill)"
                x="-400"
                y="0"
                width="1600"
                height="120"
              />
              <path
                id="btl-out"
                fill="none"
                stroke="#FCE480"
                strokeWidth="3"
                strokeMiterlimit="10"
                d="M17.905,38.109V9.734
	c0,0,1.75-3.125,1.375-5.5s-5.875-2.232-5.875-2.232s-5.5-0.143-5.875,2.232s1.375,5.5,1.375,5.5v28.375
	c0,0-7.405,1.311-7.405,16.03s0,40.72,0,45.47s5.515,5.515,5.515,5.515h6.39h6.39c0,0,5.515-0.765,5.515-5.515s0-30.75,0-45.47
	S17.905,38.109,17.905,38.109z"
              />
            </svg>
          </div>
          <div className={styles.bottle}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="26.81px"
              height="106.124px"
              viewBox="0 0.5 26.81 106.124"
              enableBackground="new 0 0.5 26.81 106.124"
              space="preserve"
            >
              <defs>
                <pattern
                  id="water_fill"
                  width=".25"
                  height="1.1"
                  patternContentUnits="objectBoundingBox"
                >
                  <path
                    fill="#FBCE13"
                    d="M0.25,1H0c0,0,0-0.659,0-0.916c0.083-0.303,0.158,0.334,0.25,0C0.25,0.327,0.25,1,0.25,1z"
                  />
                </pattern>
                <path
                  id="bottle"
                  d="M17.905,38.109V9.734c0,0,1.75-3.125,1.375-5.5s-5.875-2.232-5.875-2.232s-5.5-0.143-5.875,2.232
	s1.375,5.5,1.375,5.5v28.375c0,0-7.405,1.311-7.405,16.03s0,40.72,0,45.47s5.515,5.515,5.515,5.515h6.39h6.39
	c0,0,5.515-0.765,5.515-5.515s0-30.75,0-45.47S17.905,38.109,17.905,38.109z"
                />
                <mask id="bottle_mask">
                  <use x="0" y="0" href="#bottle" opacity="1" fill="#ffffff" />
                </mask>
              </defs>
              <rect
                className={styles.bottleFill}
                mask="url(#bottle_mask)"
                fill="url(#water_fill)"
                x="-400"
                y="0"
                width="1600"
                height="120"
              />
              <path
                id="btl-out"
                fill="none"
                stroke="#FCE480"
                strokeWidth="3"
                strokeMiterlimit="10"
                d="M17.905,38.109V9.734
	c0,0,1.75-3.125,1.375-5.5s-5.875-2.232-5.875-2.232s-5.5-0.143-5.875,2.232s1.375,5.5,1.375,5.5v28.375
	c0,0-7.405,1.311-7.405,16.03s0,40.72,0,45.47s5.515,5.515,5.515,5.515h6.39h6.39c0,0,5.515-0.765,5.515-5.515s0-30.75,0-45.47
	S17.905,38.109,17.905,38.109z"
              />
            </svg>
          </div>
          <div className={styles.bottle}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="26.81px"
              height="106.124px"
              viewBox="0 0.5 26.81 106.124"
              enableBackground="new 0 0.5 26.81 106.124"
              space="preserve"
            >
              <defs>
                <pattern
                  id="water_fill"
                  width=".25"
                  height="1.1"
                  patternContentUnits="objectBoundingBox"
                >
                  <path
                    fill="#FBCE13"
                    d="M0.25,1H0c0,0,0-0.659,0-0.916c0.083-0.303,0.158,0.334,0.25,0C0.25,0.327,0.25,1,0.25,1z"
                  />
                </pattern>
                <path
                  id="bottle"
                  d="M17.905,38.109V9.734c0,0,1.75-3.125,1.375-5.5s-5.875-2.232-5.875-2.232s-5.5-0.143-5.875,2.232
	s1.375,5.5,1.375,5.5v28.375c0,0-7.405,1.311-7.405,16.03s0,40.72,0,45.47s5.515,5.515,5.515,5.515h6.39h6.39
	c0,0,5.515-0.765,5.515-5.515s0-30.75,0-45.47S17.905,38.109,17.905,38.109z"
                />
                <mask id="bottle_mask">
                  <use x="0" y="0" href="#bottle" opacity="1" fill="#ffffff" />
                </mask>
              </defs>
              <rect
                className={styles.bottleFill}
                mask="url(#bottle_mask)"
                fill="url(#water_fill)"
                x="-400"
                y="0"
                width="1600"
                height="120"
              />
              <path
                id="btl-out"
                fill="none"
                stroke="#FCE480"
                strokeWidth="3"
                strokeMiterlimit="10"
                d="M17.905,38.109V9.734
	c0,0,1.75-3.125,1.375-5.5s-5.875-2.232-5.875-2.232s-5.5-0.143-5.875,2.232s1.375,5.5,1.375,5.5v28.375
	c0,0-7.405,1.311-7.405,16.03s0,40.72,0,45.47s5.515,5.515,5.515,5.515h6.39h6.39c0,0,5.515-0.765,5.515-5.515s0-30.75,0-45.47
	S17.905,38.109,17.905,38.109z"
              />
            </svg>
          </div>
        </div>
        <div className={styles.bar}></div>
        <div className={styles.text}>loading</div>
      </div>
    </div>
  );
};
