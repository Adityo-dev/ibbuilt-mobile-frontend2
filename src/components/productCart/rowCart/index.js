import styles from "./rowCart.module.css";
import Image from "next/image";
import Link from "next/link";
// icon
import { PiShoppingCartLight } from "react-icons/pi";
import { RiInbox2Line } from "react-icons/ri";

function RowCart({ cartData }) {
  return (
    <div className={styles.rowCartDataContainer}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.cartImage}
          src={cartData.images[1].url}
          width={400}
          height={400}
          alt=""
        />
      </div>
      <div className={styles.cartInfoContainer}>
        <Link href={`/shop/${cartData?.name}`} className={styles.description}>
          {cartData?.name}
        </Link>
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
          <p
            className={`${styles.stockContainer} ${
              cartData?.stock === false ? styles.stockOut : null
            }`}
          >
            <span>
              <RiInbox2Line />
            </span>
            <span>{cartData?.stock === true ? "In Stock" : "Out Stock"}</span>
          </p>
        </div>
        <button className={styles.addToCartBtn}>Add to cart</button>
      </div>
    </div>
  );
}

export default RowCart;
