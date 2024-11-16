"use client";
import styles from "./categorySlider.module.css";
import Image from "next/image";
import Link from "next/link";

// import slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CategorySlider = ({ categoryData }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
    slidesToShow: 9,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };
  return (
    <section>
      <div className={styles.productCategoryAllDataContainer}>
        <Slider {...settings}>
          {categoryData.map((category, ind) => (
            <div key={ind} className={styles.categoryAllDataCartContainer}>
              <div className={styles.categoryCartInfoContainer}>
                <Image
                  className={styles.categoryImage}
                  src={category?.categoryImg}
                  width={400}
                  height={400}
                  alt=""
                />
                <p className={styles.categoryName}>{category?.categoryName}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CategorySlider;
