import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel.jsx";
import ProductCard from "./HomePage/CarouselProductCard.jsx";

const CarouselHead = ({ carouselData, showDetails = true }) => {
  return (
    <div className="relative">
      <Carousel>
        <CarouselPrevious />
        <CarouselContent>
          {carouselData.map((item, index) => (
            <CarouselItem key={index}>
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
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselHead;
