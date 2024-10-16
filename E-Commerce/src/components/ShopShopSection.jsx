import React from "react";
import ShopShopCards from "./ShopShopCards";

const ShopShopSection = ({ title, data }) => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="px-8 lg:pl-60 lg:pr-60 lg:pb-16 ">{title}</h2>
        <ShopShopCards data={data} />
      </div>
    </div>
  );
};

export default ShopShopSection;
