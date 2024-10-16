import BlogSection from "../components/BlogSection";
import CarouselHead from "../components/CarouselHead";
import FluidContainerSection from "../components/FluidContainerSection";
import ProductCardSection from "../components/ProductCardSection";
import ShopCardSection from "../components/ShopCardSection";
import data from "../data/data.json";

function PageContent() {
  return (
    <div>
      <ShopCardSection />
      <ProductCardSection />
      <CarouselHead carouselData={data.carousel2} />
      <FluidContainerSection />
      <BlogSection />
    </div>
  );
}

export default PageContent;
