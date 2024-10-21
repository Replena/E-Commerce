import React from "react";
import ProductProductText from "./ProductProductText";
import ProductProductCard from "./ProductProductCard";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "../ui/breadcrumb.jsx";
function ProductProductCardSection({ carouselData, showDetails }) {
  return (
    <div className="bg-lightGray pb-5 ">
      <div className="container">
        <div className="py-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/"
                  className="font-bold text-text-default"
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-muted" />
              <BreadcrumbItem>
                <BreadcrumbLink href="/shop" className="font-bold text-muted">
                  Shop
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex flex-col md:flex-row h-screen gap-8">
          <ProductProductCard
            carouselData={carouselData}
            showDetails={showDetails}
          />
          <ProductProductText product={carouselData[0]} />
        </div>
      </div>
    </div>
  );
}

export default ProductProductCardSection;
