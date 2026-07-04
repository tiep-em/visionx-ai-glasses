import glasses from "../assets/images/visionx-glasses.webp";

import { specifications } from "../data/specificationsData";

import SpecificationCard from "./SpecificationCard";

export default function Specifications() {
  return (
    <section
      id="specs"
      className="py-24 bg-[#0B1120]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-blue-500 uppercase tracking-widest mb-4">
            Specifications
          </p>

          <h2 className="text-5xl font-bold text-white">
            Designed for Performance
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Powerful hardware meets elegant design to deliver
            the ultimate smart glasses experience.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div className="flex justify-center">

            <img
              src={glasses}
              alt="VisionX"
              className="
                w-full
                max-w-lg
                animate-float
              "
            />

          </div>

          {/* Right */}

          <div className="grid sm:grid-cols-2 gap-6">

            {specifications.map((spec) => (

              <SpecificationCard
                key={spec.title}
                icon={spec.icon}
                title={spec.title}
                value={spec.value}
              />

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}