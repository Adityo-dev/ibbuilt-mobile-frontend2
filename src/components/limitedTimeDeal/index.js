import React from "react";
import styles from "./limitedTimeDeal.module.css";
// import components
import Timer from "@/components/timer";
import SimpleSlider from "../slider/simpleSlider";

const dealData = [
  {
    image: [
      "https://klbtheme.com/partdo/phone/wp-content/uploads/sites/2/2022/11/1-30-500x500.jpg",
      "https://klbtheme.com/partdo/phone/wp-content/uploads/sites/2/2022/11/1-30-500x500.jpg",
      "https://klbtheme.com/partdo/phone/wp-content/uploads/sites/2/2022/11/1-30-500x500.jpg",
      "https://klbtheme.com/partdo/phone/wp-content/uploads/sites/2/2022/11/1-30-500x500.jpg",
    ],
    name: "samsung galaxy",
    title: "Samsung Galaxy S23 Ultra, Factory Unlocked, 512GB",
    rating: "4.5",
    currentPrice: "699.99",
    oldPrice: "949.99",
    discount: "26",
    soldOut: false,
    hot: true,
  },
  {
    image: [
      "https://klbtheme.com/partdo/phone/wp-content/uploads/sites/2/2022/11/1-30-500x500.jpg",
      "https://klbtheme.com/partdo/phone/wp-content/uploads/sites/2/2022/11/1-30-500x500.jpg",
      "https://klbtheme.com/partdo/phone/wp-content/uploads/sites/2/2022/11/1-30-500x500.jpg",
      "https://klbtheme.com/partdo/phone/wp-content/uploads/sites/2/2022/11/1-30-500x500.jpg",
    ],
    name: "Vivo",
    title: "Action Camera with 5 3K60 Ultra HD Video",
    rating: "2",
    currentPrice: "129.74",
    oldPrice: "",
    discount: "",
    soldOut: false,
    hot: true,
  },

  {
    image: [
      "https://klbtheme.com/partdo/phone/wp-content/uploads/sites/2/2022/11/1-30-500x500.jpg",
      "https://klbtheme.com/partdo/phone/wp-content/uploads/sites/2/2022/11/1-30-500x500.jpg",
      "https://klbtheme.com/partdo/phone/wp-content/uploads/sites/2/2022/11/1-30-500x500.jpg",
      "https://klbtheme.com/partdo/phone/wp-content/uploads/sites/2/2022/11/1-30-500x500.jpg",
    ],
    name: "Iphone",
    title: "Iphone 14, M2 2022, 8GB | 256GB, New",
    rating: "",
    currentPrice: "1359.00",
    oldPrice: "1584.00",
    discount: "14",
    soldOut: false,
    hot: true,
  },
  {
    image: [
      "https://klbtheme.com/partdo/phone/wp-content/uploads/sites/2/2022/11/1-30-500x500.jpg",
      "https://klbtheme.com/partdo/phone/wp-content/uploads/sites/2/2022/11/1-30-500x500.jpg",
      "https://klbtheme.com/partdo/phone/wp-content/uploads/sites/2/2022/11/1-30-500x500.jpg",
      "https://klbtheme.com/partdo/phone/wp-content/uploads/sites/2/2022/11/1-30-500x500.jpg",
    ],
    name: "iPhone",
    title: "Apple iPhone 15 Pro Max, 512GB, Unlocked",
    rating: "5",
    currentPrice: "1299.00",
    oldPrice: "1399.00",
    discount: "7",
    soldOut: true,
    hot: false,
  },
];

export default function LimitedTimeDeal() {
  return (
    <main className={styles.allDataContainer}>
      <section className={styles.dealAllInfoDataContainer}>
        <div className={styles.limitedDealInfoContainer}>
          <div>
            <p className={styles.dealTopTitle}>ONLY FOR TODAY</p>
            <h3 className={styles.dealTitle}>Deal Of The Day</h3>
            <p className={styles.dealSubTitle}>
              Deal of the Day for deals on consumer electronics. Watch for many
              other great daily offers.
            </p>
          </div>
          <div className={styles.timerContainer}>
            <Timer initialHours={1} />
          </div>
        </div>
        <div className={styles.limitedDealProductInfoContainer}>
          <SimpleSlider dealData={dealData} />
        </div>
      </section>
    </main>
  );
}
