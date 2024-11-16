"use client";
import Link from "next/link";
import Image from "next/image";
// import components

// import icon
import { GiShoppingCart } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { MdOutlineSearch } from "react-icons/md";
import { MdCompareArrows } from "react-icons/md";
import { VscChromeClose } from "react-icons/vsc";

// import mui tooltip
import * as React from "react";
import Tooltip from "@mui/material/Tooltip";
// import modal
import Modal from "@mui/material/Modal";
// import rating
import Rating from "@mui/material/Rating";

export default function ProductCartButton({ cartData }) {
  const cartBtnData = [
    { icon: <CiHeart />, name: "wishlist" },
    { icon: <MdOutlineSearch />, name: "Quick view" },
    { icon: <MdCompareArrows />, name: "compare" },
  ];

  return (
    <div>
      {cartBtnData.map((data, ind) => (
        <div
          key={ind}
          className={`${
            data.name === "wishlist" ? "block" : "hidden xl:block"
          }`}
        >
          <Tooltip title={data?.name} placement="left" arrow>
            <button className="text-sm w-6.5 h-6.5 p-1 bg-custom-white border border-custom-border rounded cursor-pointer hover:bg-custom-border mb-2">
              {data?.icon}
            </button>
          </Tooltip>
        </div>
      ))}

      <>{/* Quick View Modal */}</>
    </div>
  );
}
