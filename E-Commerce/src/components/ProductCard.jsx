const ProductCard = ({ title, subtitle, imageUrl, season }) => {
  return (
    <div className="relative flex w-full h-screen flex-col  justify-center text-center bg-white  shadow-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-full" />

      <div className="absolute  flex flex-col  justify-center text-white lg:mx-40 lg:mt-16 p-4">
        <p className="mb-4 ">{season}</p>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="mb-4">{subtitle}</p>
        <button className="px-4 py-2">Shop Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
