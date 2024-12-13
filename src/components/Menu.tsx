import React, { useState, useEffect } from "react";
import ContactButton from "./ui/ContactButton";
import AnnouncementTagline from "./AnnoucementTagline";

const Menu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsMenuVisible(false);
      } else {
        setIsMenuVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white shadow-md z-10 transition-transform duration-300 ${
        isMenuVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-[113px] h-[35.26px]"
          />

          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Pricing
            </a>
            <a
              href="#blog"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Blog
            </a>
          </nav>
        </div>

        <button
          className="hidden md:block px-6 py-2 text-primary transition-colors"
          style={{
            backgroundColor: "#FAE0E1",
            borderRadius: "5px",
          }}
        >
          Contact Now
        </button>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            backgroundColor: "#FAE0E1",
            borderRadius: "5px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16m-7 6h7"
              }
            />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#home"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Pricing
            </a>
            <a
              href="#blog"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Blog
            </a>
            <ContactButton onClick={undefined} />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Menu;
