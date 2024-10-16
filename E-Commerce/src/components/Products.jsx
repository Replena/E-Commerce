import React from "react";
import Product from "./Product";
import data from "../data/data.json";
const Products = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {data.product.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
