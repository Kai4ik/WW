import React from "react";
import styles from "./story.module.css";

export const StorySection = () => {
  return (
    <div className={styles.storySection} id="storySection">
      <div className={styles.content}>
        <h4 className={styles.heading}> Our Story</h4>
        <p className={styles.storyParagraph}>
          Our mission is to distill and deliver classic Pennsylvania Rye spirits
          following over 200 years of American distilling tradition. Working
          with our community and giving back to the whiskey-loving public is a
          big part of what truly keeps Dad’s Hat “Pennsylvania Proud”.
        </p>
      </div>
    </div>
  );
};
