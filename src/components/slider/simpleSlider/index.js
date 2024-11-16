"use client";
import styles from "./simpleSlider.module.css";
import Link from "next/link";
// import slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import DynamicRating from "../rating";
// import TransparentButton from "../buttonGroup/transparentButton";
import ProductDetailsRowSlider from "../rowImageSlider";
// slider data

function SimpleSlider({ dealData }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section>
      <Slider {...settings}>
        {dealData.map((data, ind) => (
          <div key={ind}>
            <div className={styles.dealDataContainer}>
              <div className={styles.dealProductImageContainer}>
                <ProductDetailsRowSlider cartData={data} />
              </div>

              <div className={styles.cartInfoContainer}>
                {data?.soldOut == true ? (
                  <p className={data?.soldOut === true ? styles.soldOut : ""}>
                    {"Sold Out"}
                  </p>
                ) : (
                  <div className={styles.hotAndDiscountContainer}>
                    {data?.discount && (
                      <p className={styles.productDiscount}>
                        -{data?.discount}%
                      </p>
                    )}
                    {data?.hot && <p className={styles.productHot}>{"Hot"}</p>}
                  </div>
                )}
                <Link href={""} className={styles.productName}>
                  {data?.name}
                </Link>
                <Link href={""} className={styles.productTitle}>
                  {data?.title}
                </Link>
                {/* <DynamicRating rating={data?.rating} /> */}
                <p className={styles.productsPriceContainer}>
                  {data?.currentPrice && (
                    <span className={styles.productsCurrentPrice}>
                      ${data?.currentPrice}
                    </span>
                  )}
                  {data?.oldPrice && (
                    <del className={styles.productsOldPrice}>
                      ${data?.oldPrice}
                    </del>
                  )}
                </p>
                <div className={styles.productInfoContainer}>
                  <p className={styles.productInfo}>
                    <span className={styles.productInfoName}>Display:</span>
                    6.75 HD+, Mini-Notch, 90hz Display
                  </p>
                  <p className={styles.productInfo}>
                    <span className={styles.productInfoName}>Processor:</span>
                    MediaTek Helio G37 (12nm)
                  </p>
                  <p className={styles.productInfo}>
                    <span className={styles.productInfoName}>Camera:</span>
                    Triple 50+2+2 MP on Rear, 8MP Selfie
                  </p>
                </div>

                <div className={styles.btnAddToCart}>
                  {/* <TransparentButton btnName={"Add to cart"} btnUrl={""} /> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default SimpleSlider;
