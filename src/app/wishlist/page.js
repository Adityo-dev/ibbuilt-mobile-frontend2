"use client";
import styles from "./wishlist.module.css";
import Link from "next/link";
import Image from "next/image";
// import { useWishlist } from "@/components/context/WishlistContext";
// import { useCartContext } from "@/components/context/CartContext";
import { GoCheck } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";

const Wishlist = () => {
  // const { wishlistItems, removeFromWishlist } = useWishlist();
  // add to shopping Cart
  // const counter = 1;
  // const { addToCart } = useCartContext();

  const wishlistItems = [
    {
      image:
        "https://klbtheme.com/partdo/phone/wp-content/uploads/sites/2/2022/11/1-30-500x500.jpg",
      title:
        "The iPhone 13 features improved battery life and powerful A15 chip.",
      currentPrice: "699.99",
      oldPrice: "799.99",
      soldOut: false,
    },
  ];

  return (
    <section className={styles.wishlistAllInfoAllDataContainer}>
      <section className={styles.wishlistAllInfoDataSectionContainer}>
        <div className={styles.wishlistAllDataContainer}>
          <h1 className={styles.myWishlistText}>My Wishlist</h1>

          <div className={styles.productCategoryContainer}>
            <p className={styles.productName}>Product Name</p>
            <p className={styles.productPriceAndStorkContainer}>
              <span className={styles.productPrice}>Unit Price</span>
              <span className={styles.productStorkStatus}>Stock Status</span>
            </p>
          </div>
        </div>
        {wishlistItems.length === 0 ? (
          <p className={styles.wishlistEmpty}>
            No products added to the wishlist
          </p>
        ) : (
          wishlistItems.map((item) => (
            <div key={item.id}>
              <div>
                <div className={styles.wishlistProductDataContainer}>
                  <div className={styles.wishlistProductImageAndNameContainer}>
                    <Image
                      className={styles.wishlistProductImage}
                      src={item?.image}
                      width={400}
                      height={400}
                      alt="Product"
                    />
                    <div>
                      <p className={styles.wishlistProductName}>
                        {item?.title}
                      </p>

                      <p className={styles.priceSmContainer}>
                        {item.currentPrice && (
                          <span className={styles.currentPrice}>
                            ${item?.currentPrice}
                          </span>
                        )}
                        {item.oldPrice && (
                          <del className={styles.oldPrice}>
                            $<span>{item?.oldPrice}</span>
                          </del>
                        )}
                      </p>
                    </div>
                  </div>

                  <div
                    className={styles.wishlistProductPriceBtnAmdStockContainer}
                  >
                    <div className={styles.wishlistPriceAndInStockContainer}>
                      <p className={styles.priceContainer}>
                        {item.currentPrice && (
                          <span className={styles.currentPrice}>
                            ${item?.currentPrice}
                          </span>
                        )}
                        {item.oldPrice && (
                          <del className={styles.oldPrice}>
                            $<span>{item?.oldPrice}</span>
                          </del>
                        )}
                      </p>
                      <p
                        className={
                          item.soldOut
                            ? styles.wishlistInStockRed
                            : styles.wishlistInStock
                        }
                      >
                        <span>
                          {item.soldOut === true ? (
                            <RxCross1 className={styles.wishlistCheckIcon} />
                          ) : (
                            <GoCheck className={styles.wishlistCheckIcon} />
                          )}
                        </span>
                        {item.soldOut === true ? "out Stock" : "In Stock"}
                      </p>
                    </div>

                    <div className={styles.wishlistBtnAndCross}>
                      {item?.soldOut === false ? (
                        <button
                          onClick={() => {
                            addToCart(item.name, item.title, counter, item);
                            removeFromWishlist(item.title);
                          }}
                          className={styles.wishlistAddToCartBtn}
                        >
                          Add to Cart
                        </button>
                      ) : (
                        ""
                      )}
                      <RxCross1
                        className={styles.crossIcon}
                        // onClick={() => removeFromWishlist(item.title)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </section>
    </section>
  );
};

export default Wishlist;
