import ProductCard from "./CarouselProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel.jsx";

const CarouselHead = ({ carouselData }) => {
  return (
    <div className="relative">
      <Carousel>
        <CarouselPrevious />
        <CarouselContent>
          {carouselData.map((item, index) => (
            <CarouselItem key={index}>
              <ProductCard
                title={item.title}
                subtitle={item.subtitle}
                imageUrl={item.imageUrl}
                season={item.season}
                price={item.price}
                button={item.button}
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
