import data from "../data/data.json";
import Products from "./Products.jsx";
function ProductCardSection() {
  return (
    <div>
      <div className="my-20 text-center">
        <p>{data.productCard.muted}</p>
        <p>{data.productCard.title}</p>
        <p>{data.productCard.subtitle}</p>
      </div>
      <div className="px-8 lg:pl-60 lg:pr-60 lg:pb-60">
        <Products />
      </div>
    </div>
  );
}

export default ProductCardSection;
