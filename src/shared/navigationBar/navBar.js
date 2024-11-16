"use client";
import styles from "./navigationBar.module.css";
// mui
import * as React from "react";

// import react icon
import { LuShoppingCart } from "react-icons/lu";
import { TfiHeart } from "react-icons/tfi";
import { IoSearchOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
// components
import TopNavSection from "./topNavSection";
import CenterNavSection from "./centerNavSection";
import BottomNavSection from "./bottomBavSection";
import MobileDesign from "./mobileDesignNavBar";

// import components
// import { useCartContext } from "@/components/context/CartContext";
// import { useWishlist } from "@/components/context/WishlistContext";

const navData = [
  {
    topNavData: {
      language: ["english", "bangla"],
      navCategoryList: [
        { name: "track order", pathName: "/track-order" },
        { name: "pre order", pathName: "/pre-order" },
        { name: "about", pathName: "/about" },
        { name: "contact", pathName: "/contact" },
        { name: "blog", pathName: "/blog" },
      ],
    },
    centerNavData: [
      {
        info: {
          icon: <FiUser />,
          title: "my account",
          url: "/account",
        },
      },
      {
        info: {
          icon: <IoSearchOutline />,
          title: "search",
          url: "/dd",
        },
      },
      {
        info: {
          icon: <TfiHeart />,
          title: "wishlist",
          url: "/wishlist",
        },
      },
      {
        info: { icon: <LuShoppingCart />, title: "my cart", url: "/cart" },
      },
      {
        info: { icon: <IoHomeOutline />, title: "home", url: "/" },
      },
    ],

    bottomNavData: {
      navListItems: [
        {
          categoryName: "Home",
          url: "/",
        },

        {
          categoryName: "shop",
          url: "shop",
        },
        {
          categoryName: "Brand",
          url: "smartphone",
        },
        {
          categoryName: "Exchange Service",
          url: "headphones",
        },
        {
          categoryName: "Accessories",
          url: "camera",
        },
      ],
    },
  },
];

const NavigationBar = ({ brandCategories }) => {
  // const { cart } = useCartContext();
  // const { wishlistItems } = useWishlist();
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  //
  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const toggleSearchDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const toggleMenuDrawer = (newOpen1) => () => {
    setOpen1(newOpen1);
  };

  return (
    <>
      <main className={styles.navigationBarAllDataContainer}>
        <TopNavSection navData={navData} />
        <CenterNavSection
          navData={navData}
          toggleMenuDrawer={toggleMenuDrawer}
          // cart={cart}
          // wishlistItems={wishlistItems}
        />
        <BottomNavSection
          navData={navData}
          // wishlistItems={wishlistItems}
          brandCategories={brandCategories}
        />

        <MobileDesign
          brandCategories={brandCategories}
          navData={navData}
          toggleSearchDrawer={toggleSearchDrawer}
          toggleMenuDrawer={toggleMenuDrawer}
          open={open}
          open1={open1}
          tabHandleChange={handleChange}
          tabValue={tabValue}
        />
      </main>
    </>
  );
};

export default NavigationBar;
