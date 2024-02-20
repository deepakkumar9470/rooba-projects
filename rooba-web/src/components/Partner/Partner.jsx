import React, { useState, useEffect, useRef } from "react";
import styles from "./partner.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import panag from "../../assets/panag.jpg";
import forge from "../../assets/forge.jpg";
import castler from "../../assets/castler.jpg";

const Partner = () => {
  const imagesData = [
    { imgUrl: panag },
    { imgUrl: forge },
    { imgUrl: castler },
    { imgUrl: panag },
    { imgUrl: forge },
    { imgUrl: castler },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.container}>
      <p>Our Partners</p>
      <hr />

      <div className={styles.partnerCarousel}>
        <Slider {...settings} className={styles.sliderDiv}>
          {imagesData.map((item, i) => (
            <div className={styles.imgSlide}>
              <img src={item.imgUrl} alt="sliderimg" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Partner;
