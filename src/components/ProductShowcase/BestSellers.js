// import components
import { AllProductData } from "../../../utils/product";
import ProductShowcase from ".";
function BestSellers() {
  return (
    <section>
      <ProductShowcase
        productData={AllProductData}
        sectionName={"Best Sellers"}
      />
    </section>
  );
}

export default BestSellers;
