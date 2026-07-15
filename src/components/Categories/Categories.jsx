import React from "react";
import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";
import { Categories } from "../../constants/CategoriesData";

const CategoriesSection = () => {
  return (
    <section
      id="categories"
      className="py-20 px-6 lg:px-10 bg-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="uppercase tracking-[5px] text-[#C8A96A] font-semibold mb-3">
            Categories
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Explore Our Collections
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Find the perfect outfit for every occasion with our carefully
            curated premium collections.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Categories.map((item) => (
            <CategoryCard
              key={item.id}
              title={item.title}
              image={item.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CategoriesSection;