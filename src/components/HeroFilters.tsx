import { FiChevronDown } from "react-icons/fi";
import { FaHome, FaCity } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const options = {
  type: ["House", "Apartment", "Villa", "Condo", "Studio"],
  rent: ["For Rent", "For Sale"],
  country: ["Indonesia", "USA", "Canada", "Australia", "UK", "Germany"],
};

export default function HeroFilters() {
  const [dropdownOpen, setDropdownOpen] = useState({
    rent: false,
    type: false,
    country: false,
  });

  const [selected, setSelected] = useState({
    rent: "For Rent",
    type: "House",
    country: "Indonesia",
  });

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen({ rent: false, type: false, country: false });
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFindProperty = () => {
    console.log("Selected Filters:", selected);
    alert(
      `Searching for ${selected.rent} / ${selected.type} in ${selected.country}`
    );
  };

  const renderDropdown = (key: keyof typeof options, items: string[]) => (
    <AnimatePresence>
      {dropdownOpen[key] && (
        <motion.div
          className="absolute top-full left-0 mt-2 w-48 max-h-60 overflow-y-auto bg-white shadow-lg rounded-lg z-20"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {items.map((item) => (
            <div
              key={item}
              className="px-4 py-2 hover:bg-[#1E3A8A] hover:text-white cursor-pointer transition-colors whitespace-nowrap"
              onClick={() => {
                setSelected((prev) => ({ ...prev, [key]: item }));
                setDropdownOpen((prev) => ({ ...prev, [key]: false }));
              }}
            >
              {item}
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="relative flex justify-center -mt-12 px-4 sm:px-6 lg:px-12 z-10">
      <div
        className="w-full max-w-[1106px] bg-white rounded-[46px] shadow-[8px_12px_48.9px_3px_rgba(0,0,0,0.15)] flex items-center px-4 sm:px-6 gap-4 flex-wrap sm:flex-nowrap py-4"
        ref={dropdownRef}
      >
        <div
          className="flex items-center gap-3 bg-white border border-gray-400 rounded-lg px-4 py-2 cursor-pointer relative min-w-[120px]"
          onClick={() =>
            setDropdownOpen((prev) => ({ ...prev, rent: !prev.rent }))
          }
        >
          <FaCity className="w-5 h-5 text-gray-600" />
          <span
            className="text-[#1E1E1E] text-base font-normal"
            style={{ fontFamily: "Poppins" }}
          >
            {selected.rent}
          </span>
          <motion.div
            animate={{ rotate: dropdownOpen.rent ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FiChevronDown className="w-5 h-5 text-gray-600" />
          </motion.div>
          {renderDropdown("rent", options.rent)}
        </div>

        <div
          className="flex items-center gap-3 bg-white border border-gray-400 rounded-lg px-4 py-2 cursor-pointer relative min-w-[120px]"
          onClick={() =>
            setDropdownOpen((prev) => ({ ...prev, type: !prev.type }))
          }
        >
          <FaHome className="w-5 h-5 text-gray-600" />
          <span
            className="text-[#1E1E1E] text-base font-normal"
            style={{ fontFamily: "Poppins" }}
          >
            {selected.type}
          </span>
          <motion.div
            animate={{ rotate: dropdownOpen.type ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FiChevronDown className="w-5 h-5 text-gray-600" />
          </motion.div>
          {renderDropdown("type", options.type)}
        </div>

        <div
          className="flex items-center gap-3 bg-white border border-gray-400 rounded-lg px-4 py-2 cursor-pointer relative min-w-[120px]"
          onClick={() =>
            setDropdownOpen((prev) => ({ ...prev, country: !prev.country }))
          }
        >
          <MdLocationOn className="w-5 h-5 text-gray-600" />
          <span
            className="text-[#1E1E1E] text-base font-normal"
            style={{ fontFamily: "Poppins" }}
          >
            {selected.country}
          </span>
          <motion.div
            animate={{ rotate: dropdownOpen.country ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FiChevronDown className="w-5 h-5 text-gray-600" />
          </motion.div>
          {renderDropdown("country", options.country)}
        </div>

        <button
          className="ml-auto w-[194px] h-[58px] bg-[#1E3A8A] text-white rounded-[31px] text-lg font-normal hover:bg-blue-700 transition-colors cursor-pointer"
          style={{ fontFamily: "Poppins" }}
          onClick={handleFindProperty}
        >
          Find Property
        </button>
      </div>
    </div>
  );
}
