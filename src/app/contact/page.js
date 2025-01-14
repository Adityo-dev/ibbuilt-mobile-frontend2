import styles from "./contact.module.css";

const Contact = () => {
  return (
    <section className={styles.allDataContainer}>
      <div className={styles.infoContainer}>
        <h2 className={styles.title}>Do you have some questions?</h2>
        <p className={styles.subTitle}>
          We are at your disposal 7 days a week!
        </p>

        <p className={styles.location}>
          <span>5 Rastar Mor , Kushtia</span>
          <span>Bangladesh</span>
        </p>

        <div className={styles.contactInfo}>
          <p className={styles.gmailId}>kabbomobileshop@gmail.com</p>
          <p className={styles.phoneNum}>+8801234567890</p>
        </div>
      </div>

      <div className={styles.inputFieldContainer}>
        <div className={styles.nameAadEmailContainer}>
          <input
            className={styles.inputField}
            type="text"
            placeholder="Name *"
          />
          <input
            className={styles.inputField}
            type="text"
            placeholder="Email *"
          />
        </div>
        <div>
          <input
            className={styles.inputField}
            type="text"
            placeholder="Subject *"
          />

          <textarea
            className={styles.textareaField}
            name="textarea"
            rows="4"
            cols="50"
            placeholder="message"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
