import React from "react";
import { socials } from "../../utils/helper";
import { links } from "../../utils/Links";

const Footer = () => {
  return (
    <footer className="bg-[#1F1C1C] text-white py-8">
      <div className="mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between gap-8">
        <div className="about flex-1">
          <h1 className="text-2xl font-bold mb-4">About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className="quick-links flex-1 text-center">
          <h1 className="text-2xl font-bold mb-4">Quick Links</h1>
          <div className="flex flex-col space-y-2">
            {links.map((link, index) => (
              <a
                href={link.path}
                key={index}
                className="hover:text-gray-300 text-white transition-colors"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
        <div className="social flex-1 text-center">
          <h1 className="text-2xl font-bold mb-4">Follow us on</h1>
          <div className="flex flex-col space-y-2">
            {socials.map((value, index) => (
              <a
                href={value.link}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 text-white transition-colors"
              >
                {value.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <hr className="my-8 mx-auto" />
      <div className="mx-auto px-4 text-center">
        <p>All rights reserved &copy; 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
