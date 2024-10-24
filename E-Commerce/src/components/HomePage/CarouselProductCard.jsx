import { Button } from "../ui/button.jsx";
const ProductCard = ({
  title,
  subtitle,
  imageUrl,
  season,
  price,
  button,
  showDetails,
}) => {
  return (
    <div className="relative flex w-full h-screen flex-col justify-center text-center md:text-start bg-text-light shadow-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />

      {showDetails && (title || subtitle || season || price) && (
        <div className="absolute flex flex-col justify-center text-text-light md:mx-40 md:mt-16 p-4 md:w-96">
          {season && <p>{season}</p>}
          {title && <h2 className="text-5xl font-bold my-8">{title}</h2>}
          {subtitle && <p className="text-2xl mx-8 md:mx-0">{subtitle}</p>}
          <div className="mx-auto md:mx-0 my-8 lg:flex">
            {price && <p className="text-2xl font-bold mr-5">{price}</p>}
            {button && (
              <Button variant="success" size="lg">
                {button}
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
