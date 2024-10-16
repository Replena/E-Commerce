const ImageSection = ({ imageUrl }) => {
  return (
    <div className="w-1/2">
      <img
        src={imageUrl}
        alt="Fashion"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ImageSection;
