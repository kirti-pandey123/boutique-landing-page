import React from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

const GalleryCard = ({ image }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer"
        >
            <img
                src={image}
                alt="Gallery"
                className="w-full h-[320px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500 flex items-center justify-center">
                <FaInstagram className="text-white text-4xl opacity-0 group-hover:opacity-100 transition duration-300" />
            </div>
        </motion.div>
    );
};

export default GalleryCard;