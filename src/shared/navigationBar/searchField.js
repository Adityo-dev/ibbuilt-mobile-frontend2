import { useState } from "react";
import Link from "next/link";
import styles from "./navigationBar.module.css";
import { IoSearchOutline } from "react-icons/io5";

const SearchField = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className={styles.searchFieldContainer}>
      <input
        className={styles.searchField}
        type="search"
        id="search"
        name="search"
        placeholder="Search for products"
        value={query}
        onChange={handleInputChange}
      />

      <Link href={`/shop?search=${query}`} passHref>
        <button className={styles.searchButton}>
          <span className={styles.searchButtonSearchText}>search</span>
          <IoSearchOutline className={styles.searchButtonSearchIcon} />
        </button>
      </Link>
    </div>
  );
};

export default SearchField;
