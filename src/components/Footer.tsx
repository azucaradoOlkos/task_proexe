import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/images/logo.png" alt="uifry logo" />
          </div>
          {/* Navigation Links */}
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
            <li>
              <a
                href="#home"
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="my-6 border-t border-gray-300"></div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end mt-6 md:mt-4 space-x-4">
          <a href="#instagram">
            <img
              src="/images/socialIcons/instagram.png"
              alt="Instagram"
              className="h-6 w-6 hover:opacity-80 transition-opacity"
            />
          </a>
          <a href="#flickr">
            <img
              src="/images/socialIcons/flickr.png"
              alt="Flickr"
              className="h-6 w-6 hover:opacity-80 transition-opacity"
            />
          </a>
          <a href="#pinterest">
            <img
              src="/images/socialIcons/pinterest.png"
              alt="Pinterest"
              className="h-6 w-6 hover:opacity-80 transition-opacity"
            />
          </a>
          <a href="#twitter">
            <img
              src="/images/socialIcons/twitter.png"
              alt="Twitter"
              className="h-6 w-6 hover:opacity-80 transition-opacity"
            />
          </a>
        </div>
      </div>
      {/* Bottom Text */}
      <div className="bg-gray-100 text-center py-4 mt-4">
        <p className="text-gray-500 text-sm">
          All rights reserved ® uifry.com | Terms and conditions apply!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
