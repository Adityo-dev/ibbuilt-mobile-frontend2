import styles from "./trendingProducts.module.css";
// import react icon
import { HiArrowLongRight } from "react-icons/hi2";
import { AllProductData } from "../../../utils/product";
import RowCart from "../productCart/rowCart";

function TrendingProducts() {
  return (
    <section className={styles.trendingProductsMainContainer}>
      <div className={styles.trendingProductsAndViewContainer}>
        <h1 className={styles.title}>Trending Products</h1>
        <p className={styles.viewAllBtn}>
          <span> view all</span> <HiArrowLongRight />
        </p>
      </div>

      <div className={styles.trendingProductsProductCartContainer}>
        {AllProductData.slice(0, 6).map((data, ind) => (
          <div key={ind}>
            <RowCart cartData={data} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrendingProducts;
