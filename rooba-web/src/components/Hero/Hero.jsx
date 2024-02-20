import React, { useEffect } from "react";
import styles from "./hero.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
const Hero = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 2000,
    });
  }, []);
  return (
    <div className={styles.container}>
      <h2 data-aos="fade-left">
        Overcome Investment Barriers, <br />{" "}
        <span>Build Sustainable Wealth</span>
      </h2>
      <p data-aos="fade-right">
        Dive into alternative markets with us and set your <br /> capital on the
        path of <span>unparalleled growth.</span>
      </p>
    </div>
  );
};

export default Hero;
