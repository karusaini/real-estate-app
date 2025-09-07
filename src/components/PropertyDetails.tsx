import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaMapMarkerAlt, FaBookmark } from "react-icons/fa";
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

export default function PropertyDetails() {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;

    fetch(
      `https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProperty(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching property details:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-lg">
        Loading property details...
      </div>
    );
  }

  if (!property) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-xl text-red-500">Property not found</p>
        <button
          onClick={() => navigate(-1)}
          className="bg-[#1E3A8A] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4 sm:px-6 lg:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-[#1E3A8A] font-semibold mb-6 hover:underline"
      >
        <FaArrowLeft /> Back
      </button>

      {/* Property Card */}
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Image */}
        <motion.img
          src={property.image}
          alt={property.name}
          className="w-full h-[300px] sm:h-[400px] object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Info Section */}
        <div className="p-6 sm:p-10 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E3A8A]"
              style={{ fontFamily: "Poppins" }}
            >
              {property.name}
            </h1>
            <FaBookmark className="text-[#1E3A8A] w-6 h-6 cursor-pointer" />
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <FaMapMarkerAlt className="text-[#1E3A8A]" />
            <span className="text-lg sm:text-xl">
              {property.city}, {property.country}
            </span>
          </div>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            {property.description ||
              "This property offers spacious living with modern amenities, perfect for families or individuals looking for comfort and convenience."}
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <span className="text-2xl font-semibold text-[#1E1E1E]">
              ${Math.floor(Math.random() * 900000) + 100000}
            </span>
            <button className="px-8 py-3 bg-[#1E3A8A] text-white rounded-xl text-lg font-semibold hover:bg-blue-700 transition">
              Contact Agent
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
