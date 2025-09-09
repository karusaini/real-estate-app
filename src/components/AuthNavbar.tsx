import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaHome } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AuthNavbar() {
  const navigate = useNavigate();

  return (
    <motion.nav
      className="w-full h-auto bg-white shadow-md px-6 py-4"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            to="/"
            className="flex items-center gap-2 border border-[#1E3A8A] rounded-[24px] px-5 py-2 hover:bg-gray-50 transition"
          >
            <FaArrowLeft className="text-[#1E3A8A] w-5 h-5" />
            <span className="text-[#555555] text-[18px]">Back to Homepage</span>
          </Link>
        </motion.div>

        <motion.div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaHome className="text-[#1E1E1E] w-8 h-8" />
          <span className="text-[#1E1E1E] font-bold text-[24px]">PropBot</span>
        </motion.div>

        <motion.button
          onClick={() => navigate("/aboutus")}
          className="flex items-center gap-2 bg-[#1E3A8A] rounded-[24px] px-5 py-2 cursor-pointer hover:bg-blue-700 transition"
          style={{ width: "150px", height: "47px" }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-[#FFFFFF] text-[18px]">About Us</span>

          <div
            className="flex items-center justify-center"
            style={{ width: "25px", height: "25px" }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ transform: "rotate(90deg)" }}
            >
              <path
                d="M2 4L6 8L10 4"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.button>
      </div>
    </motion.nav>
  );
}
