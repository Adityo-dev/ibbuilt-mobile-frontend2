import styles from "./newsletter.module.css";
import Image from "next/image";
// IMPORT IMAGE

const Newsletter = () => {
  return (
    <div className={styles.newsletterAllDataContainer}>
      <Image
        className={styles.newsletterBgImage}
        src={"https://imgur.com/0G526Cd.jpg"}
        width={400}
        height={400}
        alt=""
      />
      <div className={styles.infoContainer}>
        <div className={styles.newsletterDataContainer}>
          <div>
            <h2 className={styles.newsletterInfoText}>
              Sign Up For Newsletter & Get 20% Off
            </h2>
            <p></p>
          </div>
          <div className={styles.inputFieldContainer}>
            <input
              className={styles.emailField}
              type="email"
              id="email"
              name="email"
              placeholder="Your e-mail address"
            />
            <button className={styles.subscribeBtn}>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
