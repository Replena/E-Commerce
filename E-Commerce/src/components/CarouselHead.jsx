import ProductCard from "./CarouselProductCard";
import data from "../data/data.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const CarouselHead = () => {
  return (
    <div className="relative">
      {" "}
      <Carousel>
        <CarouselPrevious />
        <CarouselContent>
          {data.carousel.map((item, index) => (
            <CarouselItem key={index}>
              <ProductCard
                title={item.title}
                subtitle={item.subtitle}
                imageUrl={item.imageUrl}
                season={item.season}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselHead;
