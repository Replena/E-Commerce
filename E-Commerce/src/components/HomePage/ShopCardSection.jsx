import React from "react";
import data from "../../data/data.json";
import Masonry from "./Masonry.jsx";
function ShopCardSection() {
  return (
    <div>
      <div className="my-20 text-center">
        <h2 className=" font-bold text-text-default">
          {data.shopCardSection.title}
        </h2>
        <p className=" font-bold text-text-secondary">
          {data.shopCardSection.subtitle}
        </p>
      </div>
      <div className="">
        <Masonry />
      </div>
    </div>
  );
}

export default ShopCardSection;
