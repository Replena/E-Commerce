import React from "react";
import Product from "./Product.jsx";
import { useSelector } from "react-redux";

const Products = ({ itemsPerPage, currentPage, showColors = true }) => {
  const { productList, fetchState } = useSelector((state) => state.product);

  if (fetchState === "loading") {
    return <div className="flex justify-center p-8">Loading...</div>;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleProducts = productList.slice(startIndex, endIndex);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {visibleProducts.map((product) => (
        <Product key={product.id} product={{ ...product, showColors }} />
      ))}
    </div>
  );
};

export default Products;
