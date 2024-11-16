"use client";
import styles from "./heroSlider.module.css";
import Image from "next/image";
import Link from "next/link";

// import slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import components
import NextArrow from "./nextArrow";
import PrevArrow from "./prevArrow";
import ViewDetails from "@/components/buttonGroup/ViewDetails";

function HeroSlider({ sliderData }) {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 7000,
    lazyLoad: "progressive",
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className={styles.heroSliderMainContainer}>
      <div className={styles.heroSliderContainer}>
        <Slider {...settings}>
          {sliderData.map((data, ind) => (
            <div className={styles.sliderDataMainContainer} key={ind}>
              <Image
                className={styles.sliderBanner}
                src={data?.image}
                width={1000}
                height={1000}
                alt=""
              />

              <div className={styles.sliderDataInfoContainer}>
                <h1 className={styles.sliderTitle}>{data?.title}</h1>
                <p className={styles.subTitle}>{data?.description}</p>
                <p className={styles.priceContainer}>
                  <span className={styles.curPrice}>{data?.regular_price}</span>
                  <del className={styles.oldPrice}>{data?.discount_price}</del>
                </p>
                <ViewDetails />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default HeroSlider;
