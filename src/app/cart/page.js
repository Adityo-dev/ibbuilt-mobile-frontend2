"use client";
import styles from "./cart.module.css";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// import image
// import emptyCart from "../../assets/images/other/emptyCart.png";
// import components

// import { useCartContext } from "../../components/context/CartContext";
// import TransparentButton from "@/components/buttonGroup/transparentButton";
// import icon
import { RxCross1 } from "react-icons/rx";
// import YouMayBeInterested from "@/components/youMayBeInterested";

const Cart = () => {
  // const { cart, removeCart, setDecrement, setIncrement } = useCartContext();
  const cart = [
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
    <main>
      <section className={styles.cartMainDataContainer}>
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <div className={styles.emptyCartContainer}>
            <Image
              className={styles.emptyCartImage}
              width={400}
              height={400}
              src={emptyCart}
              alt=""
            />
            <p className={styles.emptyTitle}>Your cart is currently empty.</p>
            {/* <TransparentButton btnName={"Return to shop"} btnUrl={"/shop"} /> */}
          </div>
        ) : (
          <>
            <section className={styles.cartAllDataInfoDetailsContainer}>
              <div className={styles.cartDataContainer}>
                <div className={styles.productCategoryContainer}>
                  <div className={styles.productNameContainer}>
                    <p className={styles.productName}>Product</p>
                  </div>
                  <div className={styles.productPriceAndStorkContainer}>
                    <p className={styles.productPrice}>Price</p>
                    <p className={styles.productPrice}>Quantity</p>
                    <p className={styles.productStorkStatus}>Subtotal</p>
                  </div>
                </div>

                {cart.map((item, ind) => (
                  <div key={ind}>
                    <div className={styles.cartProductDataContainer}>
                      <div className={styles.cartProductImageAndNameContainer}>
                        <Image
                          className={styles.cartProductImage}
                          src={item?.image}
                          width={400}
                          height={400}
                          alt="Product"
                        />
                        <p className={styles.cartProductName}>{item?.title}</p>
                      </div>

                      <div
                        className={styles.cartProductPriceBtnAmdStockContainer}
                      >
                        <div className={styles.productSmContainer}>
                          <p className={styles.productPriceSm}>Price</p>
                          <p className={styles.productQuantitySm}>Quantity</p>
                          <p className={styles.productSubTotalSm}>Subtotal</p>
                        </div>
                        <div className={styles.cartPriceAndInStockContainer}>
                          <p className={styles.currentPrice}>
                            ${item?.currentPrice}
                          </p>

                          <div className={styles.cartCounterSmContainer}>
                            <div className={styles.cartCounterContainer}>
                              <button
                                className={styles.cartCounterBtn}
                                onClick={() => setDecrement(item?.id)}
                              >
                                -
                              </button>
                              <span className={styles.cartCounterCounter}>
                                {/* {item.counter} */}1
                              </span>
                              <butt
                                className={styles.cartCounterBtn}
                                onClick={() => setIncrement(item?.id)}
                              >
                                +
                              </butt>
                            </div>
                          </div>

                          <p className={styles.cartInStockRed}>
                            ${(item.counter * item?.price).toFixed(2)}
                          </p>

                          <p>
                            <RxCross1
                              className={styles.crossIcon}
                              onClick={() => removeCart(item?.id)}
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.checkoutAllDataContainer}>
                <h3 className={styles.cartTotals}>Cart totals</h3>
                <p className={styles.subTotalAndAllPrice}>
                  <span className={styles.shoppingTotal}>subtotal</span>
                  <span className={styles.shoppingTotalPrice}>$71500</span>
                </p>
                <span className={styles.checkoutHrLine} />
                <div className={styles.shoppingInfoContainer}>
                  <p className={styles.shoppingTotal}>Shopping</p>
                  <p className={styles.shoppingCategory}>
                    <span>free Shopping</span>
                    <span>local pickup: $3.00</span>
                    <span>flat rate: $10.00</span>
                  </p>
                </div>
                <span className={styles.checkoutHrLine} />
                <div className={styles.allTotalPriceContainer}>
                  <p className={styles.shoppingTotal}>total</p>
                  <p className={styles.shoppingTotalPrice}>$71500</p>
                </div>
                {/* <TransparentButton
                  className={styles.btn}
                  btnName={"Proceed to checkout"}
                  btnUrl={"/checkout"}
                /> */}
              </div>
            </section>

            <div className={styles.youMayBeInterestedContainer}>
              {/* <YouMayBeInterested /> */}
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default Cart;
