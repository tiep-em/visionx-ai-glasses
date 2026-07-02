import HowItWorksCard from "./HowItWorksCard";
import { steps } from "../data/howItWorksData";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-[#05070D]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-blue-500 uppercase tracking-widest mb-4">
            How It Works
          </p>

          <h2 className="text-5xl font-bold text-white">
            Simple in 3 Steps
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Experience the future of wearable AI with a simple
            and intuitive workflow.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {steps.map((step, index) => (
            <HowItWorksCard
              key={step.title}
              step={index + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
}