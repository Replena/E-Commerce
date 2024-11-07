import React from "react";

const ShopShopCard = ({ image, title, items }) => {
  return (
    <div className="relative flex flex-col justify-center items-center text-center  h-full group">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
      />
      <div className="absolute  left-0 right-0  ">
        <h3 className="text-lg font-medium text-text-light">{title}</h3>
        <p className="text-sm text-text-light">{items} items</p>
      </div>
    </div>
  );
};

export default ShopShopCard;
