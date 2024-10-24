import React from "react";
import Product from "./Product.jsx";
import data from "../data/data.json";

const Products = ({ itemsPerPage, currentPage, showColors = false }) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleProducts = data.product.slice(startIndex, endIndex);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {visibleProducts.map((product) => (
        <Product key={product.id} product={{ ...product, showColors }} />
      ))}
    </div>
  );
};

export default Products;
