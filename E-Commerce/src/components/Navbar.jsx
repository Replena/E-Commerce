import React, { useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <nav className="bg-white">
      <div className="flex flex-col justify-between p-4">
        <div className="flex justify-between items-center w-100">
          <div className="flex gap-28">
            <div className="text-xl font-bold m-auto">Bandage</div>

            <div className="hidden lg:flex  items-center p-4">
              <div className="flex space-x-8">
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  Home
                </a>
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="text-gray-600 hover:text-blue-500 flex items-center"
                  >
                    Shop
                    <i className="fa-solid fa-chevron-down ml-1"></i>
                  </button>
                  {dropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg z-10">
                      <div className="flex p-4">
                        <div className="flex-1">
                          <h3 className="font-bold mb-2">Kadın</h3>
                          <ul className="space-y-1">
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 hover:text-blue-500"
                              >
                                Bags
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 hover:text-blue-500"
                              >
                                Belts
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 hover:text-blue-500"
                              >
                                Cosmetics
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 hover:text-blue-500"
                              >
                                Hats
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="flex-1 ml-4">
                          <h3 className="font-bold mb-2">Erkek</h3>
                          <ul className="space-y-1">
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 hover:text-blue-500"
                              >
                                Bags
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 hover:text-blue-500"
                              >
                                Belts
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 hover:text-blue-500"
                              >
                                Cosmetics
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 hover:text-blue-500"
                              >
                                Hats
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  About
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  Blog
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  Contact
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  Pages
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4 ">
            <i className="fa-solid fa-user"></i>
            <div className="flex items-center space-x-4">
              <div className=" text-blue-500 hidden lg:flex">
                <a href="#" className="">
                  Login
                </a>
                <div>/</div>
                <a href="#" className="">
                  Register
                </a>
              </div>
              <i className="fas fa-search"></i>
              <i className="fas fa-shopping-cart"></i>
              <i className="fa-solid fa-bars lg:hidden"></i>
              <i class="fa-regular fa-heart hidden lg:block"></i>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4 pt-10 lg:hidden">
          <a href="#" className="text-gray-600 hover:text-blue-500  bold">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            Product
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            Pricing
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
