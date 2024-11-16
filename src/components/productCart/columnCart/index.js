import styles from "./columnCart.module.css";
import Link from "next/link";
import Image from "next/image";
// import components

// icon
import { PiShoppingCartLight } from "react-icons/pi";
import ProductCartButton from "@/components/productCartButton";

function ColumnCart({ cartData }) {
  return (
    <div className={`${styles.cartDataContainer} ${styles.cartSection}`}>
      <Link
        className={styles.cartImageContainer}
        href={`/shop/${cartData?.name}`}
      >
        <Image
          className={styles.cartImage}
          src={cartData.images[1]?.url}
          width={400}
          height={400}
          alt=""
        />
      </Link>

      <div className={styles.cartButtonContainer}>
        <ProductCartButton />
      </div>

      <div className={styles.cartInfoContainer}>
        <Link href={`/shop/${cartData?.name}`} className={styles.description}>
          {cartData?.description}
        </Link>
        <div className={styles.priceAndAddToCartContainer}>
          <p className={styles.price}>
            <span className={styles.currentPrice}>
              ৳{cartData.currentPrice}
            </span>
            {cartData?.oldPrice && (
              <del className={styles.oldPrice}>৳{cartData.oldPrice}</del>
            )}
          </p>
          <PiShoppingCartLight className={styles.addToCartBtn} />
        </div>
      </div>
    </div>
  );
}

export default ColumnCart;
