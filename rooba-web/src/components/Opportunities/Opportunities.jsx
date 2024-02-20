import React, { useState, useEffect } from "react";
import styles from "./opportunities.module.scss";
import imgbg from "../../assets/image1.png";
import location from "../../assets/location.svg";
import stretch from "../../assets/stretch.svg";
import electricity from "../../assets/electricity.svg";
import agriland from "../../assets/agriland.svg";
import fence from "../../assets/fence.svg";
import maintenance from "../../assets/maintenance.svg";
import phone from "../../assets/phone.svg";
import plus from "../../assets/plus.svg";
import arrowleft from "../../assets/arrow_white.svg";
import land from "../../assets/land.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Opportunities = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 2000,
    });
  }, []);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const tabData = [
    {
      title: "Greensteps  I",
      description:
        "In a world where the hustle and bustle of a metropolitan city can wear you down, everyone deserves a place to escape to— a real 'home away from home.'That's precisely what we're here to offer you. Our carefully curated real estate opportunities provide you with the perfect retreat from the urban chaos, all while potentially securing a solid investment in your future.",
    },
    {
      title: "Greensteps II",
      description:
        "In a world where the hustle and bustle of a metropolitan city can wear you down, everyone deserves a place to escape to— a real 'home away from home.'That's precisely what we're here to offer you. Our carefully curated real estate opportunities provide you with the perfect retreat from the urban chaos, all while potentially securing a solid investment in your future.",
    },
    {
      title: "Greensteps III",
      description:
        "In a world where the hustle and bustle of a metropolitan city can wear you down, everyone deserves a place to escape to— a real 'home away from home.'That's precisely what we're here to offer you. Our carefully curated real estate opportunities provide you with the perfect retreat from the urban chaos, all while potentially securing a solid investment in your future.",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p data-aos="fade-right">Discover</p>
        <span data-aos="fade-left">Prime Opportunities</span>
        <div className={styles.tab_section}>
          <div className={styles.tabs}>
            {tabData.map((tab, index) => (
              <div
                key={index}
                className={`${styles.tab} ${
                  activeTab === index ? ` ${styles.active}` : ""
                }`}
                onClick={() => handleTabClick(index)}
              >
                {tab.title}
              </div>
            ))}
          </div>
          <div className={styles.tab_content}>
            <p>{tabData[activeTab].description}</p>
          </div>
        </div>

        <button className={styles.learnMoreBtn}>
          Learn More <img src={arrowleft} alt="arrowleft" />
        </button>
      </div>

      <div className={styles.right}>
        <div className={styles.imgdiv}>
          <img src={imgbg} alt="bg" />
          <div className={styles.imagetext}>
            <p>GreenSteps I</p>
            <div className={styles.location}>
              <img src={location} width={20} alt="location" />
              <span>Alwar,Rajasthan</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.toptags}>
            <p>Tags</p>
            <div className={styles.tags}>
              <div className={styles.tag}>
                <img src={land} width={20} alt="" />
                <span>Regular Plot</span>
              </div>
              <div className={styles.tag}>
                <img src={stretch} width={20} alt="" />
                <span>2,970 Sq ft"</span>
              </div>
              <div className={styles.tag}>
                <span>Fractional Ownershipt</span>
              </div>
            </div>
          </div>

          <div className={styles.othertags}>
            <p>Other Tags</p>
            <div className={styles.tags}>
              <div className={styles.tag}>
                <img src={electricity} alt="electricity" />
                <span>Electricity</span>
              </div>
              <div className={styles.tag}>
                <img src={agriland} alt="agriland" />
                <span>Agricultural Land</span>
              </div>
              <div className={styles.tag}>
                <img src={maintenance} alt="maintenance" />
                <span>Maintenance Inclusive</span>
              </div>
              <div className={styles.tag}>
                <img src={fence} alt="fence" />
                <span>Fence</span>
              </div>
            </div>
          </div>

          <div className={styles.price}>
            <p>price</p>

            <div className={styles.priceCard}>
              <div className={styles.priceitem}>
                <span>
                  INR <br />
                  1.75 cr
                </span>
              </div>
              <div className={styles.priceitem}>
                <span>2900/ Sq yd</span>
              </div>
              <div className={styles.priceitem}>
                <span>
                  INR <br /> 5,00,000
                </span>
              </div>
            </div>
          </div>
          <div className={styles.button}>
            <button className={styles.button1}>
              <img src={plus} alt="plus" />
              Invest Now
            </button>

            <button className={styles.button2}>
              <img src={phone} alt="phone" />
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
