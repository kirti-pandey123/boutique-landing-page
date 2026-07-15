import React from "react";
import { motion } from "framer-motion";
import appointment from "../../assets/images/appointment/appointment.jpg";

const Appointment = () => {
    return (
        <section
            id="appointment"
            className="py-24 px-6 lg:px-10 bg-[#FAF7F2]"
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
                        src={appointment}
                        alt="Book Appointment"
                        className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
                    />
                </motion.div>

                {/* Right Form */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p className="uppercase tracking-[5px] text-[#C8A96A] font-semibold mb-3">
                        Book Appointment
                    </p>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                        Schedule Your Boutique Visit
                    </h2>

                    <p className="mt-5 text-gray-600 leading-8">
                        Book your appointment with our fashion experts and discover
                        exclusive collections, personalized styling, and premium service.
                    </p>

                    <form className="mt-10 space-y-5">

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C8A96A]"
                        />

                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C8A96A]"
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C8A96A]"
                        />

                        <input
                            type="date"
                            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C8A96A]"
                        />

                        <textarea
                            rows="4"
                            placeholder="Your Message"
                            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C8A96A]"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full bg-[#C8A96A] hover:bg-black text-white py-4 rounded-full transition duration-300 font-semibold"
                        >
                            Book Appointment
                        </button>

                    </form>
                </motion.div>

            </div>
        </section>
    );
};

export default Appointment;