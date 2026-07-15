import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaStar, FaArrowRight } from "react-icons/fa";

const ProductCard = ({ product }) => {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
        >
            {/* Product Image */}
            <div className="relative overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[280px] sm:h-[320px] lg:h-[360px] object-contain bg-[#F8F5F0] transition-transform duration-500 group-hover:scale-105"
                />

                {/* Wishlist */}
                <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#C8A96A] hover:text-white transition">
                    <FaHeart />
                </button>

                {/* Rating */}
                <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full flex items-center gap-1 shadow">
                    <FaStar className="text-yellow-500" />
                    <span className="text-sm font-semibold">
                        {product.rating}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">

                <h3 className="text-2xl font-bold text-gray-900">
                    {product.name}
                </h3>

                <p className="text-[#C8A96A] text-xl font-bold mt-2">
                    {product.price}
                </p>

                <p className="text-gray-500 text-sm mt-1">
                    Premium Fabric • Limited Edition
                </p>

                <a
                    href="#about"
                    className="mt-5 inline-flex items-center gap-2 text-black font-medium hover:text-[#C8A96A] transition"
                >
                    View Details
                    <FaArrowRight />
                </a>

            </div>
        </motion.div>
    );
};

export default ProductCard;