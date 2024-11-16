import styles from "./productCategory.module.css";
// import components
import CategorySlider from "../slider/categorySlider";

async function ProductCategory() {
  const response = await fetch("https://ecomdash-ten.vercel.app/api/category");
  const data = await response.json();

  return (
    <section className={styles.categorySliderMainContainer}>
      <CategorySlider categoryData={data?.categories} />
    </section>
  );
}

export default ProductCategory;
