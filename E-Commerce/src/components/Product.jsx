import React from "react";

const Product = ({ product }) => {
  return (
    <div className="bg-white text-center">
      <img src={product.imageUrl} alt={product.title} className="w-full" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{product.title}</h3>
        <p>{product.department}</p>
        <div className="flex justify-center items-center">
          <p className="text-2xl font-bold p-1 text-gray-400 line-through">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-2xl font-bold p-1 text-green-600">
            ${product.cutPrice.toFixed(2)}
          </p>
        </div>
        <div className="flex justify-center items-center space-x-1">
          {product.colors.map((color, index) => (
            <div
              key={index}
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Product;
