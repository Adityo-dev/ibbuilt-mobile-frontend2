// import icon
import { CiDeliveryTruck } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { PiHeadphonesThin } from "react-icons/pi";
import { PiBriefcaseThin } from "react-icons/pi";
import { BsBoxSeam } from "react-icons/bs";

const ServiceType = () => {
  const serviceData = [
    {
      icon: <CiDeliveryTruck />,
      title: "Free Delivery",
      subTitle: "Free shipping on all order",
    },
    {
      icon: <CiDollar />,
      title: "Returns",
      subTitle: "Back guarantee under 7 days",
    },
    {
      icon: <PiHeadphonesThin />,
      title: "Support 24/7",
      subTitle: "Support online 24 hours a day",
    },
    {
      icon: <PiBriefcaseThin />,
      title: "payments",
      subTitle: "100% payment security",
    },
  ];
  return (
    <section className="w-full mx-auto">
      <div className="relative w-full max-h-[350px] h-full border flex flex-col justify-between border-custom-border rounded-lg border-t-none text-custom-secondary">
        {serviceData.map((service, ind) => (
          <div
            className="flex items-center gap-3 border-t border-custom-border py-5 px-4"
            key={ind}
          >
            <p className="text-3xl">{service.icon}</p>
            <p>
              <span className="uppercase font-semibold">{service.title}</span>
              <br />
              <span className="text-sm text-nowrap capitalize">
                {service.subTitle}
              </span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceType;
