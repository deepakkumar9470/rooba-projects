import React, { useEffect } from "react";
import styles from "./contact.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 2000,
    });
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p data-aos="fade-right">
          Ready to <br />
          <span data-aos="fade-right">transcend</span> <br />
          <span data-aos="fade-right">the ordinary? </span>
        </p>
      </div>

      <div className={styles.right}>
        <form data-aos="fade-up">
          <p>
            Click here to start your journey into the future of private market
            investments. For more information, connect with us directly through
            the contact form below.
          </p>

          <div className={styles.inputDiv}>
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Your name" />
          </div>
          <div className={styles.inputDiv}>
            <label htmlFor="email">Email ID</label>
            <input type="text" />
          </div>
          <div className={styles.inputDiv}>
            <label htmlFor="phone">Phone no</label>
            <input type="number" />
          </div>
          <div className={styles.inputDiv}>
            <label htmlFor="query">Your Query</label>
            <input type="text" />
          </div>

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
