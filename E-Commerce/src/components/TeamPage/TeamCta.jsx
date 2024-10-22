import React, { useEffect, useState } from "react";
import data from "../../data/data.json";
import { Button } from "../ui/button.jsx";

function TeamCta() {
  const ctaData = data.team.teamCta;
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">{ctaData.title}</h2>
        <p className="text-lg text-center text-gray-600 mb-10">
          {ctaData.description}
        </p>
        <div className="flex justify-center">
          <Button variant="default" size="lg">
            {ctaData.buttonText}
          </Button>
        </div>
        <div className="flex justify-center mt-6">
          {ctaData.socialLinks &&
            ctaData.socialLinks.map((link, index) => (
              <Button
                key={index}
                variant="ghostPrimary"
                size="lg"
                href={link.url}
              >
                <i className={link.icon}></i>
              </Button>
            ))}
        </div>
      </div>
    </div>
  );
}

export default TeamCta;
