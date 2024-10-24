import React from "react";

function ShopCards({ imageUrl, title }) {
  return (
    <div className="relative flex flex-col justify-center bg-text-light shadow-lg overflow-hidden h-full">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 left-3  md:left-6 lg:left-8">
        <div className="bg-text-light px-2 sm:px-3md:px-5 py-1 sm:py-1.5 md:py-2">
          <h3 className=" lg:text-lg font-bold text-text-default whitespace-nowrap">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ShopCards;
