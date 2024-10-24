import React from "react";
import data from "../../data/data.json";

const StatItem = ({ value, label }) => (
  <div className="text-center mb-8 md:mb-0">
    <h1 className="text-7xl font-bold text-[#252B42] mb-2">{value}</h1>
    <p className="text-[#737373] font-semibold">{label}</p>
  </div>
);

function AboutContentStats() {
  const contentStats = data.about.aboutContentStats;

  return (
    <div className="flex flex-col w-full">
      {/* About Separator Section */}
      <div className="flex justify-center items-center md:flex-wrap">
        <div className="w-[75%] flex flex-col justify-center md:gap-24 md:flex-wrap items-center text-center md:w-full md:flex-row">
          <div className="mb-16 md:mb-0 md:w-1/3 md:text-left">
            <p className="text-[#E74040] font-semibold text-sm mb-4">
              {contentStats.aboutSection.topText}
            </p>
            <h2 className="text-2xl font-bold text-[#252B42] mb-4 md:text-4xl">
              {contentStats.aboutSection.heading}
            </h2>
          </div>
          <div className="md:w-[35%] text-left">
            <p className="text-[#737373] font-semibold">
              {contentStats.aboutSection.description}
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 py-12 mt-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentStats.aboutSection.stats.map((stat, index) => (
              <StatItem key={index} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContentStats;
