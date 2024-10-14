import React from "react";
import data from "../data/data.json";

const NavbarDark = () => {
  return (
    <nav className="bg-gray-800 text-white py-4 hidden lg:block">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-6">
          <p className="flex items-center">
            <i className="fa-solid fa-phone mr-2"></i>
            {data.navbar.contact.phone}
          </p>
          <p className="flex items-center">
            <i className="fa-solid fa-envelope mr-2"></i>
            {data.navbar.contact.email}
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <p className="font-bold text-xl">
            Follow Us and get a chance to win 80% off
          </p>
          <div className="flex space-x-4">
            {Object.keys(data.navbar.socialMedia).map((key) => (
              <a
                key={key}
                href={data.navbar.socialMedia[key].href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
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
