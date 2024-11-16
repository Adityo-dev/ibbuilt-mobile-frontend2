import ColumnImageSlider from "../slider/columnImageSlider";
import ProductsDetails from "./productDetails";
import ProductSpecifications from "./productDetails/productSpecifications";

async function SingleProductDetails({ searchId }) {
  const response = await fetch(
    `https://ecomdash-ten.vercel.app/api/stock/product/6730e873755131cb4feaf847`
  );
  const data = await response.json();

  return (
    <main className="max-w-[1700px] w-full mx-auto px-2.5 md:px-4 mt-5">
      <section className="w-full flex flex-col lg:flex-row gap-5">
        <div className="w-full lg:max-w-[420px] xl:max-w-[600px]">
          {data.product.map((data, ind) => (
            <div key={ind}>
              <ColumnImageSlider images={data.product.image} />
            </div>
          ))}
        </div>
        <div className="w-full">
          <ProductsDetails product={data.product} />
        </div>
      </section>
      <section>
        <ProductSpecifications specifications={data.product} />
      </section>
    </main>
  );
}

export default SingleProductDetails;
