import React from "react";
import ProductDescription from "./ProductDescription";
import data from "../../data/data.json";

function ProductDescriptionSection() {
  const sectionData =
    data.productPage.productDescription.productDescriptionSection;

  return (
    <div className="bg-text-light">
      <div className="container mb-32">
        <div className="flex justify-center gap-7 my-6">
          {sectionData.titles.map((title, index) => (
            <h2 key={index}>{title}</h2>
          ))}
        </div>
        <hr className="w-full hidden lg:flex" />
        <ProductDescription />
      </div>
    </div>
  );
}

export default ProductDescriptionSection;
