const FluidContainerImg = ({ imageUrl, title }) => {
  return (
    <div className="w-full md:w-1/2 order-2 md:order-1">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
    </div>
  );
};

export default FluidContainerImg;
