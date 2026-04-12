"use client";
import { useState, useEffect } from "react";

const heroPhotos = [
  { src: "/photos/hero-1.JPG", alt: "Tea garden, South India" },
  { src: "/photos/Seoul-palace-both-night.jpeg", alt: "Seoul Palace at night" },
  { src: "/photos/hero-3.jpeg", alt: "Young Hari & Madhu — the early years" },
  { src: "/photos/510748313_9997095600374570_9068290014702434216_n.jpg", alt: "Ladakh" },
  { src: "/photos/WhatsApp Image 2026-04-12 at 14.23.13 (3).jpeg", alt: "Paris, Eiffel Tower" },
  { src: "/photos/494203148_10227467962756693_8896643948193738416_n.jpg", alt: "Universal Studios, Singapore" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % heroPhotos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background — all images stacked, only active one visible */}
      <div className="absolute inset-0 bg-[#2d1810]">
        {heroPhotos.map((photo, i) => (
          <img
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: i === current ? 0.42 : 0,
              transition: "opacity 1200ms ease-in-out",
              zIndex: i === current ? 1 : 0,
            }}
          />
        ))}
      </div>

      {/* Dark gradient overlay — stronger at top/bottom for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60" />

      {/* Photo dots indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroPhotos.map((_, i) => (
          <button
            key={i}
            onClick={() => { setFading(true); setTimeout(() => { setCurrent(i); setFading(false); }, 400); }}
            className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-2 bg-gold" : "w-2 h-2 bg-white/40"}`}
          />
        ))}
      </div>

      {/* Decorative */}
      <div className="absolute bottom-20 right-10 text-5xl opacity-20 float-animation" style={{ animationDelay: "1s" }}>✨</div>
      <div className="absolute top-1/4 right-1/4 text-4xl opacity-10 float-animation" style={{ animationDelay: "2s" }}>💍</div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <p className="text-gold-light text-lg md:text-xl tracking-[0.3em] uppercase mb-4 font-medium">
          Celebrating
        </p>

        <h1 className="font-[family-name:var(--font-serif)] text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
          <span className="gold-shimmer">50</span>
          <span className="text-cream"> Golden Years</span>
        </h1>

        <p className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl text-gold-light italic mb-2">
          सुनहरे 50 साल
        </p>

        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-8" />

        <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-5xl text-white font-semibold mb-2">
          Dr Hari Gupta
        </h2>
        <p className="text-gold-light text-2xl md:text-3xl font-[family-name:var(--font-serif)] italic mb-2">&</p>
        <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-5xl text-white font-semibold mb-8">
          Madhu Gupta
        </h2>

        <p className="text-cream/80 text-lg md:text-xl tracking-wide">
          14th April 1976 — 14th April 2026
        </p>
        <p className="text-gold-light/70 text-base mt-2 italic">
          &ldquo;एक प्यार का नगमा है, मौजों की रवानी है...&rdquo;
        </p>

        <div className="mt-16 animate-bounce">
          <a href="#timeline" className="text-gold-light/60 text-3xl">↓</a>
        </div>
      </div>
    </section>
  );
}
