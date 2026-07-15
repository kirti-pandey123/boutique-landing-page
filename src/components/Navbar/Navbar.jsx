import React, { useState, useEffect } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Collection", id: "categories" },
    { name: "About", id: "about" },
    { name: "Gallery", id: "gallery" },
    { name: "Reviews", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-white shadow-lg"
        : "bg-white/20 backdrop-blur-md"
        }`}
    >
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-wide">
          <span className="text-[#C8A96A]">Luxe</span>
          <span className="text-black"> Boutique</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 font-medium">
          {navLinks.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="cursor-pointer hover:text-[#C8A96A] transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <a
          href="#appointment"
          className="hidden lg:block bg-[#C8A96A] text-white px-6 py-3 rounded-full hover:bg-black transition duration-300"
        >
          Book Now
        </a>

        {/* Mobile Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl"
        >
          {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-xl">
          <ul className="flex flex-col items-center gap-6 py-8 font-medium">
            {navLinks.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-[#C8A96A] cursor-pointer"
                >
                  {item.name}
                </a>
              </li>
            ))}

            <a
              href="#appointment"
              onClick={() => setMenuOpen(false)}
              className="bg-[#C8A96A] text-white px-6 py-3 rounded-full"
            >
              Book Appointment
            </a>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;