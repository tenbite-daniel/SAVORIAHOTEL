import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/Logo.png";

const NAV_LINKS = [
    { label: "Home", to: "/", anchor: "#hero" },
    {
        label: "Menu",
        dropdown: [
            { label: "Starters", to: "/starters" },
            { label: "Main Dishes", to: "/maindishes" },
            { label: "Drinks", to: "/drinks" },
            { label: "Desserts", to: "/desserts" },
        ],
    },
    { label: "Signature Dishes", to: "/", anchor: "#signaturedishes" },
    { label: "Reservation", to: "/", anchor: "#reservation" },
];

const Header = () => {
    const location = useLocation();
    const [theme, setTheme] = useState(
        () => localStorage.getItem("theme") || "light"
    );
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [navVisible, setNavVisible] = useState(true);

    // Theme effect
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    // Scroll effect for hiding nav on scroll down
    useEffect(() => {
        const handleScroll = () => {
            if (typeof window !== "undefined") {
                if (window.scrollY > lastScrollY && window.scrollY > 100) {
                    setNavVisible(false);
                } else {
                    setNavVisible(true);
                }
                setLastScrollY(window.scrollY);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    // Close mobile menu when clicking on a link
    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    // Handle navigation for anchor links
    const handleNavigation = (e, anchor, to = "/") => {
        e.preventDefault();
        closeMobileMenu();
        setDesktopMenuOpen(false);

        if (location.pathname !== to) {
            window.location.href = `${to}${anchor}`;
        } else {
            const target = document.querySelector(anchor);
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }
    };

    // Handle dropdown mouse events
    const handleMouseEnter = () => {
        setDesktopMenuOpen(true);
    };

    const handleMouseLeave = () => {
        setTimeout(() => {
            setDesktopMenuOpen(false);
        }, 150);
    };

    return (
        <>
            <header
                className={`w-full transition-transform duration-300 fixed top-0 left-0 z-40 ${
                    navVisible ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <nav
                    className="fixed top-0 left-0 right-0 z-40 bg-white dark:bg-gray-900 flex justify-between items-center px-4 sm:px-8 py-5 shadow-sm transition-colors duration-300"
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

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-[#8b5a3c] dark:hover:text-[#D97706] focus:outline-none"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <i className="fa-solid fa-xmark h-6 w-6" />
                        ) : (
                            <i className="fa-solid fa-bars h-6 w-6" />
                        )}
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
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
                                            aria-expanded={desktopMenuOpen}
                                            onClick={() =>
                                                setDesktopMenuOpen(
                                                    !desktopMenuOpen
                                                )
                                            }
                                        >
                                            {link.label}
                                            <i
                                                className={`fa-solid fa-chevron-down ml-1 w-4 h-4 transform transition-transform duration-200 ${
                                                    desktopMenuOpen
                                                        ? "rotate-180"
                                                        : ""
                                                }`}
                                            />
                                        </button>
                                        {desktopMenuOpen && (
                                            <ul className="absolute left-0 mt-1 w-44 bg-white dark:bg-gray-800 rounded shadow-lg py-2 z-50 border border-gray-200 dark:border-gray-700">
                                                {link.dropdown.map((item) => (
                                                    <li key={item.label}>
                                                        <Link
                                                            to={item.to}
                                                            onClick={() => {
                                                                setDesktopMenuOpen(
                                                                    false
                                                                );
                                                                window.scrollTo(
                                                                    0,
                                                                    0
                                                                );
                                                            }}
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
                                    <li key={link.label}>
                                        <a
                                            href={`${link.to || "/"}${
                                                link.anchor
                                            }`}
                                            onClick={(e) =>
                                                handleNavigation(
                                                    e,
                                                    link.anchor,
                                                    link.to
                                                )
                                            }
                                            className="hover:text-[#8b5a3c] dark:hover:text-[#D97706] transition font-sans font-normal text-base leading-6 text-gray-700 dark:text-gray-300 cursor-pointer"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ) : (
                                    <li key={link.label}>
                                        <Link
                                            to={link.to}
                                            onClick={() =>
                                                setDesktopMenuOpen(false)
                                            }
                                            className="hover:text-[#8b5a3c] dark:hover:text-[#D97706] transition font-sans font-normal text-base leading-6 text-gray-700 dark:text-gray-300"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>

                        {/* Theme Toggle */}
                        <button
                            onClick={() =>
                                setTheme(theme === "dark" ? "light" : "dark")
                            }
                            aria-label="Toggle light/dark mode"
                            className="ml-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                        >
                            {theme === "dark" ? "☀️" : "🌙"}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <div
                    className={`fixed top-20 left-0 right-0 z-30 bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
                        mobileMenuOpen
                            ? "max-h-screen opacity-100"
                            : "max-h-0 opacity-0"
                    }`}
                >
                    <ul className="px-4 py-2 space-y-2">
                        {NAV_LINKS.map((link) =>
                            link.dropdown ? (
                                <li
                                    key={link.label}
                                    className="border-b border-gray-200 dark:border-gray-700"
                                >
                                    <button
                                        className="w-full flex justify-between items-center py-3 px-2 font-sans font-normal text-base leading-6 text-gray-700 dark:text-gray-300 hover:text-[#8b5a3c] dark:hover:text-[#D97706]"
                                        onClick={() =>
                                            setDesktopMenuOpen(!desktopMenuOpen)
                                        }
                                    >
                                        {link.label}
                                        <i
                                            className={`fa-solid fa-chevron-down transform transition-transform duration-200 ${
                                                desktopMenuOpen
                                                    ? "rotate-180"
                                                    : ""
                                            }`}
                                            style={{
                                                fontSize: "0.875rem",
                                                width: "1rem",
                                                height: "1rem",
                                            }}
                                        />
                                    </button>
                                    {desktopMenuOpen && (
                                        <ul className="pl-4 pb-2 space-y-2">
                                            {link.dropdown.map((item) => (
                                                <li key={item.label}>
                                                    <Link
                                                        to={item.to}
                                                        onClick={() => {
                                                            closeMobileMenu;
                                                            window.scrollTo(
                                                                0,
                                                                0
                                                            );
                                                        }}
                                                        className="block py-2 px-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition font-sans font-normal text-base leading-6 text-gray-700 dark:text-gray-300 hover:text-[#8b5a3c] dark:hover:text-[#D97706]"
                                                    >
                                                        {item.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ) : link.anchor ? (
                                <li
                                    key={link.label}
                                    className="border-b border-gray-200 dark:border-gray-700"
                                >
                                    <a
                                        href={`${link.to || "/"}${link.anchor}`}
                                        onClick={(e) =>
                                            handleNavigation(
                                                e,
                                                link.anchor,
                                                link.to
                                            )
                                        }
                                        className="block py-3 px-2 hover:text-[#8b5a3c] dark:hover:text-[#D97706] transition font-sans font-normal text-base leading-6 text-gray-700 dark:text-gray-300"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ) : (
                                <li
                                    key={link.label}
                                    className="border-b border-gray-200 dark:border-gray-700"
                                >
                                    <Link
                                        to={link.to}
                                        onClick={closeMobileMenu}
                                        className="block py-3 px-2 hover:text-[#8b5a3c] dark:hover:text-[#D97706] transition font-sans font-normal text-base leading-6 text-gray-700 dark:text-gray-300"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            )
                        )}
                        <li className="flex justify-center py-4">
                            <button
                                onClick={() =>
                                    setTheme(
                                        theme === "dark" ? "light" : "dark"
                                    )
                                }
                                aria-label="Toggle light/dark mode"
                                className="ml-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition text-xl"
                            >
                                {theme === "dark" ? "☀️" : "🌙"}
                            </button>
                        </li>
                    </ul>
                </div>
            </header>
            {/* Spacer div to push content below the fixed header */}
            <div className="h-20"></div>
        </>
    );
};

export default Header;
