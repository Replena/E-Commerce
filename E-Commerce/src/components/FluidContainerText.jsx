import { Button } from "./ui/button.jsx";
const FluidContainerText = ({ season, title, subtitle, button, button2 }) => {
  return (
    <div className="w-full md:w-1/2 flex flex-col justify-center p-8 order-1 md:order-2">
      <p className="uppercase text-gray-500 mb-2">{season}</p>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
      <p className="text-gray-600 mb-6">{subtitle}</p>
      <div>
        <Button variant="success" className="mr-2">
          {button}
        </Button>
        <Button variant="outlineSuccess">{button2}</Button>
      </div>
    </div>
  );
};

export default FluidContainerText;
