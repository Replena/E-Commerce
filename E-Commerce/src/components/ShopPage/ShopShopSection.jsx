import React from "react";
import ShopShopCards from "./ShopShopCards";
const ShopShopSection = ({ data }) => {
  return (
    <div className="py-12 bg-lightbg">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex justify-between lg:px-64 lg:pb-5 ">
          <h2 className="">{data.shopCard.title}</h2>
          <p>{data.shopCard.where}</p>
        </div>
        <ShopShopCards data={data} />
      </div>
    </div>
  );
};

export default ShopShopSection;
