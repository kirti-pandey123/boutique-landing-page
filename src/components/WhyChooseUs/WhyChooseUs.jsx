import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import { WhyChooseUsData } from "../../constants/WhyChooseUsData";

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="py-24 px-6 lg:px-10 bg-[#FAF7F2]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[5px] text-[#C8A96A] font-semibold mb-3">
            Why Choose Us
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Luxury Fashion With Premium Service
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-8">
            We are committed to delivering premium quality outfits,
            exceptional craftsmanship, and a shopping experience you'll love.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {WhyChooseUsData.map((item) => (
            <FeatureCard
              key={item.id}
              item={item}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;