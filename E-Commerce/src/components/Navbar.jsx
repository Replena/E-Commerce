import React, { useEffect, useState } from "react";
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
import { fetchCategories } from "@/redux/actions/thunkActions";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const links = data.navbar.links;

  const updatedLinks = [
    links[0],
    { name: data.navbar.dropdown.shop.name, href: "/shop" },
    ...links.slice(1),
  ];

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-text-light">
      <div className="flex flex-col justify-between p-6 container">
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-28 ">
            <div className="text-xl font-bold">
              <Button
                variant="ghost"
                size="wopadding"
                className="text-xl font-bold"
              >
                <Link to="/">{data.navbar.title} </Link>
              </Button>
            </div>
            <NavigationMenu className="hidden lg:flex items-center">
              <NavigationMenuList className="flex space-x-8 ">
                {updatedLinks.map((link, index) => {
                  if (link.name === data.navbar.dropdown.shop.name) {
                    return (
                      <NavigationMenuItem key={index}>
                        <NavigationMenuTrigger className="text-text-secondary hover:text-primary">
                          {link.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className=" p-6">
                          <div className="flex ">
                            {Object.keys(data.navbar.dropdown.shop.items).map(
                              (key, idx) => (
                                <div key={idx} className="flex-1 mr-20">
                                  <h3 className="font-bold mb-2">
                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                  </h3>
                                  <ul className="space-y-1">
                                    {data.navbar.dropdown.shop.items[key].map(
                                      (item, itemIndex) => (
                                        <li key={itemIndex}>
                                          <Link
                                            to={item.href}
                                            className="text-text-secondary hover:text-primary"
                                          >
                                            {item.name}
                                          </Link>
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
                      <Link
                        to={link.href}
                        className="text-text-secondary hover:text-primary"
                      >
                        {link.name}
                      </Link>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
              <NavigationMenuViewport />
            </NavigationMenu>
          </div>

          <div className="flex items-center space-x-4 ">
            <Button variant="ghostPrimary" size="wopadding">
              <UserIcon className="h-6 w-6" />
            </Button>

            <div className="hidden lg:flex items-center space-x-4 ">
              <div className="flex ">
                <Button variant="ghostPrimary" size="wopadding">
                  <Link to="/login">{data.navbar.auth.login.name}</Link>
                </Button>

                <div className="mx-2 text-primary">/</div>
                <Button variant="ghostPrimary" size="wopadding">
                  <Link to="/signup">{data.navbar.auth.register.name}</Link>
                </Button>
              </div>
            </div>
            <Button variant="ghostPrimary" size="wopadding">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </Button>
            <Button variant="ghostPrimary" size="wopadding">
              <ShoppingCartIcon className="h-6 w-6" />
            </Button>
            <Button
              variant="ghostPrimary"
              size="wopadding"
              className="lg:hidden"
              onClick={toggleMenu}
            >
              <Bars3Icon className="h-6 w-6 lg:hidden" />
            </Button>
            <Button variant="ghostPrimary" size="wopadding">
              <HeartIcon className="h-6 w-6 hidden lg:flex" />
            </Button>
          </div>
        </div>

        <div
          className={`flex flex-col items-center space-y-4 lg:hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          {data.navbar.mobileLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="text-text-secondary hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
