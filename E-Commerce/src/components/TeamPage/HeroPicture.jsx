import React from "react";
import data from "../../data/data.json";
const HeroPicture = () => {
  const images = data.team.heroPicture;
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-auto">
        {images.map((image) => (
          <div
            key={image.id}
            className={`relative overflow-hidden group ${
              image.id === 1 ? "col-span-2 row-span-2" : ""
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroPicture;
