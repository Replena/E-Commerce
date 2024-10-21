import React, { useState } from "react";
import CarouselHead from "../CarouselHead";
import data from "../../data/data.json";

function ProductProductCard() {
  const { carousel3 } = data.productPage;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full md:w-1/2 order-0 md:order-1">
      <CarouselHead
        carouselData={carousel3}
        activeIndex={activeIndex}
        showDetails={false}
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
        {carousel3.map((item, index) => (
          <img
            key={index}
            src={item.imageUrl}
            alt={`Thumbnail ${index}`}
            className={`cursor-pointer h-24 ${
              activeIndex === index ? "border-4 border-primary" : ""
            }`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductProductCard;
