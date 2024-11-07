import React from "react";
import Product from "./Product.jsx";
import ListProduct from "./ShopPage/ListProduct.jsx";
import { useDispatch, useSelector } from "react-redux";

const Products = ({ viewMode }) => {
  const { productList, fetchState } = useSelector((state) => state.product);

  if (fetchState === "loading") {
    return <div className="flex justify-center p-8">Loading...</div>;
  }

  return (
    <div
      className={
        viewMode === "grid"
          ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          : ""
      }
    >
      {productList.map((product) =>
        viewMode === "grid" ? (
          <Product
            key={product.id}
            product={{ ...product, showColors: true }}
          />
        ) : (
          <ListProduct key={product.id} product={product} />
        )
      )}
    </div>
  );
};

export default Products;
