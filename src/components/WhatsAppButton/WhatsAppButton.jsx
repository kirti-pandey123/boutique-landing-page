import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white text-4xl shadow-2xl hover:scale-110 transition-all duration-300 z-50"
        >
            <FaWhatsapp />
        </a>
    );
};

export default WhatsAppButton;