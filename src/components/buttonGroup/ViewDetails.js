import styles from "./button.module.css";
//
import { HiArrowLongRight } from "react-icons/hi2";

function ViewDetails() {
  return (
    <div>
      <button className={styles.button}>
        <span>View Details</span>
        <span className={styles.goArrowRightIcon}>
          <HiArrowLongRight />
        </span>
      </button>
    </div>
  );
}

export default ViewDetails;
