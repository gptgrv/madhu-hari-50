"use client";
import { useState } from "react";

interface Photo {
  src: string;
  caption: string;
  rotate?: boolean;
}

const galleryPhotos: Photo[] = [
  { src: "/photos/both_1.jpeg", caption: "50 golden years together ✨" },
  { src: "/photos/both_2.jpeg", caption: "Together, always 💛" },
  { src: "/photos/train.jpeg", caption: "Journey together 🚂" },
  { src: "/photos/love_both.jpeg", caption: "Love, always 💛" },
  { src: "/photos/madhu_standing.jpeg", caption: "Madhu — grace personified ✨" },
  { src: "/photos/new_1.jpeg", caption: "Another beautiful memory 💛" },
  { src: "/photos/new_2.jpeg", caption: "Cherished moments ✨" },
  { src: "/photos/505919763_9936683243082473_7783100801688979198_n.jpg", caption: "Young family — where it all began 🖤" },
  { src: "/photos/517285402_10228630084569012_5073919397648566496_n.jpg", caption: "Backwater cruise — hats on!" },
  { src: "/photos/517395314_10228586922769994_5501380678310409519_n.jpg", caption: "Karibu Zanzibar! 🌊" },
  { src: "/photos/Taipei-hotel-both.jpeg", caption: "Grand National Theatre, Taipei" },
  { src: "/photos/Busan-both.jpeg", caption: "Marina nights, Busan" },
  { src: "/photos/Busan-both-boat.jpeg", caption: "Harbour cruise, Busan 2022" },
  { src: "/photos/Taipei-both-temple.jpeg", caption: "Temple visit, Taipei" },
  { src: "/photos/Taipei-metro-both.jpeg", caption: "Cable car, Taipei 2025" },
  { src: "/photos/Taipei-2025-sipping-boba_tea.jpg", caption: "Boba tea in Taipei — when in Taiwan!" },
  { src: "/photos/Taipei-2025-windy.jpg", caption: "Stormy coast, Taipei 2025" },
  { src: "/photos/WhatsApp Image 2026-04-12 at 14.23.13 (2).jpeg", caption: "Mount Faber Peak, Singapore" },
  { src: "/photos/WhatsApp Image 2026-04-12 at 14.23.15.jpeg", caption: "Family night out — Ferris wheel!" },
  { src: "/photos/Madhu.jpeg", caption: "Mummy — always the life of the room ✨" },
  { src: "/photos/508165781_9949154331835364_4767380902066963298_n.jpg", caption: "Nalanda ruins, Bihar" },
  { src: "/photos/516853872_10228586923730018_3118254695958738490_n.jpg", caption: "Friends forever" },
  { src: "/photos/mom_dad_usa1.jpeg", caption: "USA memories 🇺🇸" },
  { src: "/photos/mom_dad_usa2.jpeg", caption: "USA memories 🇺🇸" },
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
              <div className="relative overflow-hidden rounded-2xl shadow-sm hover:shadow-lg hover:ring-2 hover:ring-gold/40 transition-all duration-300">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={photo.rotate ? { transform: "rotate(90deg) scale(1.4)", transformOrigin: "center" } : {}}
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent pt-10 pb-3 px-4">
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
          className="fixed inset-0 z-[100] bg-[#2d1810]/95 backdrop-blur-sm flex items-center justify-center p-4"
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
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl shadow-gold/10"
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
