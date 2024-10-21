import React from "react";

const ShopShopCard = ({ image, title, items }) => {
  return (
    <div className="relative flex flex-col justify-center text-center bg-white shadow-lg overflow-hidden h-full rounded-lg">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute  left-0 right-0 ">
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-gray-500 text-sm">{items} items</p>
      </div>
    </div>
  );
};

export default ShopShopCard;
