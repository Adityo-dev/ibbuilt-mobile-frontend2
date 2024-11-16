import styles from "./button.module.css";
// import react icon
import { FaCartShopping } from "react-icons/fa6";

function AddToCart({ bgColor }) {
  return (
    <div>
      <button
        style={{ backgroundColor: `${bgColor}` }}
        className={styles.button}
      >
        <span>Add to cart </span>
        <span>
          <FaCartShopping className={styles.goArrowRightIcon} />
        </span>
      </button>
    </div>
  );
}

export default AddToCart;
