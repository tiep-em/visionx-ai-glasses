import FeatureCard from "./FeatureCard";
import { features } from "../data/featuresData";

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-[#0B1120]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-blue-500 uppercase tracking-widest mb-4">

            Features

          </p>

          <h2 className="text-5xl font-bold text-white">

            Powerful Features

          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">

            Everything you need in one lightweight pair of
            AI-powered smart glasses.

          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">

          {features.map((feature) => (

            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />

          ))}

        </div>

      </div>
    </section>
  );
}