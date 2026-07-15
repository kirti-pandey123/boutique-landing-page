import React from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { featuredProducts } from "../../constants/FeaturedData";

const Featured = () => {
  return (
    <section
      id="featured"
      className="py-24 px-6 lg:px-10 bg-[#FAF7F2]"
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
            Featured Collection
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Our Best Selling Collection
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Discover our most loved outfits, crafted with elegance,
            premium fabrics, and timeless fashion.
          </p>
        </motion.div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Featured;