import { Button } from "../ui/button.jsx";
const FluidContainerText = ({ season, title, subtitle, button, button2 }) => {
  return (
    <div className="w-full md:w-1/2 flex flex-col justify-center p-8 order-1 md:order-2">
      <p className="uppercase text-muted mb-2">{season}</p>
      <h1 className="text-4xl font-bold text-text-default mb-4">{title}</h1>
      <p className="text-text-secondary mb-6">{subtitle}</p>
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
