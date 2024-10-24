import FluidContainerImg from "./FluidContainerImg.jsx";
import FluidContainerText from "./FluidContainerText.jsx";
import data from "../../data/data.json";

const FluidContainerSection = () => {
  const { season, title, subtitle, button1, button2, imageUrl } =
    data.fluidContainer;

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <FluidContainerImg imageUrl={imageUrl} title={title} />
      <FluidContainerText
        season={season}
        title={title}
        subtitle={subtitle}
        button={button1}
        button2={button2}
      />
    </div>
  );
};

export default FluidContainerSection;
