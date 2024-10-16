import React from "react";
import data from "../data/data.json";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
const NavbarDark = () => {
  return (
    <nav className="bg-text-default text-text-light py-4 hidden lg:block">
      <div className="mx-4 flex justify-between items-center">
        <div className="flex space-x-6">
          <p className="flex items-center">
            <PhoneIcon className="size-6 mr-2" />
            {data.navbar.contact.phone}
          </p>
          <p className="flex items-center">
            <EnvelopeIcon className="size-6 mr-2" />
            {data.navbar.contact.email}
          </p>
        </div>
        <div>
          <p className="font-bold text-xl">{data.navbar.contact.followUs}</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex space-x-4">
            {Object.keys(data.navbar.socialMedia).map((key) => (
              <a
                key={key}
                href={data.navbar.socialMedia[key].href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className={`${data.navbar.socialMedia[key].icon} text-xl`}
                ></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDark;
