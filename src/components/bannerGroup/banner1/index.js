import styles from "./banner1.module.css";
import Image from "next/image";
import Link from "next/link";
// import components
// import DynamicButton from "@/components/buttonGroup/normalButton";
// import image
// import banner3 from "../../../assets/images/banner/banner-3.png";

const productBanner2Data = [
  {
    headerTitle: "EXCLUSIVE IPHONE",
    title: "Discounts 20% On All \n IPHONE 16 PRO",
    url: "",
    image: "https://imgur.com/5VjQZx1.jpg",
    backgroundColor: "#DBD9CC",
  },
];

const ProductBanner1 = () => {
  return (
    <div className={styles.banner2AllDataContainer}>
      {productBanner2Data.map((bannerData, ind) => (
        <div
          key={ind}
          style={{ backgroundColor: `${bannerData.backgroundColor}` }}
          className={styles.banner2DataContainer}
        >
          <div className={styles.banner2InfoContainer}>
            <p className={styles.headerTitle}>{bannerData?.headerTitle}</p>
            <h1 className={styles.title}>{bannerData?.title}</h1>
            {/* <DynamicButton btnName={"Shop now"} btnUrl={bannerData?.url} /> */}
          </div>

          <div className={styles.imageContainer}>
            <Image
              className={styles.bannerImage}
              src={bannerData?.image}
              width={400}
              height={400}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductBanner1;
