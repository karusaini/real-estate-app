/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "Buy", to: "buy" },
    { name: "Rent", to: "rent" },
    { name: "Sell", to: "sell" },
    { name: "About Us", to: "about" },
    { name: "Contact Us", to: "contact" },
  ];

  const textStyle: React.CSSProperties = {
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
    cursor: "pointer",
    font: "normal",
  };

  const buttonStyle = {
    width: "auto",
    minWidth: "150px",
    height: "44px",
    gap: "4px",
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 2 L2 16 H6 V30 H12 V22 H20 V30 H26 V16 H30 L16 2 Z"
                fill="#1E1E1E"
              />
            </svg>
            <span className="text-[#1E1E1E] text-2xl sm:text-3xl font-bold">
              PropBot
            </span>
          </div>

          <div className="hidden md:flex flex-1 justify-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                duration={600}
                offset={-70}
                spy={true}
                activeClass="text-blue-700 border-b-2 border-blue-700"
                className="text-[#1E3A8A] hover:text-blue-700 transition duration-200 pb-1"
                style={textStyle}
              >
                {link.name}
              </ScrollLink>
            ))}
          </div>

          <div className="hidden md:flex gap-3 lg:gap-4">
            <button
              onClick={() => navigate("/login")}
              className="flex items-center justify-center bg-[#1E3A8A] text-white rounded-full px-4 sm:px-5 py-2 sm:py-3 hover:bg-blue-700 transition cursor-pointer"
              style={buttonStyle}
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="flex items-center justify-center bg-white text-[#1E3A8A] border border-[#1E3A8A] rounded-full px-4 sm:px-5 py-2 sm:py-3 hover:bg-[#1E3A8A] hover:text-white transition cursor-pointer"
              style={buttonStyle}
            >
              Register
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-700 focus:outline-none"
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
                  d={
                    mobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4">
          <div className="flex flex-col gap-3 py-2">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                duration={600}
                offset={-70}
                spy={true}
                activeClass="text-blue-700 font-semibold"
                className="text-[#1E3A8A] hover:text-blue-700 transition text-lg text-center"
                style={textStyle}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </ScrollLink>
            ))}

            <div className="flex flex-col gap-2 mt-2">
              <button
                onClick={() => {
                  navigate("/login");
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-[#1E3A8A] text-white rounded-full py-2 text-lg hover:bg-blue-700 transition"
              >
                Login
              </button>
              <button
                onClick={() => {
                  navigate("/signup");
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-white text-[#1E3A8A] border border-[#1E3A8A] rounded-full py-2 text-lg hover:bg-[#1E3A8A] hover:text-white transition"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
