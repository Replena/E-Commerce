import React, { useState } from "react";
import ProductProductText from "./ProductProductText";
import ProductProductCard from "./ProductProductCard";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "../ui/breadcrumb.jsx";
import data from "../../data/data.json";

function ProductProductCardSection({ carouselData, showDetails }) {
  const { breadcrumb } = data.productPage;
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const handleItemChange = (index) => {
    console.log("Item Change Triggered");
    console.log("Selected Item Index:", index);
    setSelectedItemIndex(index);
  };

  return (
    <div className="bg-lightGray">
      <div className="container">
        <div className="flex justify-center lg:justify-start py-5">
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumb.map((crumb, index) => (
                <BreadcrumbItem key={index}>
                  <BreadcrumbLink
                    href={index === 0 ? "/" : `/${crumb.toLowerCase()}`}
                    className={`font-bold ${
                      index === breadcrumb.length - 1
                        ? "text-muted"
                        : "text-text-default"
                    }`}
                  >
                    {crumb}
                  </BreadcrumbLink>
                  {index < breadcrumb.length - 1 && (
                    <BreadcrumbSeparator className="text-muted" />
                  )}
                </BreadcrumbItem>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="flex flex-col md:flex-row h-screen gap-8 items-stretch">
          <ProductProductCard
            carouselData={carouselData}
            showDetails={showDetails}
            onItemChange={handleItemChange}
          />
          <ProductProductText product={carouselData[selectedItemIndex]} />
        </div>
      </div>
    </div>
  );
}

export default ProductProductCardSection;
