import React, { useState } from "react";
import ProductCard from "./ProductCard";

const Carousel = () => {
  const products = [
    {
      title: "New Collection",
      subtitle:
        "We know how large objects will act, but things on a small scale.",
      imageUrl: "../../public/shop-hero-1-product-slide-1.png",
    },
    {
      title: "Summer 2020",
      subtitle: "Discover our new summer collection.",
      imageUrl: "../../public/carousel-inner.png",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {products.map((product, index) => (
          <div key={index} className="min-w-full">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
      >
        &#9664;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
      >
        &#9654;
      </button>
    </div>
  );
};

export default Carousel;
