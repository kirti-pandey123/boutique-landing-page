import React from "react";
import { motion } from "framer-motion";
import GalleryCard from "./GalleryCard";
import { GalleryData } from "../../constants/GalleryData";
import { FaInstagram } from "react-icons/fa";

const Gallery = () => {
    return (
        <section
            id="gallery"
            className="py-24 px-6 lg:px-10 bg-white"
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
                        Gallery
                    </p>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                        Our Fashion Gallery
                    </h2>

                    <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-8">
                        Discover our latest boutique collections featuring elegant ethnic,
                        western wear, handbags, and premium fashion styles.
                    </p>
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {GalleryData.map((item) => (
                        <GalleryCard
                            key={item.id}
                            image={item.image}
                        />
                    ))}
                </div>

                {/* Instagram CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-600 text-lg">
                        Follow us on Instagram
                    </p>

                    <h3 className="mt-2 text-3xl font-bold text-[#C8A96A]">
                        @YourBoutique
                    </h3>

                    <p className="mt-3 text-gray-500 max-w-xl mx-auto">
                        Stay inspired with our latest collections, styling tips, exclusive launches,
                        and behind-the-scenes boutique moments.
                    </p>

                    <a
                        href="#"
                        className="inline-flex items-center gap-3 mt-6 bg-[#C8A96A] hover:bg-black text-white px-8 py-3 rounded-full transition duration-300"
                    >
                        <FaInstagram className="text-xl" />
                        Follow on Instagram
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default Gallery;