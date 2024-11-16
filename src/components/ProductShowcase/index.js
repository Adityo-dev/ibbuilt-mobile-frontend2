import styles from "./productShowcase.module.css";
import Link from "next/link";
// import react icon
import { HiArrowLongRight } from "react-icons/hi2";
import ColumnCart from "../productCart/columnCart";

function ProductShowcase({ productData, sectionName }) {
  return (
    <section className={styles.productShowcaseMainContainer}>
      <div className={styles.productShowcaseAndViewContainer}>
        <h1 className={styles.title}>{sectionName}</h1>
        <p className={styles.viewAllBtn}>
          <span>view all</span> <HiArrowLongRight />
        </p>
      </div>

      <div className={styles.productShowcaseProductCartContainer}>
        {productData.slice(0, 12).map((data, ind) => (
          <div key={ind}>
            <ColumnCart cartData={data} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductShowcase;
