import Image from "next/image";

const bannerData = [
  {
    subTitle: "Weekend Discount",
    title: "1 month use phone ",
    description: "Don't miss the last opportunity.",
    image: "https://imgur.com/D46hqUo.jpg",
    backgroundColor: "#EFDBDD",
  },
  {
    subTitle: "Weekend Discount",
    title: "New sumsang s23",
    description: "Don't miss the last opportunity.",
    image: "https://imgur.com/r5aKXPy.jpg",
    backgroundColor: "#E6EBEF",
  },
];

function ProductBanner3() {
  return (
    <div className="relative w-full md:max-h-[350px]  md:h-full flex flex-col md:flex-row gap-5">
      {bannerData.map((bannerData, ind) => (
        <div
          className="relative max-h-[300px] w-full md:max-h-none flex justify-between border border-custom-border rounded-lg bg-custom-border text-custom-secondary overflow-hidden"
          style={{ backgroundColor: `${bannerData?.backgroundColor}` }}
          key={ind}
        >
          <div className="absolute flex flex-col gap-2 p-4 sm:p-6 z-20">
            <p className="font-medium text-sm lg:text-base uppercase tracking-wide">
              {bannerData?.subTitle}
            </p>
            <h3 className="text-2xl xl:text-3xl capitalize font-bold">
              {bannerData?.title}
            </h3>
            <p className="font-medium text-sm lg:text-base tracking-wide">
              {bannerData?.description}
            </p>
          </div>
          <div className="relative w-[60%] h-full m-auto mr-0">
            <Image
              className="w-full h-full -mr-3 -mb-3"
              src={bannerData?.image}
              width={400}
              height={400}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductBanner3;
