import Link from "next/link";
import Image from "next/image";

// logo
import logo from "../../assets/kabbo mobile shop.png";
// Import React icons
import { BiLogoFacebook } from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io";
import { RiLinkedinLine } from "react-icons/ri";
import { FaUpwork } from "react-icons/fa6";
import { PiInstagramLogoLight } from "react-icons/pi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Footer() {
  const footerData = [
    {
      name: "Customer Service",
      items: [
        { itemsName: "Help Center", utl: "/" },
        { itemsName: "My account", utl: "/" },
        { itemsName: "Track Products", utl: "/" },
        { itemsName: "My Orders", utl: "/" },
        { itemsName: "Your Wishlist", utl: "/" },
        { itemsName: "Return Policy", utl: "/" },
      ],
    },
    {
      name: "Store Information",
      items: [
        { itemsName: "Check Order", utl: "/" },
        { itemsName: "Delivery & Pickup", utl: "/" },
        { itemsName: "Returns", utl: "/" },
        { itemsName: "Exchanges", utl: "/" },
        { itemsName: "Developers", utl: "/" },
        { itemsName: "Gift Cards", utl: "/" },
      ],
    },
    {
      name: "Store Information",
      items: [
        { itemsName: "Check Order", utl: "/" },
        { itemsName: "Delivery & Pickup", utl: "/" },
        { itemsName: "Returns", utl: "/" },
        { itemsName: "Exchanges", utl: "/" },
        { itemsName: "Developers", utl: "/" },
        { itemsName: "Gift Cards", utl: "/" },
      ],
    },
  ];

  const footerData2 = [
    { name: "Privacy Policy", url: "" },
    { name: "Order Tracking", url: "" },
    { name: "Terms and Conditions", url: "" },
    { name: "Refund and Returns Policy", url: "" },
  ];

  return (
    <section className="relative w-full h-full bg-custom-secondary text-custom-white pt-20 pb-28 md:pb-14 mt-12">
      <section className="max-w-[1700px] mx-auto px-2.5 md:px-6 flex flex-col gap-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 xl:gap-36">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 xl:gap-20 items-start">
            <div className="flex flex-col gap-5 text-nowrap">
              <div className="w-44 h-full">
                <Image className="w-full h-full" src={logo} alt="" />
              </div>
              <h3 className="text-xl font-bold capitalize">
                declives mobile shop
              </h3>
              <p className="text-sm text-wrap opacity-70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-custom-primary">info@example.com</p>
            </div>
            <p className="w-[1px] h-[160px] bg-custom-border opacity-70 hidden" />
            <div className="flex flex-col gap-5 text-nowrap">
              <h5 className="text-xl"> Need Help?</h5>
              <h4 className="text-xl">(+880) 1234 5678 90</h4>
              <p className="flex flex-col gap-2">
                <span>Monday – Friday: 9:00 - 20:00</span>
                <span>Saturady: 11:00 – 15:00</span>
              </p>
              <p className="text-custom-primary"> support@example.com</p>
            </div>
          </div>
          <div className="flex items-start md:items-center flex-col sm:flex-row justify-between gap-7 text-nowrap">
            {footerData.map((data, ind) => (
              <div key={ind}>
                <p className="mb-6">{data.name}</p>
                <div className="flex items-start flex-col gap-3">
                  {data?.items.map((data, ind) => (
                    <Link
                      href={data?.utl}
                      className="text-sm capitalize opacity-70 hover:underline"
                      key={ind}
                    >
                      {data.itemsName}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full sm:h-12 flex flex-col sm:flex-row items-center justify-center py-2 sm:p-0  gap-5 border-t border-b border-custom-border text-sm overflow-hidden">
          <p>-5% for all order in this week Shop now</p>
          <p className="w-full sm:w-[1px] sm:h-12 border border-custom-border opacity-70" />
          <p>Free delivery for all orders over $200</p>
        </div>

        <div className="flex sm:items-center flex-col sm:flex-row justify-between gap-4">
          <div className="flex flex-col gap-5">
            <div className="flex items-center flex-wrap  gap-2 sm:gap-5">
              {footerData2.map((data, ind) => (
                <Link
                  className="text-xs sm:text-sm font-medium text-nowrap hover:underline"
                  key={ind}
                  href={data.url}
                >
                  {data.name}
                </Link>
              ))}
            </div>
            <p className="text-sm opacity-70">
              © 2024 declives mobile shop. All rights reserved.
            </p>

            <div>
              <p className="text-sm font-semibold">Download App on Mobile</p>
            </div>
          </div>
          <div>
            <p>Payment Image</p>
          </div>
        </div>
      </section>
    </section>
  );
}
