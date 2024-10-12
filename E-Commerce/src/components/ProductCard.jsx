import React from "react";

const ProductCard = ({ title, subtitle, imageUrl }) => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center p-6 bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-auto" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-4">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="mb-4">{subtitle}</p>
        <button className="px-4 py-2  ">Shop Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
