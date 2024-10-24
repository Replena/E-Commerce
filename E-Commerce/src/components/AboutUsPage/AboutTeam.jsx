import React from "react";
import Team from "../TeamPage/Team.jsx";
import data from "../../data/data.json";

function AboutTeam() {
  const limitedTeamMembers = data.team.teamMembers.slice(0, 3);

  return (
    <div>
      <Team data={limitedTeamMembers} />
    </div>
  );
}

export default AboutTeam;
