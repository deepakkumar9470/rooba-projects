import React, { useEffect } from "react";
import styles from "./graphalternative.module.scss";
import arrowleft from "../../assets/arrow_white.svg";
import Chart from "./Charts/Chart";
import AOS from "aos";
import "aos/dist/aos.css";

const GraphAlternative = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 2000,
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.right} data-aos="fade-right">
        <Chart />
      </div>

      <div
        className={styles.left}
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        <p className={styles.p1}>Access</p>
        <p className={styles.p2}>Alternative</p>
        <p className={styles.p3}>Investments</p>

        <span>
          Unleashing the untapped potential of the alternative markets through
          Rooba.Finance - Your gateway to superior returns and exclusive
          opportunities
          <br /> <br /> <br /> <br /> Discover the advantages of alternative
          market investments, unlock new horizons, and embark on a journey
          towards financial prosperity with our platform as your trusted
          partner.{" "}
        </span>
        <div className={styles.options}>
          <button>Private Equity</button>
          <button>Private Debt</button>
          <button>Investment Management Firms</button>
        </div>

        <button className={styles.learnMoreBtn}>
          Learn More <img src={arrowleft} alt="arrowleft" />
        </button>
      </div>
    </div>
  );
};

export default GraphAlternative;
