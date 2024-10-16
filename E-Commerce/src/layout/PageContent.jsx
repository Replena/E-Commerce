import BlogSection from "../components/BlogSection";
import FluidContainerSection from "../components/FluidContainerSection";
import ProductCardSection from "../components/ProductCardSection";
import ShopCardSection from "../components/ShopCardSection";
import CarouselHead from "../components/CarouselHead.jsx";
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
