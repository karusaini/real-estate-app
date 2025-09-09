import { motion, type Variants } from "framer-motion";
import WhatWeDoCard from "./WhatWeDoCard";
import { FaChartLine, FaKey, FaRobot, FaLock } from "react-icons/fa";

export default function WhatWeDo() {
  const cards = [
    {
      icon: <FaChartLine className="w-full h-full text-white" />,
      title: "Buy & Sell Properties",
      description:
        "Find verified homes for sale or list your property with ease.",
    },
    {
      icon: <FaKey className="w-full h-full text-white" />,
      title: "Find Rental Homes",
      description:
        "Browse through thousands of rental options suited to your needs.",
    },
    {
      icon: <FaRobot className="w-full h-full text-white" />,
      title: "Smart AI Property Search",
      description:
        "Get instant recommendations based on your budget & location.",
    },
    {
      icon: <FaLock className="w-full h-full text-white" />,
      title: "Safe & Secure Transactions",
      description:
        "Verified listings & secure deals to ensure a smooth experience.",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="sell" className="w-full bg-white py-20 px-4 sm:px-6 lg:px-12">
      <motion.h2
        className="text-[#1E3A8A] text-3xl sm:text-4xl md:text-[35px] font-bold text-center mb-4"
        style={{ lineHeight: "100%" }}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        What We Do?
      </motion.h2>

      <motion.p
        className="text-[#555555] text-center text-base sm:text-lg md:text-xl mb-12 max-w-md mx-auto"
        style={{
          fontWeight: 400,
          lineHeight: "28px",
          letterSpacing: "2%",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Helping you find, buy, and rent the perfect property with ease.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-[1440px] mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="transition-transform"
          >
            <WhatWeDoCard
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
