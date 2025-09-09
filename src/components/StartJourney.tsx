import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function StartJourney() {
  const [name, setName] = useState("");
  const [userType, setUserType] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!name || !userType || !location) {
      setError("Please fill out all fields.");
      return;
    }
    setError("");
    console.log("Form submitted:", { name, userType, location });

    navigate(
      `/listings?name=${encodeURIComponent(name)}&type=${encodeURIComponent(
        userType
      )}&location=${encodeURIComponent(location)}`
    );
  };

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-6">
        <motion.h2
          className="text-[#1E3A8A] font-bold text-2xl sm:text-3xl md:text-[40px] text-left"
          style={{ lineHeight: "120%" }}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Start Your Journey Today!
        </motion.h2>

        <motion.p
          className="text-[#555555] text-base sm:text-lg md:text-[20px] text-left leading-7"
          style={{ letterSpacing: "1px" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Create a profile in seconds and find your ideal home.
        </motion.p>

        <motion.div
          className="w-full flex flex-col lg:flex-row items-start justify-start gap-4 mt-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full max-w-[336px] h-[50px] px-4 rounded-[8px] border border-[#CCCCCC] text-[16px] text-[#555] focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            style={{ letterSpacing: "1px" }}
            whileFocus={{ scale: 1.02 }}
          />

          <motion.div
            className="relative w-full max-w-[336px]"
            whileHover={{ scale: 1.02 }}
          >
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="appearance-none w-full h-[50px] px-4 rounded-[8px] border border-[#CCCCCC] text-[16px] text-[#555] focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              style={{ letterSpacing: "1px" }}
            >
              <option value="">Select User Type</option>
              <option value="Buyer">Buyer</option>
              <option value="Seller">Seller</option>
              <option value="Agent">Agent</option>
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#888888] pointer-events-none" />
          </motion.div>

          <motion.input
            type="text"
            placeholder="Enter Your Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full max-w-[336px] h-[50px] px-4 rounded-[8px] border border-[#CCCCCC] text-[16px] text-[#555] focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            style={{ letterSpacing: "1px" }}
            whileFocus={{ scale: 1.02 }}
          />

          <motion.button
            onClick={handleSubmit}
            className="w-full max-w-[225px] h-[50px] bg-[#1E3A8A] text-white rounded-[31px] text-[18px] font-semibold hover:bg-blue-800 transition cursor-pointer"
            style={{ lineHeight: "100%" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Continue
          </motion.button>
        </motion.div>

        {error && (
          <motion.p
            className="text-red-500 text-sm mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {error}
          </motion.p>
        )}
      </div>
    </section>
  );
}
