import Image from "next/image";
import Link from "next/link";

const productsBanner3Data = [
  {
    tag: "new product",
    title: "Release Date & Price",
    subTitle: "today's super offer",
    image: "https://imgur.com/5VjQZx1.jpg",
    url: "",
    backgroundColor: "#EFDBDD",
  },
  {
    tag: "big sale",
    title: "biggest discount",
    subTitle: "up to 75% off",
    image: "https://imgur.com/r3k2AH3.jpg",
    url: "",
    backgroundColor: "#E6EBEF",
  },
  {
    tag: "weekend deal",
    title: "the great sale",
    subTitle: "gift card $150",
    image: "https://imgur.com/7ZxpUxX.jpg",
    url: "",
    backgroundColor: "#EEEADF",
  },
  {
    tag: "month deal",
    title: "spring clean sale",
    subTitle: "up to 45% off",
    image: "https://imgur.com/DUuEtv5.jpg",
    url: "",
    backgroundColor: "#E8E5EE",
  },
];

const ProductBanner2 = () => {
  return (
    <div className="max-w-[1700px] w-full mx-auto grid grid-cols-1 sm:grid-cols-4 gap-5 items-center mt-5  px-6">
      {productsBanner3Data.map((data, ind) => (
        <Link
          href={data?.url}
          className="overflow-hidden w-full h-full flex flex-col justify-between gap-5 rounded-lg bg-custom-border text-custom-secondary"
          style={{ backgroundColor: `${data?.backgroundColor}` }}
          key={ind}
        >
          <div className="p-6 pb-1">
            <p className="bg-custom-primary inline-block text-custom-white text-sm px-4 py-[2px] uppercase rounded-lg">
              {data?.tag}
            </p>
            <h2 className="text-2xl xl:text-3xl font-semibold capitalize mt-3  mb-2">
              {data?.title}
            </h2>
            <p className="text-base uppercase">{data?.subTitle}</p>
          </div>

          <div className="max-h-[270px]">
            <Image
              className="w-full h-full object-cover mx-auto -mb-2"
              src={data?.image}
              width={400}
              height={400}
              alt=""
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductBanner2;
