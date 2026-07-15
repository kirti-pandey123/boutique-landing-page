import React from "react";
import { motion } from "framer-motion";

const FeatureCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-transparent hover:border-[#C8A96A] transition-all duration-300 text-center"
    >
      {/* Icon */}
      <div className="w-20 h-20 mx-auto rounded-full bg-[#C8A96A]/10 flex items-center justify-center mb-6">
        <Icon className="text-4xl text-[#C8A96A]" />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-7">
        {item.description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;