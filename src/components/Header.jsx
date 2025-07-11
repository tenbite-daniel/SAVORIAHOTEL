import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/images/logo.png";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  {
    label: "Menu",
    dropdown: [
      { label: "Starters", href: "#starters" },
      { label: "Main Dishes", href: "#main-dishes" },
      { label: "Drinks", href: "#drinks" },
      { label: "Desserts", href: "#desserts" },
    ],
  },
  { label: "Signature Dishes", href: "#signature-dishes" },
  { label: "Reservation", href: "#reservation" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  const timeoutRef = useRef(null);

  // Remove the useEffect for adding sticky classes - we'll add them directly to the JSX

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Handle dropdown with delay to prevent quick disappearing
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setMenuOpen(false);
    }, 150); // 150ms delay before closing
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false); // Close dropdown when link is clicked
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full">
      <nav
        id="main-nav"
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
        {/* Quick Links */}
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
                  onClick={() => setMenuOpen(!menuOpen)} // Toggle on click as well
                >
                  {link.label}
                  <svg
                    className={`ml-1 w-4 h-4 transform transition-transform duration-200 ${
                      menuOpen ? 'rotate-180' : ''
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
                        <a
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href)}
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition font-sans font-normal text-base leading-6 text-gray-700 dark:text-gray-300 hover:text-[#8b5a3c] dark:hover:text-[#D97706]"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-[#8b5a3c] dark:hover:text-[#D97706] transition font-sans font-normal text-base leading-6 text-gray-700 dark:text-gray-300"
                >
                  {link.label}
                </a>
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
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_29_1954)">
                    <g clipPath="url(#clip1_29_1954)">
                      <path
                        d="M12.2812 0.0367039C12.4374 0.102329 12.5499 0.242954 12.5812 0.408579L13.2031 3.78045L16.5749 4.3992C16.7406 4.43045 16.8812 4.54295 16.9468 4.6992C17.0124 4.85545 16.9937 5.03358 16.8968 5.1742L14.9499 7.9992L16.8968 10.8211C16.9937 10.9617 17.0124 11.1398 16.9468 11.2961C16.8812 11.4523 16.7406 11.5648 16.5749 11.5961L13.2031 12.218L12.5812 15.5898C12.5499 15.7555 12.4374 15.8961 12.2812 15.9617C12.1249 16.0273 11.9468 16.0086 11.8062 15.9117L8.98431 13.9648L6.16244 15.9117C6.02181 16.0086 5.84369 16.0273 5.68744 15.9617C5.53119 15.8961 5.41869 15.7555 5.38744 15.5898L4.76556 12.218L1.39369 11.5961C1.22806 11.5648 1.08744 11.4523 1.02181 11.2961C0.956186 11.1398 0.974936 10.9617 1.07181 10.8211L3.01869 7.9992L1.07181 5.17733C0.974936 5.0367 0.956186 4.85858 1.02181 4.70233C1.08744 4.54608 1.22806 4.43358 1.39369 4.40233L4.76556 3.78045L5.38744 0.408579C5.41869 0.242954 5.53119 0.102329 5.68744 0.0367039C5.84369 -0.0289211 6.02181 -0.0101711 6.16244 0.0867039L8.98431 2.03358L11.8062 0.0867039C11.9468 -0.0101711 12.1249 -0.0289211 12.2812 0.0367039ZM5.98431 7.9992C5.98431 7.20355 6.30038 6.44049 6.86299 5.87788C7.4256 5.31527 8.18866 4.9992 8.98431 4.9992C9.77996 4.9992 10.543 5.31527 11.1056 5.87788C11.6682 6.44049 11.9843 7.20355 11.9843 7.9992C11.9843 8.79485 11.6682 9.55792 11.1056 10.1205C10.543 10.6831 9.77996 10.9992 8.98431 10.9992C8.18866 10.9992 7.4256 10.6831 6.86299 10.1205C6.30038 9.55792 5.98431 8.79485 5.98431 7.9992ZM12.9843 7.9992C12.9843 6.93834 12.5629 5.92092 11.8127 5.17078C11.0626 4.42063 10.0452 3.9992 8.98431 3.9992C7.92345 3.9992 6.90603 4.42063 6.15588 5.17078C5.40574 5.92092 4.98431 6.93834 4.98431 7.9992C4.98431 9.06007 5.40574 10.0775 6.15588 10.8276C6.90603 11.5778 7.92345 11.9992 8.98431 11.9992C10.0452 11.9992 11.0626 11.5778 11.8127 10.8276C12.5629 10.0775 12.9843 9.06007 12.9843 7.9992Z"
                        fill="#4B5563"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_29_1954">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0.984375)"
                      />
                    </clipPath>
                    <clipPath id="clip1_29_1954">
                      <path
                        d="M0.984375 0H16.9844V16H0.984375V0Z"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-700 dark:text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                  />
                </svg>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;