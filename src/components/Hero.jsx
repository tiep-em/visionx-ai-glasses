import glasses from "../assets/images/visionx-glasses.png";
import { FaBolt, FaStar, FaArrowRight, FaPlay } from "react-icons/fa";
import { theme } from "../style/theme";
import { motion } from "framer-motion";
import { fadeUp, zoomIn } from "../animations/motionVariants";

export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section
      id="hero"
      className={`${theme.section} min-h-screen pt-28 lg:pt-20`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Content */}

        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-80px)]">
          {/* Left */}

          <motion.div
            className="space-y-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Badge */}

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm">
              <FaBolt className="text-yellow-400" />
              <span>VisionX AI Glasses</span>
            </div>

            {/* Heading */}

            <div>
              <h1
                className={`${theme.title} text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight`}
              >
                See the Future.
                <br />
                <span className="text-blue-500">Live Smarter.</span>
              </h1>
            </div>

            {/* Description */}

            <p
              className={` ${theme.text} text-gray-400 text-lg max-w-xl leading-relaxed`}
            >
              AI-powered smart glasses that understand the world around you and
              enhance the way you live, work, and connect.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("newsletter")}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 hover:scale-105 hover:shadow-xl transition-all duration-300 px-8 py-4 rounded-full text-white font-semibold"
              >
                Pre-order Now
                <FaArrowRight />
              </button>

              <button
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/watch?v=5l_6XrR18WY",
                    "_blank",
                  )
                }
                className="border border-white/20 hover:border-blue-500 transition px-8 py-4 rounded-full text-white"
              >
                Watch Video
              </button>
            </div>

            {/* Rating */}

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <img
                  src="https://i.pravatar.cc/50?img=1"
                  alt=""
                  className="w-12 h-12 rounded-full border-2 border-black"
                />

                <img
                  src="https://i.pravatar.cc/50?img=2"
                  alt=""
                  className="w-12 h-12 rounded-full border-2 border-black"
                />

                <img
                  src="https://i.pravatar.cc/50?img=3"
                  alt=""
                  className="w-12 h-12 rounded-full border-2 border-black"
                />
              </div>

              <div>
                <div className="flex items-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                  <span className="ml-2 font-semibold text-white">4.8/5</span>
                </div>

                <p className="text-gray-500 text-sm">
                  Trusted by 10,000+ early adopters
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            className="relative flex items-center justify-center py-10"
            variants={zoomIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Background Glow */}

            <div
              className="
                absolute
                w-72
                h-72
                sm:w-96
                sm:h-96
                lg:w-[450px]
                lg:h-[450px]
                rounded-full
                bg-blue-500/20
                blur-[100px]
                lg:blur-[120px]
              "
            ></div>

            {/* Circle */}

            <div
              className="
                absolute
                w-72
                h-72
                sm:w-80
                sm:h-80
                lg:w-[420px]
                lg:h-[420px]
                rounded-full
                border
                border-white/10
              "
            ></div>

            {/* Image */}

            <img
              src={glasses}
              alt="VisionX AI Glasses"
              className="
                  animate-float
                  relative
                  z-10
                  w-full
                  max-w-[300px]
                  sm:max-w-[380px]
                  lg:max-w-xl
                  drop-shadow-[0_0_60px_rgba(59,130,246,0.45)]
                  hover:scale-105
                  transition
                  duration-500
                  pb-10
                "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
