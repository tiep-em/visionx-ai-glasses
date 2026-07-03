import GalleryCard from "./GalleryCard";
import { galleryData } from "../data/galleryData";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-24 bg-[#05070D]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-blue-500 uppercase tracking-widest mb-4">
            Gallery
          </p>

          <h2 className="text-5xl font-bold text-white">
            See VisionX From Every Angle
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Explore every detail of VisionX AI Glasses through premium
            product photography and real-life usage.
          </p>

        </div>

        {/* Images */}

        <div className="grid md:grid-cols-2 gap-8">

          {galleryData.map((item) => (
            <GalleryCard
              key={item.title}
              image={item.image}
              title={item.title}
            />
          ))}

        </div>

      </div>
    </section>
  );
}