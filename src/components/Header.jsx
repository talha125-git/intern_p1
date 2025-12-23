import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../assets/logo.jpg"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState(null);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
            document.body.style.position = "fixed";
            document.body.style.width = "100%";
            document.body.style.height = "100%";
        } else {
            document.body.style.overflow = "auto";
            document.body.style.position = "static";
        }

        return () => {
            document.body.style.overflow = "auto";
            document.body.style.position = "static";
        };
    }, [menuOpen]);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            console.log("Searching for:", searchQuery);
            // Handle search logic here
            // For example: navigate to search results page
            // navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
            
            // Close search bar after submit
            setSearchOpen(false);
            setSearchQuery("");
        }
    };

    const menuItems = [
        { text: "Home", link: "/" },
        {
            text: "Services",
            link: "/services",
            dropdown: [
                { text: "Service 1", link: "/service1" },
                { text: "Service 2", link: "/service2" },
                { text: "Service 3", link: "/service3" },
            ],
        },
        {
            text: "Who We Assist",
            link: "/who-we-assist",
            dropdown: [
                { text: "Assist 1", link: "/assist1" },
                { text: "Assist 2", link: "/assist2" },
                { text: "Assist 3", link: "/assist3" },
            ],
        },
        {
            text: "Packages",
            link: "/packages",
            dropdown: [
                { text: "Package 1", link: "/package1" },
                { text: "Package 2", link: "/package2" },
                { text: "Package 3", link: "/package3" },
            ],
        },
        { text: "Blog", link: "/blog" },
        {
            text: "Contact Us",
            link: "/contact",
            dropdown: [
                { text: "WhatsApp", link: "/whatsapp" },
                { text: "Facebook", link: "/facebook" },
                { text: "X", link: "/x" },
            ],
        },
        { text: "About Us", link: "/about" },
    ];

    const sidebarVariants = {
        open: { x: 0, transition: { type: "tween", duration: 0.3 } },
        closed: { x: "-100%", transition: { type: "tween", duration: 0.3 } },
    };

    const overlayVariants = {
        open: { opacity: 1, transition: { duration: 0.3 } },
        closed: { opacity: 0, transition: { duration: 0.3 } },
    };

    const searchVariants = {
        open: { 
            opacity: 1,
            scale: 1,
            transition: { 
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        },
        closed: { 
            opacity: 0,
            scale: 0.95,
            transition: { 
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        },
    };

    return (
        <header className="fixed md:top-0 md:left-0 top-[-8%] left-0 w-full bg-white mt-11 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link to="/" className="text-black hover:text-black no-underline">
                        <img src={logo} alt="" />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex flex-1 justify-center">
                    <ul className="flex space-x-6 items-center border-b border-gray-300">
                        {menuItems.map((item, idx) => (
                            <li key={idx} className="relative group">
                                <div className="flex items-center">
                                    <Link
                                        to={item.link}
                                        className="flex items-center cursor-pointer py-3 relative hover:text-orange-500 font-bold transition-colors duration-300 no-underline text-black"
                                    >
                                        {item.text} 
                                        {item.dropdown && <IoIosArrowDown className="ml-1" />}
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#eb7515] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    </Link>
                                </div>

                                {/* Dropdown on hover for desktop */}
                                {item.dropdown && (
                                    <ul className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                                        {item.dropdown.map((drop, dIdx) => (
                                            <li key={dIdx}>
                                                <Link
                                                    to={drop.link}
                                                    className="block px-4 py-2.5 hover:bg-gray-50 text-sm no-underline text-black hover:text-orange-500"
                                                >
                                                    {drop.text}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Search Icon & Mobile Hamburger */}
                <div className="flex items-center space-x-4">
                    {/* Search Icon and Search Bar */}
                    <div className="relative">
                        {/* Search Icon Button */}
                        <button
                            onClick={() => setSearchOpen(!searchOpen)}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            aria-label="Search"
                        >
                            <FaSearch className="text-xl cursor-pointer text-black hover:text-orange-500" />
                        </button>

                        {/* Animated Search Bar */}
                        <AnimatePresence>
                            {searchOpen && (
                                <motion.div
                                    key="search-bar"
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    variants={searchVariants}
                                    className="absolute top-full right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                                >
                                    <form onSubmit={handleSearchSubmit} className="p-4">
                                        <div className="flex items-center">
                                            <FaSearch className="text-gray-400 mr-3" />
                                            <input
                                                type="text"
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                placeholder="Search..."
                                                className="w-full bg-transparent text-black placeholder-gray-500 focus:outline-none text-sm"
                                                autoFocus
                                            />
                                            {searchQuery && (
                                                <button
                                                    type="button"
                                                    onClick={() => setSearchQuery("")}
                                                    className="ml-2 text-gray-400 hover:text-gray-600"
                                                    aria-label="Clear search"
                                                >
                                                    ✕
                                                </button>
                                            )}
                                        </div>
                                        <div className="mt-2 pt-2 border-t border-gray-100">
                                            <button
                                                type="submit"
                                                className="w-full py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors text-sm font-medium"
                                            >
                                                Search
                                            </button>
                                        </div>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? (
                            <MdClose size={24} className="text-black" />
                        ) : (
                            <MdOutlineMenu size={24} className="text-black" />
                        )}
                    </button>
                </div>
            </div>

            {/* Semi-transparent Black Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="overlay"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={overlayVariants}
                        className="fixed inset-0 bg-black z-40 md:hidden"
                        style={{
                            opacity: 0.6,
                            transition: 'opacity 0.3s ease'
                        }}
                        onClick={() => setMenuOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Mobile Menu Sidebar */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="sidebar"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={sidebarVariants}
                        className="fixed top-0 left-0 w-3/4 max-w-sm h-full bg-white shadow-2xl z-50 md:hidden"
                    >
                        <div className="p-6 h-full overflow-y-auto">
                            <div className="flex justify-between items-center mb-8">
                                <div className="text-2xl font-bold">
                                    <Link
                                        to="/"
                                        className="text-black hover:text-black no-underline"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        <img src={logo} alt="" />
                                    </Link>
                                </div>
                                <button
                                    onClick={() => setMenuOpen(false)}
                                    className="text-black p-2 rounded-full hover:bg-gray-100 transition-colors"
                                    aria-label="Close menu"
                                >
                                    <MdClose size={28} />
                                </button>
                            </div>

                            {/* Mobile Search Bar */}
                            {/* <div className="mb-6">
                                <form onSubmit={handleSearchSubmit} className="flex items-center bg-gray-50 rounded-lg p-3">
                                    <FaSearch className="text-gray-500 mr-3" />
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search..."
                                        className="w-full bg-transparent text-black placeholder-gray-500 focus:outline-none"
                                    />
                                    {searchQuery && (
                                        <button
                                            type="button"
                                            onClick={() => setSearchQuery("")}
                                            className="ml-2 text-gray-400 hover:text-gray-600"
                                            aria-label="Clear search"
                                        >
                                            ✕
                                        </button>
                                    )}
                                </form>
                            </div> */}

                            <ul className="flex flex-col space-y-1">
                                {menuItems.map((item, idx) => (
                                    <li key={idx} className="pb-2">
                                        {item.dropdown ? (
                                            <div className="flex flex-col">
                                                <div
                                                    className="flex items-center justify-between cursor-pointer py-3 px-3 rounded-lg hover:bg-gray-50 transition-colors"
                                                    onClick={() =>
                                                        mobileDropdown === idx
                                                            ? setMobileDropdown(null)
                                                            : setMobileDropdown(idx)
                                                    }
                                                >
                                                    <span className="font-medium text-black">{item.text}</span>
                                                    <IoIosArrowDown
                                                        className={`text-black transition-transform duration-200 ${mobileDropdown === idx ? "rotate-180" : ""
                                                            }`}
                                                    />
                                                </div>

                                                {mobileDropdown === idx && (
                                                    <ul className="ml-4 mt-1 flex flex-col space-y-1 border-l border-gray-200 pl-4">
                                                        {item.dropdown.map((drop, dIdx) => (
                                                            <li key={dIdx}>
                                                                <Link
                                                                    to={drop.link}
                                                                    className="block py-2.5 px-3 rounded-lg text-gray-700 hover:text-orange-500 transition-colors duration-300 no-underline"
                                                                    onClick={() => setMenuOpen(false)}
                                                                >
                                                                    {drop.text}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        ) : (
                                            <Link
                                                to={item.link}
                                                className="block font-medium py-3 px-3 rounded-lg hover:bg-gray-50 transition-colors no-underline text-black hover:text-orange-500"
                                                onClick={() => setMenuOpen(false)}
                                            >
                                                {item.text}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;