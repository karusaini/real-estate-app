import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaBookmark } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface Property {
  id: string;
  name: string;
  city: string;
  country: string;
  image: string;
  description: string;
  type?: string;
}

const PropertyCard = ({ property }: { property: Property }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      className="w-full max-w-[341px] bg-white rounded-[20px] shadow-md overflow-hidden flex flex-col"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full h-[200px] overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 flex flex-col gap-2 relative">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="w-5 h-5 text-[#1E3A8A]" />
            <span
              className="text-black text-[16px] font-medium"
              style={{ fontFamily: "Poppins" }}
            >
              {property.name}, {property.city}
            </span>
          </div>
          <FaBookmark className="w-5 h-5 text-[#1E3A8A]" />
        </div>

        <p
          className="text-[#555555] text-[14px] leading-[20px]"
          style={{ fontFamily: "Poppins" }}
        >
          {property.description || "Beautiful property with modern amenities."}
        </p>

        <div className="my-4 w-full border-t border-[#00000033]"></div>

        <div className="flex items-center justify-between">
          <span
            className="text-[#1E1E1E] font-semibold text-[18px]"
            style={{ fontFamily: "Poppins" }}
          >
            ${Math.floor(Math.random() * 900000) + 100000}
          </span>
          <button
            onClick={() => navigate(`/property/${property.id}`)}
            className="bg-[#1E3A8A] hover:bg-blue-700 text-white text-[14px] font-semibold px-4 py-2 rounded-[31px] transition cursor-pointer"
            style={{ fontFamily: "Poppins" }}
          >
            Know More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default function BestPropertiesForSale() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [visibleCount] = useState(4);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing"
    )
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
      })
      .catch((err) => console.error("API Fetch Error:", err));
  }, []);

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-12 bg-[#F9F9F9]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
          <h2
            className="text-[#1E3A8A] font-bold text-3xl sm:text-4xl"
            style={{ fontFamily: "Poppins" }}
          >
            Find The Perfect Rental Home
          </h2>

          <button
            onClick={() => navigate("/listings")}
            className="bg-[#1E3A8A] text-white font-semibold text-lg px-6 py-2 rounded-[31px] hover:bg-blue-700 transition cursor-pointer"
            style={{ fontFamily: "Poppins" }}
          >
            View All Rentals
          </button>
        </div>

        <p
          className="text-[#555555] text-lg sm:text-xl md:text-[20px] leading-7 md:leading-8"
          style={{
            fontFamily: "Poppins",
            fontWeight: 400,
            letterSpacing: "2%",
          }}
        >
          Browse our top-rated properties, featuring premium listings tailored
          to
          <br />
          your needs. Find your dream home today!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
          {properties.slice(0, visibleCount).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
