import React, { useEffect } from "react";
import styles from "./club.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const InvestClub = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 2000,
    });
  }, []);
  return (
    <div className={styles.container}>
      <h2 data-aos="zoom-in-up">
        We’re more than an <br />
        <span>investment club</span>
      </h2>
      <p data-aos="zoom-in-left">
        Our state-of-the-art platform ensures provenance through an unbroken
        chain of custody, and rigorous independent due diligence, both legal and
        financial. We're not just helping you invest; we're revolutionizing how
        investments are made, offering a dynamic approach that transcends
        traditional boundaries. Connect with a community of visionaries, and
        embark on an exclusive journey where innovation meets your financial
        aspirations.
      </p>
    </div>
  );
};

export default InvestClub;
