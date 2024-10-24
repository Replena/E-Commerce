import React from "react";
import AboutHeader from "../components/AboutUsPage/AboutHeader.jsx";
import AboutVideo from "../components/AboutUsPage/AboutVideo";
import AboutTeam from "../components/AboutUsPage/AboutTeam";
import AboutTestimonials from "../components/AboutUsPage/AboutTestimonials";
import AboutContentStats from "../components/AboutUsPage/AboutContentStats.jsx";
import ShopClients from "@/components/ShopPage/ShopClients.jsx";
function AboutContent() {
  return (
    <div>
      <AboutHeader />
      <AboutContentStats />
      <AboutVideo />
      <AboutTeam />
      <ShopClients />
      <AboutTestimonials />
    </div>
  );
}

export default AboutContent;
