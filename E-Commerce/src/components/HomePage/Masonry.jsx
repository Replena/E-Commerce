import React from "react";
import data from "../../data/data.json";
import ShopCards from "./ShopCard.jsx";

const Masonry = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 grid-rows-6 md:grid-cols-4 md:grid-rows-2 gap-6 lg:gap-11">
        <div className="col-span-1 row-span-2 md:col-span-2 md:row-span-2">
          {data.shopCards[0] && (
            <ShopCards
              imageUrl={data.shopCards[0].imageUrl}
              title={data.shopCards[0].title}
            />
          )}
        </div>

        <div className="col-span-1 row-span-2 md:col-span-1 md:row-span-2 h-full">
          {data.shopCards[1] && (
            <ShopCards
              imageUrl={data.shopCards[1].imageUrl}
              title={data.shopCards[1].title}
            />
          )}
        </div>

        <div className="col-span-1 row-span-1 md:col-span-1 md:row-span-1">
          {data.shopCards[2] && (
            <ShopCards
              imageUrl={data.shopCards[2].imageUrl}
              title={data.shopCards[2].title}
            />
          )}
        </div>

        <div className="col-span-1 row-span-1 md:col-span-1 md:row-span-1">
          {data.shopCards[3] && (
            <ShopCards
              imageUrl={data.shopCards[3].imageUrl}
              title={data.shopCards[3].title}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Masonry;
