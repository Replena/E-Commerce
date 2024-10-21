import BlogSection from "../components/HomePage/BlogSection.jsx";
import FluidContainerSection from "../components/HomePage/FluidContainerSection";
import ProductCardSection from "../components/HomePage/ProductCardSection";
import ShopCardSection from "../components/HomePage/ShopCardSection";
import CarouselHead from "../components/HomePage/CarouselHead.jsx";
import data from "../data/data.json";

function PageContent() {
  return (
    <div>
      <CarouselHead carouselData={data.carousel} />
      <ShopCardSection />
      <ProductCardSection />
      <CarouselHead carouselData={data.carousel2} />
      <FluidContainerSection />
      <BlogSection />
    </div>
  );
}

export default PageContent;
