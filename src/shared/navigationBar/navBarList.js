import Link from "next/link";
import styles from "./navigationBar.module.css";

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

export default NavBarList;
