import React from "react";
import data from "../../data/data.json";
import { Button } from "../ui/button.jsx";
const AboutTestimonials = () => {
  const test = data.about.testimonials;

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-primary text-white">
      <div className="lg:w-3/5 text-center lg:text-left px-32">
        <h3 className="text-sm font-semibold uppercase mb-2">{test.title}</h3>
        <h1 className="text-3xl lg:text-5xl font-bold mb-4">{test.subtitle}</h1>
        <p className="text-sm lg:text-base mb-6">{test.description}</p>
        <Button variant="outlineSecondary" size="lg">
          {test.buttonText}
        </Button>
      </div>

      <div className="lg:w-2/5 lg:mt-0 flex justify-center">
        <img src={test.imageURL} alt="Hero Section" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default AboutTestimonials;
