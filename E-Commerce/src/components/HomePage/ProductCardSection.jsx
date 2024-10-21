import data from "../../data/data.json";
import Products from "../Products.jsx";
function ProductCardSection() {
  const itemsPerPage = 8;
  const currentPage = 1;
  return (
    <div className="container">
      <div className="my-20 text-center text-text-secondary">
        <p className="text-xl">{data.productCard.muted}</p>
        <p className="text-text-default text-2xl">{data.productCard.title}</p>
        <p>{data.productCard.subtitle}</p>
      </div>
      <div className="">
        <Products itemsPerPage={itemsPerPage} currentPage={currentPage} />
      </div>
    </div>
  );
}

export default ProductCardSection;
