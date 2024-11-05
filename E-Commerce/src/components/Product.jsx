import React from "react";

const Product = ({ product }) => {
  const discount = product.price * 0.8;
  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div className="bg-text-light text-center flex flex-col min-h-[400px]">
      <img src={product.images[0]?.url} alt={product.name} className="w-full" />
      <div className="p-4 flex-grow flex flex-col justify-between">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-secondary line-clamp-3">{product.description}</p>
        <div className="flex justify-center items-center">
          <p className="text-2xl font-bold p-1 text-muted line-through">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-2xl font-bold p-1 text-secondary">
            ${discount.toFixed(2)}
          </p>
        </div>
        {product.showColors && (
          <div className="flex justify-center items-center space-x-1 mt-2">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: getRandomColor() }}
              ></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
