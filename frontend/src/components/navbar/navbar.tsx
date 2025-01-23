import React, { useState } from "react";
import logo from "../../assets/Nav/logo.svg";
import navAccountImage from "../../assets/Nav/nav_account_alert.svg";
import navSearchImage from "../../assets/Nav/nav_search.svg";
import navHeartImage from "../../assets/Nav/nav_heart.svg";
import navCartImage from "../../assets/Nav/nav_cart.svg";

const NavBar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="px-4 py-3 md:px-10 md:py-7">
            <div className="flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center gap-1 md:gap-2">
                    <div className="cursor-pointer">
                        <img
                            className="-mt-1 w-7 md:w-16"
                            src={logo}
                            alt="Logo"
                        />
                    </div>
                    <div className="cursor-pointer font-montserrat font-bold text-xl md:text-4xl">
                        Furniro
                    </div>
                </div>

                {/* Links Section (Hidden on Small Screens) */}
                <div className="hidden md:flex items-center gap-6 md:gap-14">
                    <a className="hover:underline cursor-pointer md:text-xl">Home</a>
                    <a className="hover:underline cursor-pointer md:text-xl">Shop</a>
                    <a className="hover:underline cursor-pointer md:text-xl">About</a>
                    <a className="hover:underline cursor-pointer md:text-xl">Contact</a>
                </div>

                {/* Icons Section */}
                <div className="flex items-center gap-4 md:gap-10">
                    <button>
                        <img className="w-5 md:w-7" src={navAccountImage} alt="Account" />
                    </button>
                    <button>
                        <img className="w-5 md:w-7" src={navSearchImage} alt="Search" />
                    </button>
                    <button>
                        <img className="w-5 md:w-7" src={navHeartImage} alt="Favorites" />
                    </button>
                    <button>
                        <img className="w-5 md:w-7" src={navCartImage} alt="Cart" />
                    </button>
                    {/* Hamburger Menu (Visible on Small Screens) */}
                    <button
                        className="md:hidden"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="md:hidden mt-4">
                    <a className="block py-2 hover:underline cursor-pointer">
                        Home
                    </a>
                    <a className="block py-2 hover:underline cursor-pointer">
                        Shop
                    </a>
                    <a className="block py-2 hover:underline cursor-pointer">
                        About
                    </a>
                    <a className="block py-2 hover:underline cursor-pointer">
                        Contact
                    </a>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
