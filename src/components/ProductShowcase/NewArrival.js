// import components
import { AllProductData } from "../../../utils/product";
import ProductShowcase from ".";

function NewArrival() {
  return (
    <section>
      <ProductShowcase
        productData={AllProductData}
        sectionName={"See whats new"}
      />
    </section>
  );
}

export default NewArrival;
