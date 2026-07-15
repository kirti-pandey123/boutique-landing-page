import React from "react";
import { motion } from "framer-motion";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaClock,
} from "react-icons/fa";

const Contact = () => {
    return (
        <section
            id="contact"
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
                        Contact Us
                    </p>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                        We'd Love To Hear From You
                    </h2>

                    <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-8">
                        Visit our boutique or contact us for personalized styling,
                        appointments, and premium fashion collections.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >

                        <div className="flex items-start gap-4">
                            <FaMapMarkerAlt className="text-[#C8A96A] text-2xl mt-1" />
                            <div>
                                <h3 className="font-bold text-xl">Our Address</h3>
                                <p className="text-gray-600 mt-2">
                                    123 Fashion Street,<br />
                                    New Delhi, India
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <FaPhoneAlt className="text-[#C8A96A] text-2xl mt-1" />
                            <div>
                                <h3 className="font-bold text-xl">Phone</h3>
                                <p className="text-gray-600 mt-2">
                                    +91 ##########
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <FaEnvelope className="text-[#C8A96A] text-2xl mt-1" />
                            <div>
                                <h3 className="font-bold text-xl">Email</h3>
                                <p className="text-gray-600 mt-2">
                                    hello@yourboutique.com
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <FaClock className="text-[#C8A96A] text-2xl mt-1" />
                            <div>
                                <h3 className="font-bold text-xl">Opening Hours</h3>
                                <p className="text-gray-600 mt-2">
                                    Monday – Saturday <br />
                                    10:00 AM – 8:00 PM
                                </p>
                            </div>
                        </div>

                    </motion.div>

                    {/* Google Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="rounded-3xl overflow-hidden shadow-xl"
                    >
                        <iframe
                            title="Boutique Location"
                            src="https://www.google.com/maps/embed?pb=!1m18..."
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                        ></iframe>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;