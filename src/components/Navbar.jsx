import { FiSun, FiMenu, FiX, FiMoon } from "react-icons/fi";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, setDarkMode } = useTheme();

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
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        backdrop-blur-lg
        bg-white/80
        dark:bg-black/40
        border-b
        border-gray-200
        dark:border-white/10
        transition-colors
        duration-300
      "
    >
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">
        {/* Logo */}
        <h1
          onClick={() => scrollToSection("hero")}
          className="
            text-3xl
            font-bold
            text-gray-900
            dark:text-white
            cursor-pointer
            transition-colors
            duration-300
          "
        >
          Vision<span className="text-blue-500">X</span>
        </h1>

        {/* Desktop Menu */}
        <nav
          className="
            hidden
            md:flex
            gap-10
            text-gray-800
            dark:text-white
            transition-colors
            duration-300
          "
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="
                hover:text-blue-500
                transition
                duration-300
              "
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Right */}
        <div className="hidden md:flex items-center gap-4">
          {/* Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="
              w-11
              h-11
              rounded-full
              border
              border-gray-300
              dark:border-white/20
              flex
              items-center
              justify-center
              text-gray-800
              dark:text-white
              hover:border-blue-500
              transition-all
              duration-300
            "
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          {/* Buy Now */}
          <button
            className="
              bg-blue-600
              hover:bg-blue-500
              px-6
              py-3
              rounded-full
              text-white
              font-semibold
              transition-all
              duration-300
            "
          >
            Buy Now
          </button>
        </div>

        {/* Mobile Button */}
        <button
          className="
            md:hidden
            text-gray-800
            dark:text-white
            transition-colors
            duration-300
          "
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
            md:hidden
            bg-white
            dark:bg-black/95
            border-t
            border-gray-200
            dark:border-white/10
            transition-colors
            duration-300
          "
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="
                block
                w-full
                py-4
                text-gray-800
                dark:text-white
                hover:bg-blue-600
                hover:text-white
                transition-all
                duration-300
              "
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
