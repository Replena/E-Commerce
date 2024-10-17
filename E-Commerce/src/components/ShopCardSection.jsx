import React from "react";
import data from "../data/data.json";
import Masonry from "./Masonry";
function ShopCardSection() {
  return (
    <div>
      <div className="my-20 text-center">
        <h2 className=" font-bold ">{data.shopCardSection.title}</h2>
        <p className=" font-bold">{data.shopCardSection.subtitle}</p>
      </div>
      <div className="">
        <Masonry />
      </div>
    </div>
  );
}

export default ShopCardSection;
