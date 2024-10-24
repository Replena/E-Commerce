import BlogSection from "../components/HomePage/BlogSection.jsx";
import FluidContainerSection from "../components/HomePage/FluidContainerSection";
import ProductCardSection from "../components/HomePage/ProductCardSection";
import ShopCardSection from "../components/HomePage/ShopCardSection";
import CarouselHead from "../components/CarouselHead.jsx";
import data from "../data/data.json";

function PageContent() {
  return (
    <div className="flex flex-col w-full">
      <section className="h-full w-full flex-1">
        <CarouselHead
          carouselData={data.carousel}
          showDetails={true}
          fullWidth={true}
          containerClassName="h-full"
          imageClassName="object-cover"
        />
      </section>

      <ShopCardSection />
      <ProductCardSection />

      <section className="h-screen w-full">
        <CarouselHead
          carouselData={data.carousel2}
          showDetails={true}
          fullWidth={true}
          containerClassName="h-full"
          imageClassName="object-cover"
        />
      </section>

      <FluidContainerSection />
      <BlogSection />
    </div>
  );
}

export default PageContent;
