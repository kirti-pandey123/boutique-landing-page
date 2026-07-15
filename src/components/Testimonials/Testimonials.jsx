import React from "react";
import { motion } from "framer-motion";
import TestimonialsCard from "./TestimonialsCard";
import { TestimonialsData } from "../../constants/TestimonialsData";

const Testimonials = () => {
    return (
        <section
            id="testimonials"
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
                        Testimonials
                    </p>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                        What Our Customers Say
                    </h2>

                    <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-8">
                        Hear from our happy customers who trust us for premium quality,
                        elegant designs, and exceptional service.
                    </p>
                </motion.div>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TestimonialsData.map((testimonials) => (
                        <TestimonialsCard
                            key={testimonials.id}
                            testimonials={testimonials}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;