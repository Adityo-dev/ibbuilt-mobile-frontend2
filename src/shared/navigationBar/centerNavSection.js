import styles from "./navigationBar.module.css";
import Link from "next/link";
import Image from "next/image";
// logo
import logo from "../../assets/kabbo mobile shop.png";
// logo
import SearchField from "./searchField";
import { FiMenu } from "react-icons/fi";

const CenterNavSection = ({
  navData,
  toggleSearchDrawer,
  toggleMenuDrawer,
  cart,
  wishlistItems,
}) => (
  <section>
    <div className={styles.centerNavAllDataContainer}>
      <div className={styles.centerMenuBarContainer}>
        <FiMenu
          className={styles.centerMenuBarIcon}
          onClick={toggleMenuDrawer(true)}
        />
      </div>
      <div>
        <Link href="/">
          <Image
            className={styles.gadgetGalleryLogo}
            width={250}
            height={250}
            src={logo}
            alt=""
          />
        </Link>
      </div>

      <div className={styles.centerSearchFieldContainer}>
        <SearchField />
      </div>

      <div>
        {navData.map((data, ind) => (
          <div className={styles.centerNavRightDataContainer} key={ind}>
            {data?.centerNavData?.map((item, index) => (
              <Link
                className={`${styles.centerNavRightDataInfoContainer} ${
                  index === 4 ? styles.centerNavRightDataIconTopNone : null
                } ${index === 1 ? styles.centerNavRightDataIconTopNone : null}`}
                href={item?.info?.url}
                key={index}
              >
                <p
                  className={`${styles.centerNavRightDataIcon} ${
                    index === 3
                      ? styles.centerNavRightDataIcon
                      : styles.mobileDesignIconNone
                  } `}
                >
                  <span>{item?.info?.icon}</span>
                </p>
                <p className={styles.centerNavRightDataText}>
                  {item?.info?.title}
                </p>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CenterNavSection;
