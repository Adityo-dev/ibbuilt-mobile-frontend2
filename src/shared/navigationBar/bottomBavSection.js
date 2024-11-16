import styles from "./navigationBar.module.css";
import Image from "next/image";
import Link from "next/link";
// icon
import { TfiAngleRight } from "react-icons/tfi";
import { HiArrowsRightLeft } from "react-icons/hi2";
import { LuAlignJustify } from "react-icons/lu";
import { TfiAngleDown } from "react-icons/tfi";

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

const NavBarList = ({ navData }) => {
  return (
    <div>
      {navData.map((bottomNav, ind) => (
        <div key={ind} className={styles.bottomNavListAllDataContainer}>
          {bottomNav?.bottomNavData?.navListItems.map((navListData, index) => (
            <Link key={index} href={navListData?.url}>
              <p>{navListData?.categoryName}</p>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

const NavCategoryRightList = ({ wishlistItems }) => {
  return (
    <div className={styles.navCategoryRightList}>
      <Link className={styles.compareContainer} href="/compare">
        <HiArrowsRightLeft className={styles.bottomNavRightHeartIcon} />
        <span>Compare</span>
      </Link>
      <p className={styles.navCategoryListRightItemHrLine}></p>
      <Link className={styles.offerContainer} href="/offer">
        <div className={styles.offerImageContainer}>
          <Image
            className={styles.offerImage}
            src={"https://imgur.com/t9kpt8j.gif"}
            width={100}
            height={100}
            alt=""
          />
        </div>
        <p className={styles.offerTitleContainer}>
          <span className={styles.offerTitle}>offer</span>
          <span className={styles.latestOffersTitle}>latest offers</span>
        </p>
      </Link>
    </div>
  );
};

const BottomNavSection = ({ navData, wishlistItems, brandCategories }) => (
  <section className={styles.bottomNavHrLine}>
    <div className={styles.bottomNavAllDataContainer}>
      <div className={styles.shopCategoriesALlDataContainer}>
        <div className={styles.shopCategoriesAllTextContainer}>
          <div className={styles.shopCategoriesTextAndIconContainer}>
            <LuAlignJustify className={styles.alignJustifyIcon} />
            <p className={styles.shopCategoriesText}>Brand Categories</p>
          </div>
          <TfiAngleDown className={styles.arrowDownIcon} />
          <div className={styles.shopCategoriesALlDataInfoContainer}>
            <NavBarCategories
              navData={navData}
              brandCategories={brandCategories}
            />
          </div>
        </div>
        <div>
          <NavBarList navData={navData} />
        </div>
      </div>
      <div>
        <NavCategoryRightList wishlistItems={wishlistItems} />
      </div>
    </div>
  </section>
);

export default BottomNavSection;
