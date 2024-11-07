import React from "react";
import ShopShopCards from "./ShopShopCards";
const ShopShopSection = ({ data }) => {
  return (
    <div className="py-12 bg-lightbg">
      <div className="container">
        <div className="lg:flex justify-between pb-5 ">
          <h2 className="">{data.shopCard.title}</h2>
          <p>{data.shopCard.where}</p>
        </div>
        <ShopShopCards data={data} />
      </div>
    </div>
  );
};

export default ShopShopSection;
