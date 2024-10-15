import React from "react";

function ShopCards({ imageUrl, title }) {
  return (
    <div className="relative flex flex-col justify-center text-center bg-white shadow-lg overflow-hidden h-full rounded-lg">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      <div className="absolute bottom-5 left-5 right-50 px-5 py-3 bg-white">
        <h3 className="text-lg font-bold text-black">{title}</h3>
      </div>
    </div>
  );
}

export default ShopCards;
