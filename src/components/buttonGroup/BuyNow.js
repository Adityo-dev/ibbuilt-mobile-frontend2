import styles from "./button.module.css";
// import react icon
import { FaCcAmazonPay } from "react-icons/fa6";

function BuyNow({ bgColor }) {
  return (
    <div>
      <button
        style={{ backgroundColor: `${bgColor}` }}
        className={styles.button}
      >
        <span> buy Now </span>
        <span className={styles.goArrowRightIcon}>
          <FaCcAmazonPay />
        </span>
      </button>
    </div>
  );
}

export default BuyNow;
