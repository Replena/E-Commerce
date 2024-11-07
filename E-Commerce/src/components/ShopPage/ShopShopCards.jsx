import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ShopShopCard from "./ShopShopCard";

const ShopShopCards = () => {
  const [topRatedProducts, setTopRatedProducts] = useState([]);
  const products = useSelector((state) => state.product.productList);

  useEffect(() => {
    if (products.length > 0) {
      const topRated = [...products]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5);
      setTopRatedProducts(topRated);
    }
  }, [products]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
      {topRatedProducts.map((product) => (
        <ShopShopCard
          key={product.id}
          image={product.images[0].url}
          title={product.name}
          items={product.sell_count}
        />
      ))}
    </div>
  );
};

export default ShopShopCards;
