import React, { useState } from "react";
import data from "../data/data.json";
import { Button } from "./ui/button.jsx";
import {
  UserIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuViewport,
} from "./ui/navigation-menu.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = data.navbar.links;
  const updatedLinks = [
    links[0],
    { name: data.navbar.dropdown.shop.name, href: "#" },
    ...links.slice(1),
  ];

  return (
    <nav className="bg-text-light">
      <div className="flex flex-col justify-between p-4 container">
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-28 ">
            <div className="text-xl font-bold">{data.navbar.title}</div>
            <NavigationMenu className="hidden lg:flex items-center">
              <NavigationMenuList className="flex space-x-8 ">
                {updatedLinks.map((link, index) => {
                  if (link.name === data.navbar.dropdown.shop.name) {
                    return (
                      <NavigationMenuItem key={index}>
                        <NavigationMenuTrigger className="text-text-secondary hover:text-primary">
                          {link.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="mt-2 p-4 ">
                          <div className="flex ">
                            {Object.keys(data.navbar.dropdown.shop.items).map(
                              (key, idx) => (
                                <div key={idx} className="flex-1 m-4">
                                  <h3 className="font-bold mb-2">
                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                  </h3>
                                  <ul className="space-y-1">
                                    {data.navbar.dropdown.shop.items[key].map(
                                      (item, itemIndex) => (
                                        <li key={itemIndex}>
                                          <a
                                            href={item.href}
                                            className="text-text-secondary hover:text-primary"
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
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    );
                  }

                  return (
                    <NavigationMenuItem key={index}>
                      <a
                        href={link.href}
                        className="text-text-secondary hover:text-primary"
                      >
                        {link.name}
                      </a>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
              <NavigationMenuViewport />
            </NavigationMenu>
          </div>

          <div className="flex items-center space-x-4  ">
            <UserIcon className="h-6 w-6  text-text-default  lg:text-primary" />
            <div className="hidden lg:flex items-center space-x-4 ">
              <div className=" flex ">
                <Button variant="ghostPrimary" size="wopadding">
                  <Link href="{data.navbar.auth.login.href}">
                    {data.navbar.auth.login.name}
                  </Link>
                </Button>

                <div className="mx-2">/</div>
                <Button variant="ghostPrimary" size="wopadding">
                  <a href={data.navbar.auth.register.href}>
                    {data.navbar.auth.register.name}
                  </a>
                </Button>
              </div>
            </div>
            <Button variant="ghostPrimary" size="wopadding">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </Button>
            <Button variant="ghostPrimary" size="wopadding">
              <ShoppingCartIcon className="h-6 w-6" />
            </Button>
            <Button variant="ghostPrimary" size="wopadding">
              <Bars3Icon className="h-6 w-6 lg:hidden" />
            </Button>
            <Button variant="ghostPrimary" size="wopadding">
              <HeartIcon className="h-6 w-6 hidden lg:flex" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-4 pt-10 lg:hidden">
          {data.navbar.mobileLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-text-secondary hover:text-primary"
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
