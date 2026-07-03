import { motion } from "framer-motion";
import { fadeUp } from "../animations/motionVariants";

export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      variants={fadeUp}
      className="
    group
    h-full
    bg-[#111827]
    rounded-3xl
    p-8
    border
    border-white/10
    cursor-pointer
    hover:border-blue-500
    hover:-translate-y-2
    transition-all
    duration-300
    ease-in-out
  "
    >
      <div
        className="
    w-16
    h-16
    rounded-2xl
    bg-blue-500/10
    flex
    items-center
    justify-center
    mb-6
    transition-all
    duration-300
    group-hover:bg-blue-500
  "
      >
        <Icon
          className="
    text-blue-500
    text-3xl
    transition-all
    duration-300
    group-hover:scale-110
    group-hover:text-white
  "
        />
      </div>

      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>

      <p className="text-gray-400 leading-7">{description}</p>
    </motion.div>
  );
}
