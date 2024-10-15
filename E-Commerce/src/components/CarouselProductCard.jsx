import { Button } from "./ui/button";
const ProductCard = ({ title, subtitle, imageUrl, season }) => {
  return (
    <div className="relative flex w-full h-screen flex-col  justify-center text-center bg-white  shadow-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />

      <div className="absolute  flex flex-col  justify-center text-white md:mx-40 md:mt-16 p-4">
        <p className="mb-4 ">{season}</p>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="mb-4">{subtitle}</p>
        <Button variant="success" size="lg">
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
