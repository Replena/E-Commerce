import React from "react";
import HeroPicture from "../components/TeamPage/HeroPicture";
import InnerHeader from "../components/TeamPage/InnerHeader";
import Team from "../components/TeamPage/Team";
import TeamCta from "../components/TeamPage/TeamCta";
import data from "../data/data.json";
function TeamContent() {
  return (
    <div>
      <InnerHeader />
      <HeroPicture />
      <Team data={data.team.teamMembers} />
      <TeamCta />
    </div>
  );
}

export default TeamContent;
