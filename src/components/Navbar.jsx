// import React from 'react'

// export default function Navbar() {
//   return (
//     <div>Navbar</div>
//   )
// }
import { FiSun, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "Features", id: "features" },
    { name: "Specs", id: "specs" },
    { name: "Gallery", id: "gallery" },
    { name: "About", id: "footer" },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

        {/* Logo */}

        <h1 className="text-3xl font-bold text-white cursor-pointer">
          Vision<span className="text-blue-500">X</span>
        </h1>

        {/* Desktop Menu */}

        <nav className="hidden md:flex gap-10 text-white">

          {navItems.map((item) => (

            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="hover:text-blue-400 transition"
            >
              {item.name}
            </button>

          ))}

        </nav>

        {/* Right */}

        <div className="hidden md:flex items-center gap-4">

          <button className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-blue-500 transition">

            <FiSun size={20} />

          </button>

          <button className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-full text-white font-semibold transition">

            Buy Now

          </button>

        </div>

        {/* Mobile Button */}

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}

        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden bg-black/95 border-t border-white/10">

          {navItems.map((item) => (

            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full py-4 text-white hover:bg-blue-600 transition"
            >

              {item.name}

            </button>

          ))}

        </div>

      )}
    </header>
  );
}