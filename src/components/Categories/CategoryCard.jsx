import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const CategoryCard = ({ title, image }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl cursor-pointer"
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <a
          href="#featured"
          className="mt-3 flex items-center gap-2 text-white font-medium"
        >
          Explore Collection
          <FaArrowRight className="text-sm" />
        </a>
      </div>
    </motion.div>
  );
};

export default CategoryCard;