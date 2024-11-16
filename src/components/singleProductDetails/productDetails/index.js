"use client";
import { useState } from "react";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoGitCompareSharp } from "react-icons/io5";
import BuyNow from "@/components/buttonGroup/BuyNow";
import AddToCart from "@/components/buttonGroup/AddToCart";

// Reusable styles
const buttonStyles =
  "text-sm sm:text-base border border-custom-accent py-2 px-2 sm:px-4 rounded";
const storageColorsRegionContainerStyles =
  "flex items-center flex-wrap sm:flex-nowrap gap-2 sm:gap-3 ";

const ProductsDetails = ({ product }) => {
  const [count, setCount] = useState(1);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <>
      {product.map((data, ind) => (
        <section className="flex flex-col gap-2 md:gap-4" key={ind}>
          <div className="w-full flex flex-col gap-2 sm:gap-4 border border-custom-border p-4 rounded-lg">
            <div className="flex justify-between flex-col sm:flex-row gap-4">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold mb-2">
                  {data?.product?.product_name}
                </h2>
                <p className="flex gap-2">
                  <span>
                    {selectedRegion ? selectedRegion.region.name : "Global"}
                  </span>
                  |
                  <span>
                    {selectedStorage ? selectedStorage.size : "128"}
                    {selectedStorage ? selectedStorage.unit : "GB"}
                  </span>
                  |
                  <span>
                    {selectedColor ? selectedColor.color_variant : ""}
                  </span>
                </p>
              </div>
              {selectedRegion ? (
                <div className="text-start sm:text-end">
                  <span>Discount Price :</span>
                  <p className="text-xl md:text-2xl font-semibold text-custom-primary flex gap-2">
                    <span>
                      {selectedRegion.region.currency_symbol}
                      {selectedRegion.discount_price}
                    </span>
                    <span>{selectedRegion.region.currency_code}</span>
                  </p>
                  <del className="text-base opacity-70">
                    <span>
                      {selectedRegion.region.currency_symbol}
                      {selectedRegion.price}
                    </span>
                    <span>{selectedRegion.region.currency_code}</span>
                  </del>
                </div>
              ) : (
                <p>Please select a region to see prices.</p>
              )}
            </div>
            <p>{data?.product?.description}</p>
            <div className="flex items-center gap-4 my-2 flex-wrap text-custom-accent font-medium">
              <Link href="#" className={buttonStyles}>
                {data.product.brand_name}
              </Link>
              <Link
                href="#"
                className="text-base border border-custom-accent py-2 px-4 flex items-center gap-2 rounded "
              >
                <FaHeart />
              </Link>
              <Link
                href="#"
                className={`${buttonStyles} flex items-center gap-2`}
              >
                <IoLogoWhatsapp />
                <span>Whatsapp</span>
              </Link>
              <Link
                href="#"
                className={`${buttonStyles} flex items-center gap-2`}
              >
                <IoGitCompareSharp /> <span>Compare</span>
              </Link>
              <Link
                href="#"
                className={`${buttonStyles} flex items-center gap-2`}
              >
                SKU: {data.sku}
              </Link>
            </div>

            <div className="flex items-center gap-2 md:gap-4 flex-wrap">
              <div>
                <span className="font-medium">Status : </span>
                <span className="text-custom-accent font-semibold">
                  {data.status}
                </span>
              </div>
              <div>
                <span className="font-bold">Warranty : </span>
                <span>
                  <span>{data.product.warranty_information.period} </span>
                  <span>{data.product.warranty_information.coverage}</span>
                </span>
              </div>
              <p>
                <span className="font-medium">Regular Price :</span>
                <span className="font-bold"> 190,399 BDT </span>
              </p>
            </div>
          </div>

          {data.variants.map((variant, ind) => (
            <div
              key={ind}
              className="w-full flex flex-col gap-4 border border-custom-border p-4 rounded-lg"
            >
              <div className={storageColorsRegionContainerStyles}>
                <span className="text-lg sm:text-xl font-semibold">
                  Storage :
                </span>
                <div className="flex items-center gap-2 md:gap-4 flex-wrap">
                  <button
                    onClick={() => setSelectedStorage(variant.storage)}
                    className={`${buttonStyles} ${
                      selectedStorage === variant.storage
                        ? `bg-custom-accent text-custom-white`
                        : "text-custom-accent"
                    }`}
                  >
                    {variant.storage.size}
                    {variant.storage.unit}
                  </button>
                </div>
              </div>
              <div className={storageColorsRegionContainerStyles}>
                <span className="text-lg sm:text-xl font-semibold">
                  Colors:
                </span>
                <div className="flex items-center gap-2 md:gap-4 flex-wrap">
                  {data.product.image.map((colors, ind) => (
                    <button
                      className={`${buttonStyles} ${
                        selectedColor === colors
                          ? `bg-custom-accent text-custom-white`
                          : "text-custom-accent"
                      }`}
                      key={ind}
                      onClick={() => setSelectedColor(colors)}
                    >
                      {colors.color_variant}
                    </button>
                  ))}
                </div>
              </div>
              <div className={storageColorsRegionContainerStyles}>
                <span className="text-lg sm:text-xl font-semibold">
                  Region:
                </span>
                <div className="flex items-center gap-2 md:gap-4 flex-wrap">
                  {variant.regional_pricing.map((pricing, ind) => (
                    <button
                      className={`${buttonStyles} ${
                        selectedRegion === pricing
                          ? `bg-custom-accent text-custom-white`
                          : "text-custom-accent"
                      }`}
                      key={ind}
                      onClick={() => setSelectedRegion(pricing)}
                    >
                      {pricing.region.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="w-full flex flex-col gap-4 border border-custom-border p-4 rounded-lg">
            <div className="flex items-center justify-between gap-4">
              <div className="rounded-lg w-full">
                <label className="flex items-center gap-4">
                  <input
                    type="radio"
                    name="radio-2"
                    className="radio border border-black"
                    defaultChecked
                  />
                  <span>
                    <h2 className="text-base font-medium">
                      Cash/Discounted Price
                    </h2>
                    <p className="opacity-70">
                      Price:
                      {selectedRegion
                        ? `${selectedRegion.region.currency_symbol}${selectedRegion.discount_price}`
                        : "N/A"}
                    </p>
                  </span>
                </label>
              </div>
              <div className="rounded-lg w-full">
                <label className="flex items-center gap-4">
                  <input
                    type="radio"
                    name="radio-2"
                    className="radio border border-black"
                  />
                  <span>
                    <h2 className="text-base font-medium">Cash on Delivery</h2>
                    <p className="opacity-70">
                      Price:
                      {selectedRegion
                        ? `${selectedRegion.region.currency_symbol}${selectedRegion.discount_price}`
                        : "N/A"}
                    </p>
                  </span>
                </label>
              </div>
            </div>

            <div className="flex gap-4 justify-between">
              <div className="w-[60%] mx-auto flex items-center px-2 py-4 rounded-md">
                <button
                  onClick={() => setCount(count - 1)}
                  className="bg-custom-accent border-none text-custom-white rounded text-sm px-2 py-1"
                >
                  -
                </button>
                {count}
                <button
                  onClick={() => setCount(count + 1)}
                  className="bg-custom-accent border-none text-custom-white rounded text-sm px-2 py-1"
                >
                  +
                </button>
              </div>
              <div className="flex gap-3">
                <AddToCart />

                <Link href={"/checkout"}>
                  <BuyNow bgColor={"#000"} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default ProductsDetails;
