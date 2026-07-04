import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#05070D] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}

          <div>
            <h2 className="text-3xl font-bold text-white">
              Vision<span className="text-blue-500">X</span>
            </h2>

            <p className="text-gray-300 mt-5 leading-7">
              Experience the future with AI-powered smart glasses designed to
              enhance your everyday life.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#hero" className="hover:text-blue-500 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#features" className="hover:text-blue-500 transition">
                  Features
                </a>
              </li>

              <li>
                <a href="#specs" className="hover:text-blue-500 transition">
                  Specifications
                </a>
              </li>

              <li>
                <a href="#gallery" className="hover:text-blue-500 transition">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Contact</h3>

            <ul className="space-y-3 text-gray-400">
              <li>support@visionx.com</li>

              <li>+84 123 456 789</li>

              <li>Ho Chi Minh City, Vietnam</li>
            </ul>
          </div>

          {/* Social */}

          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Follow Us</h3>

            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-[#111827]
                  flex
                  items-center
                  justify-center
                  text-white
                  hover:bg-blue-600
                  transition-all
                  duration-300
                "
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-[#111827]
                  flex
                  items-center
                  justify-center
                  text-white
                  hover:bg-blue-600
                  transition-all
                  duration-300
                "
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-[#111827]
                  flex
                  items-center
                  justify-center
                  text-white
                  hover:bg-blue-600
                  transition-all
                  duration-300
                "
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">© 2026 VisionX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
