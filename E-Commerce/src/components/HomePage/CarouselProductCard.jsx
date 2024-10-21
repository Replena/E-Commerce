import { Button } from "../ui/button.jsx";
const ProductCard = ({ title, subtitle, imageUrl, season, price, button }) => {
  return (
    <div className="relative flex w-full h-screen flex-col  justify-center text-center md:text-start  bg-text-light  shadow-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />

      <div className="absolute flex flex-col justify-center text-text-light md:mx-40 md:mt-16 p-4 md:w-96">
        <p className="">{season}</p>
        <h2 className="text-5xl font-bold my-8">{title}</h2>
        <p className="text-2xl mx-8 md:mx-0 ">{subtitle}</p>
        <div className="mx-auto md:mx-0 my-8 lg:flex">
          {price && <p className="text-2xl font-bold mb-5">{price}</p>}

          <Button variant="success" size="lg">
            {button}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;