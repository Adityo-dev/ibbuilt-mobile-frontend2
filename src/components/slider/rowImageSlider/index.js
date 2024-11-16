"use client";
import styles from "./rowImageSlider.module.css";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductDetailsRowSlider({ cartData }) {
  const image = [
    {
      src: "https://imgur.com/AVz6MQd.jpg",
    },
    {
      src: "https://imgur.com/5Pe5FH6.jpg",
    },
    {
      src: "https://imgur.com/OIbbhce.jpg",
    },
    {
      src: "https://imgur.com/l9TnVqo.jpg",
    },
  ];
  //   const { image, title } = cartData;
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  var settingsThumbnails = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true,
    infinite: false,
    arrows: false,
  };

  var settingsMainImage = {
    dots: false,
    speed: 500,
    fade: true,
    waitForAnimate: true,
    lazyLoad: "progressive",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
  };

  return (
    <div className={styles.rowSliderDataContainer}>
      {/* Thumbnail Slider */}
      <div className={styles.thumbnailSliderContainer}>
        <Slider
          asNavFor={nav1}
          ref={(slider) => (sliderRef2 = slider)}
          {...settingsThumbnails}
          className={styles.secondImageAllContainer}
        >
          {image.map((img, ind) => (
            <div className={styles.secondImageContainer} key={ind}>
              <Image
                className={styles.secondImage}
                src={img?.src}
                width={400}
                height={400}
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Main Image Slider */}
      <div className={styles.mainImageContainer}>
        <Slider
          asNavFor={nav2}
          ref={(slider) => (sliderRef1 = slider)}
          {...settingsMainImage}
        >
          {image.map((img, ind) => (
            <Link href={""} key={ind}>
              <Image
                className={styles.firstImage}
                src={img?.src}
                width={400}
                height={400}
                alt=""
              />
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ProductDetailsRowSlider;
