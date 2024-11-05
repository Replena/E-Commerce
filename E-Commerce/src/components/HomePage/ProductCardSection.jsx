import { useSelector } from "react-redux";
import Products from "../Products.jsx";

function ProductCardSection() {
  const { total } = useSelector((state) => state.product);
  const itemsPerPage = 8;
  const currentPage = 1;

  return (
    <div className="container">
      <div className="my-20 text-center text-text-secondary">
        <p className="text-xl">Our Products</p>
        <p className="text-text-default text-2xl">Featured Products</p>
        <p>Total Products: {total}</p>
      </div>
      <div className="">
        <Products
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          showColors={true}
        />
      </div>
    </div>
  );
}

export default ProductCardSection;
