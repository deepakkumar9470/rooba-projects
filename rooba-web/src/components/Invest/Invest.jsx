import React, { useEffect } from "react";
import styles from "./invest.module.scss";
import rightarr from "../../assets/rightarrow.svg";
import computer from "../../assets/computer.png";
import form from "../../assets/form.png";
import Accordian from "./Accordian/Accordian";
import AOS from "aos";
import "aos/dist/aos.css";
const Invest = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 2000,
    });
  }, []);

  const accData = [
    {
      title: "Create Account ",
      description:
        "Investing in private markets facilitates portfolio diversification, mitigating risks associated with public markets ",
    },
    {
      title: "Discover Opportunities",
      description:
        "Investing in private markets facilitates portfolio diversification, mitigating risks associated with public markets ",
    },
    {
      title: "Invest with Flexibility",
      description:
        "Investing in private markets facilitates portfolio diversification, mitigating risks associated with public markets ",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.toptext}>
        <p data-aos="fade-right">How to</p>
        <div data-aos="fade-right" className={styles.investText}>
          <span>Invest</span>
          <img src={rightarr} alt="arrow" />
        </div>
      </div>

      <div className={styles.investWrapper}>
        <Accordian data={accData} />

        <div className={styles.investImage}>
          <img className={styles.computerImg} src={computer} alt="computer" />
          <img className={styles.formImg} src={form} alt="form" />
        </div>
      </div>
    </div>
  );
};

export default Invest;
