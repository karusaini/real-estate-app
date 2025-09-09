/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Property {
  id: string;
  name: string;
  image: string;
  city: string;
  state: string;
  country: string;
  ownerName: string;
}

export default function FeaturedProperties() {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    fetch(
      "https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing"
    )
      .then((res) => res.json())
      .then((data) => {
        setProperties(data.slice(0, 4));
      })
      .catch((err) => console.log(err));
  }, []);

  if (!properties.length) return null;

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-12 bg-[#FFFF]">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-4">
        <motion.h2
          className="text-[#1E3A8A] font-bold text-4xl sm:text-5xl text-center lg:text-left"
          style={{ lineHeight: "100%" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Property
        </motion.h2>

        <motion.button
          className="flex items-center justify-center bg-white border-2 border-[#1E3A8A] rounded-[24px] px-5 py-2 cursor-pointer gap-2 transition-colors duration-300 hover:bg-[#1E3A8A]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-[#1E3A8A] text-lg font-normal transition-colors duration-300 hover:text-white">
            See {properties.length} New Projects
          </span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-colors duration-300 group-hover:stroke-white"
            style={{ transform: "rotate(-38.63deg)", stroke: "#1E3A8A" }}
          >
            <path
              d="M5 12h14M12 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start flex-wrap">
        {properties[0] && (
          <motion.div
            className="relative w-full lg:w-[650px] h-[300px] sm:h-[400px] lg:h-[478px] rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={properties[0].image}
              alt={properties[0].name}
              className="w-full h-full object-cover"
            />
            <div className="absolute left-4 sm:left-6 bottom-4 sm:bottom-6 flex flex-col gap-1 sm:gap-2">
              <span
                className="text-white text-sm sm:text-lg"
                style={{
                  fontWeight: 400,
                }}
              >
                By {properties[0].ownerName}
              </span>
              <span className="text-white text-xl sm:text-2xl font-semibold">
                {properties[0].name}
              </span>
            </div>
          </motion.div>
        )}

        {properties[1] && (
          <motion.div
            className="w-full lg:w-[307px] h-[200px] sm:h-[300px] lg:h-[478px] rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img
              src={properties[1].image}
              alt={properties[1].name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}

        <div className="flex flex-col gap-4 w-full lg:w-auto">
          {properties[2] && (
            <motion.div
              className="w-full sm:w-[309px] h-[150px] sm:h-[226px] rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={properties[2].image}
                alt={properties[2].name}
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
          {properties[3] && (
            <motion.div
              className="w-full sm:w-[309px] h-[150px] sm:h-[226px] rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img
                src={properties[3].image}
                alt={properties[3].name}
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
