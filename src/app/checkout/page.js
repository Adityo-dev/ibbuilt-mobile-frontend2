"use client";
import Image from "next/image";

//
import { Radio, RadioGroup } from "@headlessui/react";
import { CiCircleCheck } from "react-icons/ci";
import { FcApproval } from "react-icons/fc";

import { useState } from "react";
// icon
import { FaMoneyBillWave, FaRegBookmark, FaCreditCard } from "react-icons/fa";
//
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
//
const PaymentMethodData = [
  { icon: <FaMoneyBillWave />, title: "Cash On Delivery" },
  { icon: <FaCreditCard />, title: "Online Payment" },
  { icon: <FaRegBookmark />, title: "Book Product" },
];

const PaymentMethod = [
  {
    name: "Bkash",
    image: "https://imgur.com/am7CtDx.jpg",
  },
  {
    name: "nagad",
    image: "https://imgur.com/N9nVcyw.jpg",
  },
  {
    name: "visa",
    image: "https://imgur.com/olV0Fv8.jpg",
  },
  {
    name: "upay",
    image: "https://imgur.com/ekqVDkU.jpg",
  },
  {
    name: "master cartr",
    image: "https://imgur.com/fInJMWk.jpg",
  },
];

const deliveryMethod = [
  {
    icon: "",
    name: "Shop Pickup",
  },
  {
    icon: "",
    name: "Sundarban Courier Service",
  },
  {
    icon: "",
    name: "Pathao Courier service",
  },
];

const Button = ({ btnName }) => {
  return (
    <button className="w-full h-full border border-custom-border text-sm bg-custom-accent text-custom-white font-medium capitalize rounded-sm px-6 py-4 cursor-pointer">
      {btnName}
    </button>
  );
};

function Checkout() {
  const [selected, setSelected] = useState(deliveryMethod[0]);
  return (
    <section className="relative max-w-[1700px] w-full my-5 mx-auto p-2.5 md:p-4 grid xl:grid-cols-3 gap-4 text-custom-secondary">
      {/* Customer Information */}
      <div className="bg-custom-white shadow-md w-full h-full p-4 md:p-5 grid-col-[1/2] rounded-lg">
        <h2 className="text-lg sm:text-xl font-semibold mb-4 capitalize flex place-items-center gap-2  border-b border-custom-border pb-3">
          <span
            className={
              "w-7 sm:w-8 h-7 sm:h-8 border-2 font-semibold text-custom-primary border-custom-primary rounded-full flex justify-center items-center"
            }
          >
            1
          </span>
          <span>Customer Information</span>
        </h2>
        <div className="relative w-full flex flex-col gap-4 sm:gap-5 overflow-hidden text-base font-medium">
          <div className="relative w-full flex flex-col gap-2 overflow-hidden">
            <label for="fname">First name</label>
            <input
              className="w-full py-4 px-5 rounded border border-custom-border focus:border-accent transition-all duration-300 text-sm outline-none"
              type="text"
              id="fname"
              name="fname"
              placeholder="First name"
            />
          </div>
          <div className="relative w-full flex flex-col gap-2 overflow-hidden">
            <label for="lname">Phone Number</label>
            <input
              className="w-full py-4 px-5 rounded border border-custom-border focus:border-accent transition-all duration-300 text-sm outline-none"
              type="text"
              id="lname"
              name="lname"
              placeholder="Phone Number"
            />
          </div>
          <div className="relative w-full flex flex-col gap-2 overflow-hidden">
            <label for="lemail">Email address</label>
            <input
              className="w-full py-4 px-5 rounded border border-custom-border focus:border-accent transition-all duration-300 text-sm outline-none"
              type="email"
              id="lemail"
              name="lemail"
              placeholder="Email address"
            />
          </div>
          <div className="flex flex-col sm:flex-row place-items-center gap-4 sm:gap-5">
            <div className="relative w-full flex flex-col gap-2 overflow-hidden">
              <label for="lname">District</label>
              <Select>
                <SelectTrigger className="w-full h-full py-4 px-5 rounded border border-custom-border  transition-all duration-300 text-sm outline-none">
                  <SelectValue placeholder="Select district *" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dhaka">Dhaka</SelectItem>
                  <SelectItem value="gazipur">Gazipur</SelectItem>
                  <SelectItem value="dagra">Bagra</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="relative w-full flex flex-col gap-2 overflow-hidden">
              <label for="lname">Zone</label>
              <Select>
                <SelectTrigger className="w-full h-full py-4 px-5 rounded border border-custom-border  transition-all duration-300 text-sm outline-none">
                  <SelectValue placeholder="Select zone *" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="uttora">Uttora</SelectItem>
                  <SelectItem value="badda">Badda</SelectItem>
                  <SelectItem value="adabar">Adabar</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="relative w-full flex flex-col gap-2 overflow-hidden">
            <label for="lname">Address line</label>
            <input
              className="w-full py-4 px-5 rounded border border-custom-border focus:border-accent transition-all duration-300 text-sm outline-none"
              type="text"
              id="lname"
              name="lname"
              placeholder="Address line*"
            />
          </div>
          <div className="relative w-full flex flex-col gap-2 overflow-hidden">
            <label>Address</label>
            <textarea
              className=" w-full  h-[150px] resize-y py-4 px-5 rounded border border-custom-border  focus:border-accent transition-all duration-300 text-sm outline-none"
              placeholder="Enter Address"
              required
            />
          </div>
        </div>
      </div>
      {/* payment method */}
      <div className="col-start-2 col-end-[-1] flex flex-col gap-5">
        <div className="flex flex-col md:flex-row place-items-center gap-5">
          <div className="bg-white shadow-md w-full h-full p-4 sm:p-5 grid-col-[1/2] rounded-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 capitalize flex place-items-center gap-2 border-b  pb-4">
              <span className="w-7 sm:w-8 h-7 sm:h-8 border-2 font-semibold text-custom-primary  border-custom-primary rounded-full flex justify-center items-center">
                2
              </span>
              <span>Payment Method</span>
            </h2>
            <p>Select A Payment Method</p>
            <div className="flex place-items-center gap-3 justify-between mt-4">
              {PaymentMethodData.map((method, ind) => (
                <div
                  className="w-full h-full flex flex-col gap-2 place-items-center border border-custom-border px-2 py-4 rounded-md text-center"
                  key={ind}
                >
                  <p>{method.icon}</p>
                  <p>{method.title}</p>
                </div>
              ))}
            </div>
            <div className="flex place-items-center gap-3 justify-between mt-2">
              {PaymentMethod.map((method, ind) => (
                <div
                  className="w-full h-full flex flex-col text-center gap-2 place-items-center border border-custom-border py-3 px-2 rounded-lg capitalize"
                  key={ind}
                >
                  <div className="max-w-[50px] max-h-[70px]">
                    <Image
                      className="w-full h-full"
                      src={method.image}
                      width={400}
                      height={400}
                      alt=""
                    />
                  </div>
                  <p>{method.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Method */}
          <div className="bg-white shadow-md w-full h-full p-4 sm:p-5 grid-col-[1/2] rounded-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 capitalize flex place-items-center gap-2 border-b border-custom-border  pb-4">
              <span
                className={
                  "w-7 sm:w-8 h-7 sm:h-8 border-2 font-semibold text-custom-primary  border-custom-primary rounded-full flex justify-center"
                }
              >
                3
              </span>
              <span>Delivery Method</span>
            </h2>
            <p>Select A Delivery Method</p>

            <div className="mx-auto w-full mt-4 sm:mt-5">
              <RadioGroup
                by="name"
                value={selected}
                onChange={setSelected}
                aria-label="Server size"
                className="space-y-2"
              >
                {deliveryMethod.map((method) => (
                  <Radio
                    key={method.name}
                    value={method}
                    className="group relative flex cursor-pointer rounded-lg  py-4 px-5 text-custom-secondary border border-custom-border transition focus:outline-none data-[focus]:outline-1 "
                  >
                    <div className="flex w-full items-center justify-between">
                      <div className="text-sm">
                        <p className="text-custom-secondary">{method.name}</p>
                      </div>
                      <FcApproval className="text-2xl fill-custom-primary opacity-0 transition group-data-[checked]:opacity-100" />
                    </div>
                  </Radio>
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>
        {/* Choose a pickup store */}
        <div className="bg-white shadow-md w-full h-full p-4 sm:p-5 grid-col-[1/2] rounded-lg">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 capitalize flex place-items-center gap-2 border-b border-custom-border  pb-4">
            <span
              className={
                "w-7 sm:w-8 h-7 sm:h-8 border-2 font-semibold text-custom-primary  border-custom-primary rounded-full flex justify-center items-center"
              }
            >
              4
            </span>
            <span>Choose a pickup store</span>
          </h2>
          <div className="relative w-full flex flex-col gap-2 overflow-hidden">
            <Select>
              <SelectTrigger className="w-full h-full py-4 px-5 rounded border border-custom-border  transition-all duration-300 text-sm outline-none">
                <SelectValue placeholder="Select store" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="uttora">Uttora</SelectItem>
                <SelectItem value="badda">Badda</SelectItem>
                <SelectItem value="adabar">Adabar</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Your order */}
        <div
          className={
            "bg-white shadow-md w-full h-full p-4 sm:p-5 grid-col-[1/2] rounded-lg"
          }
        >
          <h2 className="text-lg sm:text-xl font-semibold mb-4 capitalize flex place-items-center gap-2 border-b border-custom-border  pb-4">
            <span
              className={
                "w-7 sm:w-8 h-7 sm:h-8 border-2 font-semibold text-custom-primary  border-custom-primary rounded-full flex justify-center items-center"
              }
            >
              5
            </span>
            <span>Your order</span>
          </h2>
          <div className="flex justify-between place-items-center mb-3">
            <span>
              Asus Vivobook 15 Core i3 13th Gen 8GB 512GB 15.6 Laptop X 1
            </span>
            <span className="font-medium">৳55,999</span>
          </div>

          <div className="relative w-full flex flex-col  overflow-hidden mb-4">
            <input
              className="w-full py-4 px-5 rounded border border-custom-border focus:border-accent transition-all duration-300 text-sm outline-none"
              type="email"
              id="lemail"
              name="lemail"
              placeholder="Apply coupon"
            />
            <div className="absolute right-0">
              <Button btnName={"Apply coupon"} />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="border-b border-custom-border pb-3">
              <p className="flex justify-between place-items-center text-md">
                <span>Items Price:</span>
                <span className="font-medium">৳ 55,999</span>
              </p>
              <p className="flex justify-between place-items-center text-md">
                <span>Delivery Charge:</span>
                <span className="font-medium">৳ 0</span>
              </p>
            </div>
            <p className="flex justify-between place-items-center text-md border-b border-custom-border pb-3">
              <span>Coupon Discount :</span>
              <span className="font-medium">৳ 0</span>
            </p>
            <div className="border-b border-custom-border pb-3">
              <p className="flex justify-between place-items-center text-md">
                <span>Subtotal:</span>
                <span className="font-medium">৳ 55,999</span>
              </p>
              <p className="flex justify-between place-items-center text-md">
                <span>Gateway Charge(GC)</span>
                <span className="font-medium">৳ 1,400</span>
              </p>
            </div>
            <p className="flex justify-between place-items-center text-md">
              <span>Total:</span>
              <span className="font-medium">৳ 57,399</span>
            </p>
          </div>
          <div className="flex gap-2 text-sm mt-3">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="leading-none peer-disabled:cursor-not-allowed "
            >
              I accept the policies and terms outlined, including Delivery,
              Points, Returns, Refunds, Cancellation, Privacy . I agree to
              comply before placing my order.
            </label>
          </div>

          <button className="w-full bg-accent mt-5 bg-custom-accent border border-custom-border text-custom-white tracking-wider px-[43px] py-4 rounded-md capitalize whitespace-nowrap">
            Confirm Order
          </button>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
