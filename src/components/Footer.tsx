// src/components/Footer.tsx
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    console.log("Subscribed with email:", email);
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000); // Auto hide after 3 sec
  };

  return (
    <footer className="relative w-full bg-[#1E3A8ACC] py-16 px-4 sm:px-6 lg:px-12 mt-12">
      <motion.div
        className="max-w-[1440px] mx-auto flex flex-col items-center gap-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Heading */}
        <motion.h2
          className="text-white font-bold text-3xl sm:text-4xl md:text-5xl text-center"
          style={{ fontFamily: "Poppins", letterSpacing: "2%" }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Get in Touch with Us
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-white text-base sm:text-lg md:text-2xl text-center max-w-[600px] leading-relaxed"
          style={{ fontFamily: "Poppins" }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Subscribe now for exclusive property insights and deals!
        </motion.p>

        {/* Email Input + Submit Button */}
        <motion.form
          onSubmit={handleSubmit}
          className="relative w-full max-w-[602px] mt-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="w-full h-[55px] sm:h-[65px] rounded-[34px] bg-[#D9D9D9] flex items-center px-4 sm:px-8">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent text-[#555555] text-base sm:text-lg md:text-xl outline-none placeholder-[#777] px-2"
              style={{ fontFamily: "Poppins" }}
              required
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-4 sm:px-6 py-2 sm:py-3 bg-[#1E3A8A] rounded-[99px] text-white text-sm sm:text-base md:text-lg font-semibold transition-colors duration-300 hover:bg-blue-900 cursor-pointer"
              style={{ fontFamily: "Poppins" }}
            >
              Submit
            </motion.button>
          </div>
        </motion.form>

        {/* Success Message */}
        {submitted && (
          <motion.p
            className="text-green-300 mt-4 font-medium"
            style={{ fontFamily: "Poppins" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            ✅ Thank you for subscribing!
          </motion.p>
        )}
      </motion.div>

      {/* Bottom Section */}
      <motion.div
        className="max-w-[1440px] mx-auto mt-12 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/30 pt-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center">
            <FaHome className="w-6 h-6 text-white" />
          </div>
          <span
            className="text-[#D9D9D9] font-bold text-xl sm:text-2xl"
            style={{ fontFamily: "Poppins" }}
          >
            PropBot
          </span>
        </div>

        {/* Middle: Links with hover underline */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-white text-sm sm:text-base md:text-lg">
          {["For Sale", "Rentals", "New Projects", "Property News"].map(
            (link, i) => (
              <motion.a
                key={i}
                href="#"
                className="relative group"
                style={{ fontFamily: "Poppins" }}
                whileHover={{ scale: 1.1 }}
              >
                {link}
                <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            )
          )}
        </div>

        {/* Right: Copyright */}
        <span
          className="text-white text-sm sm:text-base md:text-lg text-center"
          style={{ fontFamily: "Poppins" }}
        >
          ©2025 PropBot. All rights reserved
        </span>
      </motion.div>
    </footer>
  );
}
