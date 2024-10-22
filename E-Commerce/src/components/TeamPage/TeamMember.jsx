import React from "react";

const TeamMember = ({ name, position, image, socialMedia }) => {
  return (
    <div className="text-center">
      <img src={image} alt={name} className="w-full" />
      <h2 className="text-lg font-bold text-text-default">{name}</h2>
      <p className="text-sm text-text-secondary font-bold">{position}</p>
      <div className="flex space-x-5 mt-2 justify-center text-primary">
        {socialMedia.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl"
          >
            <i className={social.icon}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
