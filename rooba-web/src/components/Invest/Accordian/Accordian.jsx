import React, { useState } from "react";
import styles from "../invest.module.scss";
import arrowleft from "../../../assets/arrowleft.svg";
const Accordian = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className={styles.accordion}>
      {data.map((item, index) => (
        <div
          key={index}
          className={`${styles.accordion_item} ${
            activeIndex === index ? `{${styles.active}}` : ""
          }`}
        >
          <div
            className={styles.accordion_title}
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            {activeIndex === index ? <p>-</p> : <p>+</p>}
          </div>
          <div className={styles.accordion_content}>
            {activeIndex === index && (
              <div>
                <p>{item.description}</p>
                <button>
                  Start Now <img src={arrowleft} alt="arrowleft" />
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordian;
