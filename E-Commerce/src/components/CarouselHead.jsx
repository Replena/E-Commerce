import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel.jsx";
import ProductCard from "./HomePage/CarouselProductCard.jsx";

const CarouselHead = ({
  carouselData,
  showDetails = true,
  onItemChange,
  setApi,
  fullWidth = false,
  containerClassName = "",
  imageClassName = "",
}) => {
  const [carouselApi, setCarouselApi] = useState(null);

  useEffect(() => {
    if (!carouselApi) return;

    const handleSelect = () => {
      const selectedIndex = carouselApi.selectedScrollSnap();
      onItemChange?.(selectedIndex);
    };

    carouselApi.on("select", handleSelect);

    return () => {
      carouselApi.off("select", handleSelect);
    };
  }, [carouselApi, onItemChange]);

  useEffect(() => {
    if (carouselApi && setApi) {
      setApi(carouselApi);
    }
  }, [carouselApi, setApi]);

  const containerClasses = fullWidth
    ? ` ${containerClassName}`
    : `relative w-full max-w-4xl mx-auto ${containerClassName}`;

  const defaultImageClass = fullWidth
    ? ""
    : "w-full h-full object-cover rounded-lg";
  const finalImageClass = `${defaultImageClass} ${imageClassName}`;

  return (
    <div className={containerClasses}>
      <Carousel
        setApi={setCarouselApi}
        className=""
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="w-full h-full">
          {carouselData.map((item, index) => (
            <CarouselItem key={index} className="w-full h-full">
              {showDetails ? (
                <ProductCard
                  title={item.title}
                  subtitle={item.subtitle}
                  imageUrl={item.imageUrl}
                  season={item.season}
                  price={item.price}
                  button={item.button}
                  showDetails={showDetails}
                />
              ) : (
                <div
                  className={
                    fullWidth ? "w-full h-full" : "aspect-square w-full"
                  }
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className={finalImageClass}
                  />
                </div>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselHead;
