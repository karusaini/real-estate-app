import { FiMapPin, FiSearch, FiChevronDown } from "react-icons/fi";
import heroImage from "../assets/hero-bg.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];

export default function Hero() {
  const [arrowHover, setArrowHover] = useState(false);
  const [location, setLocation] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSearch = () => {
    if (!location) return alert("Please enter a location");
    navigate(`/search?location=${encodeURIComponent(location)}`);
  };

  const handleListProperty = () => {
    navigate("/list-property");
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="relative flex justify-center mt-20 px-4 sm:px-6 lg:px-12">
      <div className="w-full max-w-7xl rounded-[34px] overflow-hidden relative h-[527px] sm:h-[500px] md:h-[527px] bg-gray-300">
        <motion.img
          src={heroImage}
          alt="Hero Background"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-white text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "Poppins", lineHeight: "100%" }}
          >
            Find Your Dream Home in One Click!
          </motion.h1>

          <motion.p
            className="text-[#EEEEEE] text-base sm:text-lg md:text-xl"
            style={{ fontFamily: "Poppins", fontWeight: 400 }}
          >
            Discover, Buy, or Rent Verified Properties with Ease.
          </motion.p>

          {/* Search Input */}
          <motion.div className="mt-6 sm:mt-8 w-full max-w-[620px] h-[72px] bg-white rounded-full shadow-lg flex items-center px-4 sm:px-6 md:px-6 gap-3 sm:gap-4 relative">
            <FiMapPin className="text-gray-400 w-5 h-5 sm:w-6 sm:h-6" />
            <input
              type="text"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="flex-1 h-full text-sm sm:text-lg md:text-lg outline-none placeholder-gray-400"
              style={{ fontFamily: "Poppins", fontWeight: 400 }}
              onClick={() => setDropdownOpen(true)}
            />
            <motion.div
              animate={{ rotate: arrowHover || dropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex items-center"
              onMouseEnter={() => setArrowHover(true)}
              onMouseLeave={() => setArrowHover(false)}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <FiChevronDown className="text-gray-400 w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
            </motion.div>
            <button
              onClick={handleSearch}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1E3A8A] rounded-full flex items-center justify-center hover:bg-blue-700 transition"
            >
              <FiSearch className="text-white w-4 h-4 sm:w-6 sm:h-6" />
            </button>

            {/* Dropdown */}
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  ref={dropdownRef}
                  className="absolute top-[80px] left-0 w-full max-w-[620px] bg-white shadow-lg rounded-lg overflow-hidden z-10"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {cities.map((city) => (
                    <div
                      key={city}
                      onClick={() => {
                        setLocation(city);
                        setDropdownOpen(false);
                      }}
                      className="px-4 py-3 hover:bg-[#1E3A8A] hover:text-white cursor-pointer transition-colors"
                    >
                      {city}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* List Your Property Button */}
          <motion.div className="mt-4 sm:mt-6 relative w-full flex justify-center">
            <button
              onClick={handleListProperty}
              className="flex items-center justify-center rounded-[24px] border-2 px-4 sm:px-5 py-2 cursor-pointer bg-white hover:bg-[#1E3A8A] transition-colors duration-300"
              style={{ gap: "4px", maxWidth: "194px" }}
            >
              <span
                className="text-[#1E3A8A] hover:text-white text-sm sm:text-base text-center w-full font-medium transition-colors duration-300"
                style={{ fontFamily: "Poppins" }}
              >
                List Your Property
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
