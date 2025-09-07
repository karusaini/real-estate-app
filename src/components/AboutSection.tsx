// src/components/AboutSection.tsx
import { FaMoneyBillWave, FaUsers, FaMapMarkerAlt } from "react-icons/fa";
import img1 from "../assets/about1.jpg"; // 510x533
import img2 from "../assets/about2.jpg"; // 408x405
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Images */}
        <motion.div
          className="relative w-full lg:w-[500px] flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-[85%] sm:w-[440px] h-[400px] sm:h-[460px] border-[8px] sm:border-[10px] border-[#EEEEEE] rounded-lg overflow-hidden">
            <img
              src={img1}
              alt="Main showcase"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating secondary image (desktop only) */}
          <motion.div
            className="absolute hidden lg:block lg:top-[180px] lg:left-[200px] w-[250px] h-[250px] xl:w-[340px] xl:h-[340px] border-[8px] xl:border-[10px] border-[#EEEEEE] rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <img
              src={img2}
              alt="Secondary showcase"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="flex-1 flex flex-col gap-10 max-w-[750px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Heading */}
          <motion.h2
            className="text-[#1E3A8A] text-2xl sm:text-3xl md:text-[36px] font-bold leading-snug"
            style={{ fontFamily: "Poppins", letterSpacing: "1px" }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            We Provide Latest Properties <br />
            For Our Valuable Clients
          </motion.h2>

          {/* Feature 1 */}
          <motion.div
            className="flex items-start gap-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <FaMoneyBillWave className="w-[32px] sm:w-[40px] h-[32px] sm:h-[40px] text-[#1E3A8A] flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-[#1E3A8A] text-lg sm:text-xl md:text-2xl font-semibold">
                Budget Friendly
              </h3>
              <p className="text-[#000000] text-sm sm:text-base md:text-lg leading-6 mt-1">
                Affordable options with flexible pricing. <br />
                Perfect homes that fit within your budget <br />
                without compromising on quality.
              </p>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            className="flex items-start gap-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <FaUsers className="w-[30px] sm:w-[36px] h-[30px] sm:h-[36px] text-[#1E3A8A] flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-[#1E3A8A] text-lg sm:text-xl md:text-2xl font-semibold">
                Trusted By Thousands
              </h3>
              <p className="text-[#000000] text-sm sm:text-base md:text-lg leading-6 mt-1">
                A community of happy clients. <br />
                Verified listings and reliable support <br />
                make your journey stress-free.
              </p>
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            className="flex items-start gap-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <FaMapMarkerAlt className="w-[30px] sm:w-[38px] h-[30px] sm:h-[38px] text-[#1E3A8A] flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-[#1E3A8A] text-lg sm:text-xl md:text-2xl font-semibold">
                Prime Locations
              </h3>
              <p className="text-[#000000] text-sm sm:text-base md:text-lg leading-6 mt-1">
                Properties in top neighborhoods. <br />
                Easy access to schools, workplaces <br />
                and lifestyle hubs.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
