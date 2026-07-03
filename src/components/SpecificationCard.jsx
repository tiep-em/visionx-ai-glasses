export default function SpecificationCard({
  icon: Icon,
  title,
  value,
}) {
  return (
    <div
      className="
        group
        flex
        items-center
        gap-5
        bg-[#111827]
        p-6
        rounded-2xl
        border
        border-white/10
        hover:border-blue-500
        transition-all
        duration-300
        ease-in-out
        cursor-pointer
      "
    >
      <div
        className="
          w-14
          h-14
          rounded-xl
          bg-blue-500/10
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
            text-2xl
            transition-all
            duration-300
            group-hover:text-white
          "
        />
      </div>

      <div>
        <p className="text-gray-400">
          {title}
        </p>

        <h3 className="text-white text-xl font-semibold">
          {value}
        </h3>
      </div>
    </div>
  );
}