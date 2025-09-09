import { useState } from "react";
import { motion } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    console.log("Subscribed with email:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <motion.section
      className="w-full bg-[#1E3A8A] py-12 sm:py-16 px-4 sm:px-6 lg:px-12 text-white rounded-[40px] mt-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Subscribe to our Newsletter
        </motion.h2>

        <motion.p
          className="text-sm sm:text-base lg:text-lg text-gray-200 max-w-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Get the latest property listings and updates directly to your inbox.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="w-full flex flex-col sm:flex-row gap-4 mt-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:flex-1 px-4 py-3 rounded-lg border-2 border-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base"
            required
          />
          <motion.button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-white text-[#1E3A8A] font-semibold rounded-lg hover:bg-gray-200 transition text-sm sm:text-base cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe
          </motion.button>
        </motion.form>

        {submitted && (
          <motion.p
            className="mt-4 text-green-400 font-medium text-sm sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Thank you for subscribing!
          </motion.p>
        )}
      </div>
    </motion.section>
  );
}
