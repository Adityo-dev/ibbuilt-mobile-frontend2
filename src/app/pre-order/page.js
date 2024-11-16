import styles from "./preOrder.module.css";

const PreOrder = () => {
  return (
    <div className={styles.preorderContainer}>
      <h2 className={styles.headerTitle}>প্রি-অর্ডার পলিসি</h2>
      <p className={styles.introText}>
        আপনাদের সকল আগ্রহ এবং ভালোবাসা আমাদের প্রেরণা। এখানে প্রি-অর্ডারের
        মাধ্যমে আপনার প্রয়োজনীয় প্রোডাক্ট নিতে পারবেন।
      </p>

      <div className={styles.policyBox}>
        <h3 className={styles.policyHeader}>
          আসুন প্রি-অর্ডার পলিসি গুলো দেখে নেই:
        </h3>
        <ul typeof="" className={styles.policyList}>
          <li className={styles.policyItem}>
            প্রি-অর্ডার করতে হলে, ফর্ম ফিলআপ করে আমাদের কাছে পাঠান।
          </li>
          <li className={styles.policyItem}>
            আপনাকে ২৪ ঘন্টার মধ্যে একটি কল করা হবে।
          </li>
          <li className={styles.policyItem}>
            প্রি-অর্ডারের জন্য এডভান্স পেমেন্ট ২০%।
          </li>
          <li className={styles.policyItem}>
            প্রোডাক্ট ডেলিভারি সময় প্রায় ৩-৭ কার্যদিবস।
          </li>
          <li className={styles.policyItem}>
            অগ্রিম প্রদান করা অর্থ অ ফেরতযোগ্য।
          </li>
        </ul>
      </div>

      <div className={styles.englishPolicy}>
        <h3 className={styles.policyHeader}>Pre-Order Policy</h3>
        <p className={styles.policyText}>
          At Apple Empire, we now offer the convenience of pre-ordering any
          product. Let’s take a look at the pre-order policies:
        </p>
        <ul className={styles.policyList}>
          <li className={styles.policyItem}>
            To place a pre-order, please fill out our pre-order form.
          </li>
          <li className={styles.policyItem}>
            You will receive a call from us within 24 hours.
          </li>
          <li className={styles.policyItem}>
            A **20% advance payment** is required for all pre-orders.
          </li>
          <li className={styles.policyItem}>
            Your product will be delivered within **3 to 7 working days**.
          </li>
          <li className={styles.policyItem}>
            The advance payment is **non-refundable**, but if we fail to deliver
            the product for any reason, you will receive a refund within 3
            working days.
          </li>
        </ul>
      </div>

      <div className={styles.orderForm}>
        <h3 className={styles.formHeader}>
          Looking For Something Different ??
        </h3>
        <p className={styles.formSubtitle}>
          Put Your Information In The Box...
        </p>
        <form className={styles.form}>
          <label className={styles.label}>Product Information</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter Product Name/URL"
            required
          />

          <label className={styles.label}>Insert Image</label>
          <input className={styles.fileInput} type="file" />

          <label className={styles.label}>Name</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter Name"
            required
          />

          <label className={styles.label}>Phone</label>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter Phone No"
            required
          />

          <label className={styles.label}>Email</label>
          <input
            className={styles.input}
            type="email"
            placeholder="Enter Email Address"
            required
          />

          <label className={styles.label}>Address</label>
          <textarea
            className={styles.textarea}
            placeholder="Enter Address"
            required
          />

          <label className={styles.checkboxLabel}>
            <input className={styles.checkbox} type="checkbox" required />I
            hereby accept the terms and conditions of pre-order and read the
            pre-order terms and conditions carefully.
          </label>

          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PreOrder;
