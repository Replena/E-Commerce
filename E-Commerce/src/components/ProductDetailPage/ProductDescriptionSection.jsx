import React from "react";
import ProductDescription from "./ProductDescription";

function ProductDescriptionSection() {
  return (
    <div className="bg-text-light">
      <div className="container mb-32">
        <div className="flex justify-center gap-7 my-6">
          <h2>Description</h2>

          <h2>Additional Information</h2>

          <h2>Reviews</h2>
        </div>
        <hr className="w-full" />
        <ProductDescription />
      </div>
    </div>
  );
}

export default ProductDescriptionSection;
