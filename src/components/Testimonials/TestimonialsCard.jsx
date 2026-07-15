import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const TestimonialsCard = ({ testimonials }) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Customer Image */}
      <div className="flex justify-center">
        <img
          src={testimonials.image}
          alt={testimonials.name}
          className="w-24 h-24 rounded-full object-cover border-4 border-[#C8A96A]"
        />
      </div>

      {/* Rating */}
      <div className="flex justify-center gap-1 mt-5">
        {[...Array(testimonials.rating)].map((_, index) => (
          <FaStar
            key={index}
            className="text-yellow-500 text-lg"
          />
        ))}
      </div>

      {/* Review */}
      <p className="text-gray-600 text-center leading-7 mt-5 italic">
        "{testimonials.review}"
      </p>

      {/* Name */}
      <h3 className="text-xl font-bold text-center text-gray-900 mt-6">
        {testimonials.name}
      </h3>
    </motion.div>
  );
};

export default TestimonialsCard;