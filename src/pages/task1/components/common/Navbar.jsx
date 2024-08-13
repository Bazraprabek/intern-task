import React from "react";
import { links } from "../../utils/Links";

const Navbar = () => {
  return (
    <nav className="bg-transparent absolute top-0 left-0 w-full z-10">
      <div className="w-[90%] flex justify-between items-center mx-auto p-4">
        <div className="logo">
          <h1 className="text-[#248DEE] text-2xl font-bold fon">
            <span className="text-[#9B5237]">Go</span>Explore
          </h1>
        </div>

        <div className="nav-links flex space-x-4">
          {links.map((link, index) => (
            <a
              className="text-white p-2 hover:text-gray-300"
              href={"#" + link.path}
              key={index}
            >
              {link.title}
            </a>
          ))}
        </div>

        <div className="button">
          <a
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
            href="#booktrip"
          >
            Book A Trip
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
