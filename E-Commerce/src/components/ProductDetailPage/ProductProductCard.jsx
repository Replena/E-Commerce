import React from "react";
import CarouselHead from "../CarouselHead";

function ProductProductCard({ carouselData, showDetails, onItemChange }) {
  const [api, setApi] = React.useState(null);

  const handleThumbnailClick = (index) => {
    if (api) {
      api.scrollTo(index);
    }
    onItemChange(index);
  };

  return (
    <div className="w-full md:w-1/2 order-0 md:order-1 h-full">
      <div className="flex-grow">
        <CarouselHead
          carouselData={carouselData}
          showDetails={showDetails}
          onItemChange={onItemChange}
          setApi={setApi}
        />
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mt-4">
        {carouselData.map((item, index) => (
          <img
            key={index}
            src={item.imageUrl}
            alt={`${index}`}
            onClick={() => handleThumbnailClick(index)}
            className="cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}

export default ProductProductCard;
