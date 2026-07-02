export default function HowItWorksCard({
  step,
  icon: Icon,
  title,
  description,
}) {
  return (
    <div
      className="
        group
        relative
        bg-[#111827]
        rounded-3xl
        p-8
        text-center
        border
        border-white/10
        hover:border-blue-500
        transition-all
        duration-300
        ease-in-out
        hover:-translate-y-2
      "
    >
      {/* Step Number */}

      <div
        className="
          absolute
          -top-5
          left-1/2
          -translate-x-1/2
          w-10
          h-10
          rounded-full
          bg-blue-600
          text-white
          flex
          items-center
          justify-center
          font-bold
        "
      >
        {step}
      </div>

      {/* Icon */}

      <div
        className="
          w-20
          h-20
          rounded-full
          bg-blue-500/10
          mx-auto
          mt-6
          flex
          items-center
          justify-center
          transition-all
          duration-300
          group-hover:bg-blue-500
        "
      >
        <Icon
          className="
            text-blue-500
            text-4xl
            transition-all
            duration-300
            group-hover:text-white
            group-hover:scale-110
          "
        />
      </div>

      <h3 className="text-white text-2xl font-semibold mt-8">
        {title}
      </h3>

      <p className="text-gray-400 mt-4 leading-7">
        {description}
      </p>
    </div>
  );
}