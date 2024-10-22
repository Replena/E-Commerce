import React from "react";
import TeamMember from "./TeamMember";
import json from "../../data/data.json";
const Team = ({ data }) => {
  return (
    <div className="container">
      <h1 className="text-2xl font-bold text-center my-20">
        {json.team.teamMemberTitle}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14 p-4">
        {data.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
