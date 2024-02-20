import React, { useEffect } from "react";
import styles from "./explore.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
const Explore = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 2000,
    });
  }, []);
  return (
    <div className={styles.container}>
      <h2 data-aos="zoom-in-up">
        Why you need exposure <br /> to private markets
      </h2>

      <div className={styles.explorecards}>
        <div className={styles.item} data-aos="flip-right">
          <p>
            Access to <br /> innovation
          </p>
          <span>
            Gain early access to disruptive technologies and innovative
            companies not available on public markets.
          </span>
        </div>
        <div className={styles.item} data-aos="flip-right">
          <p>Customization</p>
          <span>
            Innovative investment structures & strategies can be tailored more
            effectively in private markets.
          </span>
        </div>
        <div className={styles.item} data-aos="flip-right">
          <p>Emerging market exposure</p>
          <span>
            Unlock untapped potential by investing in burgeoning markets with
            high growth prospects that are attainable through private market
            participation.
          </span>
        </div>
        <div className={styles.item} data-aos="flip-right">
          <p>Diversification</p>
          <span>
            Investing in private markets facilitates portfolio diversification,
            mitigating risks associated with public markets
          </span>
        </div>
        <div className={styles.item} data-aos="flip-right">
          <p>Strategic influence</p>
          <span>
            Private market investments often grant investors greater control and
            influence over business decisions and strategies.
          </span>
        </div>
        <div className={styles.item} data-aos="flip-right">
          <p>Emerging market exposure</p>
          <span>
            Unlock untapped potential by investing in burgeoning markets with
            high growth prospects that are attainable through private market
            participation.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Explore;
