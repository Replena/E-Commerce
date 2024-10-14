import React, { useState } from "react";
import data from "../data/data.json";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const links = data.navbar.links;
  const updatedLinks = [
    links[0],
    { name: data.navbar.dropdown.shop.name, href: "#" },
    ...links.slice(1),
  ];

  return (
    <nav className="bg-white ">
      <div className="flex flex-col justify-between p-4">
        <div className="flex justify-between items-center w-100">
          <div className="flex gap-28">
            <div className="text-xl font-bold m-auto">{data.navbar.title}</div>

            <div className="hidden lg:flex items-center p-4">
              <div className="flex space-x-8">
                {updatedLinks.map((link, index) => {
                  if (link.name === data.navbar.dropdown.shop.name) {
                    return (
                      <div className="relative" key={index}>
                        <button
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                          className="text-gray-600 hover:text-blue-500 flex items-center"
                        >
                          {link.name}
                          <i className="fa-solid fa-chevron-down ml-1"></i>
                        </button>
                        {dropdownOpen && (
                          <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg z-10">
                            <div className="flex p-4">
                              {Object.keys(data.navbar.dropdown.shop.items).map(
                                (key, index) => (
                                  <div key={index} className="flex-1 ml-4">
                                    <h3 className="font-bold mb-2">
                                      {key.charAt(0).toUpperCase() +
                                        key.slice(1)}
                                    </h3>
                                    <ul className="space-y-1">
                                      {data.navbar.dropdown.shop.items[key].map(
                                        (item, itemIndex) => (
                                          <li key={itemIndex}>
                                            <a
                                              href={item.href}
                                              className="text-gray-600 hover:text-blue-500"
                                            >
                                              {item.name}
                                            </a>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <a
                      key={index}
                      href={link.href}
                      className="text-gray-600 hover:text-blue-500"
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4 ">
            <i className="fa-solid fa-user"></i>
            <div className="flex items-center space-x-4">
              <div className="text-blue-500 hidden lg:flex">
                <a href={data.navbar.auth.login.href} className="">
                  {data.navbar.auth.login.name}
                </a>
                <div className="mx-2">/</div>
                <a href={data.navbar.auth.register.href} className="">
                  {data.navbar.auth.register.name}
                </a>
              </div>
              <i className="fas fa-search"></i>
              <i className="fas fa-shopping-cart"></i>
              <i className="fa-solid fa-bars lg:hidden"></i>
              <i className="fa-regular fa-heart hidden lg:block"></i>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4 pt-10 lg:hidden">
          {data.navbar.mobileLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-600 hover:text-blue-500"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
