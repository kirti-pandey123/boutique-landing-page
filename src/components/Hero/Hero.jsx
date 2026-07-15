import React from "react";
import { motion } from "framer-motion";
import heroImage from "/src/assets/images/hero/hero-model.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen bg-[#FAF7F2] pt-24 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="uppercase tracking-[5px] text-[#C8A96A] font-semibold mb-4">
                            Luxury Boutique
                        </p>

                        <TypeAnimation
                            sequence={[
                                "Bridal Collection",
                                2000,
                                "Designer Sarees",
                                2000,
                                "Luxury Gowns",
                                2000,
                                "Western Fashion",
                                2000,
                                "Premium Accessories",
                                2000,
                            ]}
                            wrapper="h3"
                            speed={40}
                            repeat={Infinity}
                            className="text-xl sm:text-2xl font-semibold text-[#8B6B2E] mb-5"
                        />
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-[#111827]"
                        >
                            Luxury
                            <span className="block text-[#C8A96A] italic font-serif">
                                Fashion
                            </span>
                            For Every Woman
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mt-6 max-w-xl text-base sm:text-lg leading-8 text-gray-600"
                        >
                            Discover exclusive designer outfits crafted with elegance,
                            premium fabrics, and timeless style. From everyday fashion
                            to bridal collections, we create looks you'll always remember.
                        </motion.p>

                        <div className="flex flex-wrap gap-5 mt-8">

                            <a
                                href="#categories"
                                className="bg-[#C8A96A] hover:bg-black text-white px-8 py-4 rounded-full transition duration-300 inline-block"
                            >
                                Shop Collection
                            </a>

                            <a
                                href="#appointment"
                                className="border-2 border-black hover:bg-black hover:text-white px-8 py-4 rounded-full transition duration-300 inline-block"
                            >
                                Book Appointment
                            </a>

                        </div>

                        <div className="mt-10 flex items-center gap-3">

                            <span className="text-yellow-500 text-xl">
                                ⭐⭐⭐⭐⭐
                            </span>

                            <p className="text-gray-600">
                                <span className="font-bold text-black">
                                    500+
                                </span>{" "}
                                Happy Customers
                            </p>

                        </div>

                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center items-end"
                    >
                        {/* Golden Glow */}
                        <div className="absolute right-20 top-32 h-72 w-72 rounded-full bg-[#C8A96A]/20 blur-3xl"></div>

                        {/* Model Image */}
                        <img
                            src={heroImage}
                            alt="Fashion Model"
                            className="relative z-10 w-full max-w-xl lg:max-w-2xl object-contain"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;