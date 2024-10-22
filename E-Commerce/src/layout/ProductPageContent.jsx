import React from "react";
import ProductProductCardSection from "../components/ProductDetailPage/ProductProductCardSection.jsx";
import ProductDescriptionSection from "../components/ProductDetailPage/ProductDescriptionSection.jsx";
import data from "../data/data.json";
import BestSeller from "@/components/ProductDetailPage/BestSeller.jsx";
import ShopClients from "@/components/ShopPage/ShopClients.jsx";
function ProductPageContent() {
  return (
    <div>
      <ProductProductCardSection
        carouselData={data.productPage.carousel3}
        showDetails={false}
      />
      <ProductDescriptionSection />
      <BestSeller />
      <ShopClients />
    </div>
  );
}

export default ProductPageContent;
