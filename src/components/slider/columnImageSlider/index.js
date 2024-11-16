"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ColumnImageSlider({ images }) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: false,
    arrows: false,
  };

  var settings2 = {
    dots: false,
    fade: true,
    waitForAnimate: true,
    lazyLoad: "progressive",
    arrows: false,
  };

  return (
    <main className="relative w-full lg:max-w-[600px] h-full">
      <Slider
        className="relative border border-custom-border bg-custom-white rounded-lg w-full  h-full"
        asNavFor={nav2}
        ref={(slider) => (sliderRef1 = slider)}
        {...settings2}
      >
        {images.map((image, ind) => (
          <div key={ind}>
            <Image
              className="w-[75%] mx-auto h-full  object-cover bg-center bg-no-repeat"
              src={image?.url}
              width={400}
              height={400}
              alt=""
            />
          </div>
        ))}
      </Slider>
      {/* Second Slider */}
      <Slider
        asNavFor={nav1}
        ref={(slider) => (sliderRef2 = slider)}
        swipeToSlide={true}
        focusOnSelect={true}
        {...settings}
        className="relative md:max-w-[600px] max-h-[200px] mx-auto border border-custom-border mt-3 md:mt-6 rounded-lg p-2"
      >
        {images.map((image, ind) => (
          <div className="ml-2 pr-5 max-w-[150px] max-h-[150px]" key={ind}>
            <Image
              className="w-full h-full bg-custom-white rounded-lg object-cover cursor-pointer"
              src={image?.url}
              width={400}
              height={400}
              alt=""
            />
          </div>
        ))}
      </Slider>
    </main>
  );
}

export default ColumnImageSlider;
