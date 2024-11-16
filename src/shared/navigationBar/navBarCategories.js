import styles from "./navigationBar.module.css";
import Link from "next/link";
import Image from "next/image";
// icon
import { TfiAngleRight } from "react-icons/tfi";
const NavBarCategories = ({ navData, brandCategories }) => {
  return (
    <div>
      {brandCategories?.map((categoryData, index) => (
        <div key={index} className={styles.navCategoryListHrLineAndCategory}>
          <Link href="">
            <div className={styles.navCategoryListItemAllDataContainer}>
              <p className={styles.navCategoryListItemContainer}>
                <span className={styles.categoryDataIcon}>
                  <Image
                    src={categoryData?.logo}
                    width={40}
                    height={40}
                    alt=""
                  />
                </span>
                <span className={styles.categoryDataName}>
                  {categoryData?.title}
                </span>
              </p>
              {categoryData?.product_name.length > 0 && (
                <TfiAngleRight className={styles.angleRightIcon} />
              )}
            </div>
          </Link>

          {categoryData?.product_name.length > 0 && (
            <div className={styles.subCategoriesAllDataContainer}>
              <div className={styles.subCategoriesAllInfoContainer}>
                {categoryData?.product_name?.map((subCategoryData, index) => (
                  <div
                    key={index}
                    className={styles.subCategoriesListContainer}
                  >
                    <Link
                      href={""}
                      className={styles.subCategoriesList}
                      key={index}
                    >
                      {subCategoryData.product_name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavBarCategories;
