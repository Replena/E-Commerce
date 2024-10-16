const FluidContainerImg = ({ imageUrl, title }) => {
  return (
    <div className="w-1/2">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
    </div>
  );
};

export default FluidContainerImg;
