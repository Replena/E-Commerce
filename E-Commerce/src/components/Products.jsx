import React from "react";
import Product from "./Product";
import data from "../data/data.json";

const Products = ({ itemsPerPage, currentPage }) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleProducts = data.product.slice(startIndex, endIndex);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8 lg:pl-60 lg:pr-60 ">
      {visibleProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
