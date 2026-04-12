"use client";
import { useState } from "react";

const galleryPhotos = [
  { src: "/photos/Taipei-hotel-both.jpeg", caption: "Grand National Theatre, Taipei" },
  { src: "/photos/Busan-both.jpeg", caption: "Marina nights, Busan" },
  { src: "/photos/Busan-both-boat.jpeg", caption: "Harbour cruise, Busan 2022" },
  { src: "/photos/Taipei-hotel-both.jpeg", caption: "Grand hall, Taipei" },
  { src: "/photos/Taipei-both-temple.jpeg", caption: "Temple visit, Taipei" },
  { src: "/photos/Taipei-metro-both.jpeg", caption: "Cable car, Taipei 2025" },
  { src: "/photos/Taipei-2025-sipping-boba_tea.jpg", caption: "Boba tea in Taipei — when in Taiwan!" },
  { src: "/photos/Taipei-2025-windy.jpg", caption: "Stormy coast, Taipei 2025" },
  { src: "/photos/Thailand-2026.jpg", caption: "Thailand 2026", rotate: true },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl text-center font-bold text-text-dark mb-2">
          Moments to Remember
        </h2>
        <p className="text-center text-gold-dark font-[family-name:var(--font-serif)] italic text-xl mb-16">
          यादों के लम्हे
        </p>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryPhotos.map((photo, i) => (
            <div
              key={i}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => setLightbox(i)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={photo.rotate ? { transform: "rotate(90deg) scale(1.4)", transformOrigin: "center" } : {}}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium">{photo.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-text-muted mt-8 text-sm italic">
          📸 More photos coming soon — this is just the beginning!
        </p>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl hover:text-gold-light transition-colors"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
          <button
            className="absolute left-4 text-white text-4xl hover:text-gold-light transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(lightbox > 0 ? lightbox - 1 : galleryPhotos.length - 1);
            }}
          >
            ‹
          </button>
          <img
            src={galleryPhotos[lightbox].src}
            alt={galleryPhotos[lightbox].caption}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 text-white text-4xl hover:text-gold-light transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(lightbox < galleryPhotos.length - 1 ? lightbox + 1 : 0);
            }}
          >
            ›
          </button>
          <p className="absolute bottom-6 text-white/80 text-sm">
            {galleryPhotos[lightbox].caption}
          </p>
        </div>
      )}
    </section>
  );
}
