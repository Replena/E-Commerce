import React from "react";
import ShopShopCard from "./ShopShopCard";

const ShopShopCards = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
      {data.map((product) => (
        <ShopShopCard
          key={product.id}
          image={product.image}
          title={product.title}
          items={product.items}
        />
      ))}
    </div>
  );
};

export default ShopShopCards;
