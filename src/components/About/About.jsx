import React from "react";
import { motion } from "framer-motion";
import showroom from "../../assets/images/about/showroom.jpg";

import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 lg:px-10 bg-white"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={showroom}
            alt="Boutique"
            className="rounded-3xl shadow-2xl w-full h-[550px] object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[5px] text-[#C8A96A] font-semibold">
            About Us
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
            Crafted With Passion,
            <br />
            Designed For You
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            We create elegant fashion pieces that blend timeless style,
            premium craftsmanship, and modern trends. Every outfit is
            designed to make you feel confident and beautiful.
          </p>

          <div className="mt-8 space-y-4">

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-[#C8A96A]" />
              <span>Premium Quality Fabrics</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-[#C8A96A]" />
              <span>Custom Stitching Available</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-[#C8A96A]" />
              <span>Latest Fashion Collection</span>
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-[#C8A96A]" />
              <span>Trusted By Hundreds Of Happy Customers</span>
            </div>

          </div>
          <a
            href="#appointment"
            className="inline-block mt-10 bg-[#C8A96A] hover:bg-black text-white px-8 py-4 rounded-full transition duration-300"
          >
            Book Appointment
          </a>

        </motion.div>

      </div>
    </section>
  );
};

export default About;