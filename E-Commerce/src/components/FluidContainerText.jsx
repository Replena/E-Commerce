const TextSection = ({ season, title, subtitle, button, button2 }) => {
  return (
    <div className="w-1/2 flex flex-col justify-center p-8">
      <p className="uppercase text-gray-500 mb-2">{season}</p>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
      <p className="text-gray-600 mb-6">{subtitle}</p>
      <div>
        <button className="bg-green-500 text-white py-2 px-6 mr-4 rounded hover:bg-green-600">
          {button}
        </button>
        <button className="bg-transparent border-2 border-green-500 text-green-500 py-2 px-6 rounded hover:bg-green-500 hover:text-white">
          {button2}
        </button>
      </div>
    </div>
  );
};

export default TextSection;
