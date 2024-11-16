import styles from "./navigationBar.module.css";
import Link from "next/link";
// icon
import { FcElectricity } from "react-icons/fc";

const TopNavSection = ({ navData }) => (
  <section className={styles.topNavAllDataContainer}>
    <div className={styles.topNavDataContainer}>
      {navData.map((item, ind) => (
        <div className={styles.topNavInfoContainer} key={ind}>
          <div className={styles.topNavInfoContainer}>
            <select
              className={styles.languageSelectOption}
              name="languages"
              id="languages"
            >
              {item?.topNavData?.language?.map((lang, index) => (
                <option
                  className={styles.languageOption}
                  key={index}
                  value={lang}
                >
                  {lang}
                </option>
              ))}
            </select>
            <p className={styles.topNavFreeShipping}>
              Free Shipping On All Orders Over $100
            </p>
          </div>
          <div className={styles.topNavInfoContainer}>
            <FcElectricity className={styles.electricIcon} />
            {item?.topNavData?.navCategoryList?.map((categoryList, index) => (
              <Link
                key={index}
                href={categoryList?.pathName}
                className={`${
                  index === 0
                    ? styles.categoryListHighlightText
                    : styles.categoryListText
                }`}
              >
                {categoryList?.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TopNavSection;
