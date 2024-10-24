import { Button } from "../ui/button";
import data from "../../data/data.json";
const AboutHeader = () => {
  const about = data.about.aboutHeader;

  return (
    <div className="container mx-auto py-16">
      <div className="flex flex-col lg:flex-row items-center justify-between ">
        <div className="flex-1 space-y-6">
          <h5 className="text-sm md:text-base text-[#252B42] font-bold">
            {about.companySection}
          </h5>

          <h1 className=" text-4xl md:text-6xl text-[#252B42] font-bold md:mt-8">
            {about.title}
          </h1>

          <p className="text-lg text-gray-600 max-w-lg">{about.description}</p>

          <Button variant="default">{about.buttonText}</Button>
        </div>

        <div className="flex-1 relative">
          <img
            src={about.image}
            alt={about.imageAlt}
            className="relative z-10 w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
