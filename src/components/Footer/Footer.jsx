import React from "react";
import { motion } from "framer-motion";
import {
    FaInstagram,
    FaFacebookF,
    FaWhatsapp,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-20 pb-8 px-6 lg:px-10">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-[#C8A96A]">
                        Elegant Boutique
                    </h2>

                    <p className="mt-5 text-gray-400 leading-7">
                        Discover timeless fashion with premium quality,
                        elegant designs, and personalized styling crafted
                        just for you.
                    </p>
                </motion.div>

                {/* Quick Links */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-xl font-semibold mb-5 text-[#C8A96A]">
                        Quick Links
                    </h3>

                    <ul className="space-y-3 text-gray-400">
                        <li><a href="#home" className="hover:text-[#C8A96A] transition">Home</a></li>
                        <li><a href="#about" className="hover:text-[#C8A96A] transition">About</a></li>
                        <li><a href="#categories" className="hover:text-[#C8A96A] transition">Collections</a></li>
                        <li><a href="#gallery" className="hover:text-[#C8A96A] transition">Gallery</a></li>
                        <li><a href="#contact" className="hover:text-[#C8A96A] transition">Contact</a></li>
                    </ul>
                </motion.div>

                {/* Contact */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-xl font-semibold mb-5 text-[#C8A96A]">
                        Contact
                    </h3>

                    <div className="space-y-4 text-gray-400">

                        <div className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-[#C8A96A]" />
                            <span>New Delhi, India</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaPhoneAlt className="text-[#C8A96A]" />
                            <span>+91 98765 43210</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-[#C8A96A]" />
                            <span>hello@yourboutique.com</span>
                        </div>

                    </div>
                </motion.div>

                {/* Social */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.1 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-xl font-semibold mb-5 text-[#C8A96A]">
                        Follow Us
                    </h3>

                    <div className="flex gap-4">

                        <a
                            href="#"
                            className="w-12 h-12 rounded-full bg-[#1f1f1f] flex items-center justify-center hover:bg-[#C8A96A] transition"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="#"
                            className="w-12 h-12 rounded-full bg-[#1f1f1f] flex items-center justify-center hover:bg-[#C8A96A] transition"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="#"
                            className="w-12 h-12 rounded-full bg-[#1f1f1f] flex items-center justify-center hover:bg-[#25D366] transition"
                        >
                            <FaWhatsapp />
                        </a>

                    </div>
                </motion.div>

            </div>

            {/* Bottom */}
            <div className="border-t border-gray-800 mt-16 pt-6 text-center text-gray-500">

                <p>
                    © 2026 Elegant Boutique. All Rights Reserved.
                </p>

                <p className="mt-2">
                    Designed & Developed by
                    <span className="text-[#C8A96A] font-semibold">
                        {" "}Kirti Pandey
                    </span>
                </p>

            </div>
        </footer>
    );
};

export default Footer;