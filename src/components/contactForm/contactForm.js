import React from "react";
import $ from "jquery";
import styles from "./contactForm.module.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export const ContactForm = () => {
  const closeForm = () => {
    $(`#showForm`).fadeOut(1600, "linear");
  };

  return (
    <div className={styles.formSection} id="showForm">
      <div className={styles.overlay} onClick={closeForm}></div>
      <div className={styles.contactForm}>
        <div className={styles.form}>
          <div className={styles.formField}>
            <label htmlFor="fullName"> Full Name </label>
            <input type="text" name="fullName" required />
          </div>
          <div className={styles.formField}>
            <label htmlFor="email"> Email </label>
            <input type="text" name="email" required />
          </div>
          <div className={styles.formField}>
            <label htmlFor="phoneNumber" className={styles.phoneLabel}>
              Phone number
            </label>
            <PhoneInput country={"ca"} />
          </div>
          <button className={styles.submitBtn}>Send message</button>
        </div>
      </div>
    </div>
  );
};
