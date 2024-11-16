import SingleProductDetails from "@/components/singleProductDetails";

const DynamicProductDetails = ({ params }) => {
  return (
    <div>
      <SingleProductDetails searchId={params.dynamicSingleProductDetails} />
    </div>
  );
};

export default DynamicProductDetails;
