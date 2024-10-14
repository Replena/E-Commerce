import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import data from "../data/data.json";

const Carousel = () => {
  const [carouselData, setCarouselData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCarouselData(data.carousel);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {carouselData.length > 0 && (
        <ProductCard
          title={carouselData[currentIndex].title}
          subtitle={carouselData[currentIndex].subtitle}
          imageUrl={carouselData[currentIndex].imageUrl}
          season={carouselData[currentIndex].season}
        />
      )}

      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full p-4"
        onClick={handlePrev}
      >
        ←
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full p-4"
        onClick={handleNext}
      >
        →
      </button>

      <div className="absolute bottom-4 left-0 right-0 justify-center items-center space-x-2 hidden lg:flex">
        {carouselData.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-8 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
