export default function GalleryCard({ image, title }) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        cursor-pointer
      "
    >
      {/* Image */}

      <img
        src={image}
        alt={title}
        loading="lazy"
        className="
          w-full
          h-[320px]
          object-cover
          transition-all
          duration-500
          group-hover:scale-110
        "
      />

      {/* Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-black/20
          group-hover:bg-black/45
          transition-all
          duration-500
        "
      ></div>

      {/* Title */}

      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          p-6
          translate-y-full
          group-hover:translate-y-0
          transition-all
          duration-500
        "
      >
        <h3 className="text-white text-2xl font-semibold">
          {title}
        </h3>
      </div>
    </div>
  );
}