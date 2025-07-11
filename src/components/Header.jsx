import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const NAV_LINKS = [
  { label: "Home", anchor: "#hero" }, // Changed to anchor
  {
    label: "Menu",
    dropdown: [
      { label: "Starters", to: "/starters" },
      { label: "Main Dishes", to: "/maindishes" },
      { label: "Drinks", to: "/drinks" },
      { label: "Desserts", to: "/desserts" },
    ],
  },
  { label: "Signature Dishes", anchor: "#signaturedishes"},
  { label: "Reservation", anchor: "#reservation" }, 
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setMenuOpen(false);
    }, 150);
  };

  // Smooth scroll function
  const handleSmoothScroll = (e, anchor) => {
    e.preventDefault();
    setMenuOpen(false); // Close any open dropdowns
    const target = document.querySelector(anchor);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <header className="w-full">
        <nav
          className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 flex justify-between items-center px-8 py-4 shadow-sm transition-colors duration-300"
          aria-label="Main Navigation"
        >
          {/* Logo and Name */}
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Savoria Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="font-serif font-bold text-2xl leading-8 text-[#8b5a3c] dark:text-[#D97706]">
              Savoria
            </span>
          </div>

          {/* Navigation Links */}
          <ul className="flex items-center space-x-8">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <li
                  key={link.label}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="flex items-center focus:outline-none font-sans font-normal text-base leading-6 text-gray-700 dark:text-gray-300 hover:text-[#8b5a3c] dark:hover:text-[#D97706] transition-colors"
                    aria-haspopup="true"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    {link.label}
                    <svg
                      className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${
                        menuOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {menuOpen && (
                    <ul className="absolute left-0 mt-1 w-44 bg-white dark:bg-gray-800 rounded shadow-lg py-2 z-50 border border-gray-200 dark:border-gray-700">
                      {link.dropdown.map((item) => (
                        <li key={item.label}>
                          <Link
                            to={item.to}
                            onClick={() => setMenuOpen(false)}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition font-sans font-normal text-base leading-6 text-gray-700 dark:text-gray-300 hover:text-[#8b5a3c] dark:hover:text-[#D97706]"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : link.anchor ? (
                // Anchor links for same-page navigation
                <li key={link.label}>
                  <a
                    href={link.anchor}
                    onClick={(e) => handleSmoothScroll(e, link.anchor)}
                    className="hover:text-[#8b5a3c] dark:hover:text-[#D97706] transition font-sans font-normal text-base leading-6 text-gray-700 dark:text-gray-300 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ) : (
                // Regular React Router links
                <li key={link.label}>
                  <Link
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-[#8b5a3c] dark:hover:text-[#D97706] transition font-sans font-normal text-base leading-6 text-gray-700 dark:text-gray-300"
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}

            {/* Theme Toggle */}
            <li>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle light/dark mode"
                className="ml-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                {theme === "dark" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zM4.22 5.22a1 1 0 111.42-1.42L6.64 5.64a1 1 0 11-1.42 1.42L4.22 5.22zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm2.22 4.78a1 1 0 011.42 0l1.42 1.42a1 1 0 01-1.42 1.42L4.22 16.2a1 1 0 010-1.42zM10 17a1 1 0 011-1v-1a1 1 0 10-2 0v1a1 1 0 011 1zm4.78-2.22a1 1 0 011.42 0l1.42 1.42a1 1 0 01-1.42 1.42l-1.42-1.42a1 1 0 010-1.42zM17 10a1 1 0 00-1-1h-1a1 1 0 100 2h1a1 1 0 001-1zm-2.22-4.78a1 1 0 00-1.42 0L12 6.64a1 1 0 001.42 1.42l1.42-1.42a1 1 0 000-1.42z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-700"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                  </svg>
                )}
              </button>
            </li>
          </ul>
        </nav>
      </header>
      {/* Spacer div to push content below the fixed header */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;