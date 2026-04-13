"use client";
import { useState, useEffect, useRef } from "react";

const heroPhotos = [
  { src: "/photos/hero-1.JPG", alt: "Sushi restaurant, Japan", pos: "40% center" },
  { src: "/photos/hero-2.jpg", alt: "Seoul Palace at night", pos: "center" },
  { src: "/photos/hero-3.jpg", alt: "Young Hari & Madhu — the early years", pos: "center" },
  { src: "/photos/hero-4.JPG", alt: "Ladakh", pos: "center" },
  { src: "/photos/hero-5.jpg", alt: "Paris, Eiffel Tower", pos: "center" },
  { src: "/photos/hero-6.jpg", alt: "Universal Studios, Singapore", pos: "30% center" },
  { src: "/photos/hero-7.jpg", alt: "Golden anniversary memory", pos: "center" },
  { src: "/photos/hero-7X.jpg", alt: "Golden anniversary memory", pos: "center" },
  { src: "/photos/hero-8.jpg", alt: "Another treasured moment together", pos: "center" },
  { src: "/photos/hero-1XX.jpg", alt: "Hari & Madhu together", pos: "center" },
  { src: "/photos/hero-3XX.jpg", alt: "Hari & Madhu together", pos: "center" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % heroPhotos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Animate "50" counter on load
  useEffect(() => {
    if (counted.current) return;
    counted.current = true;
    let start: number | null = null;
    const duration = 3500;
    function animate(ts: number) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // Ease-out cubic for elegant deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * 50));
      if (progress < 1) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
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
              objectPosition: photo.pos,
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
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-2 bg-gold" : "w-2 h-2 bg-white/40"}`}
            aria-label={`Go to photo ${i + 1}`}
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
          <span ref={countRef} className="gold-shimmer">{count}</span>
          <span className="text-cream"> Golden Years</span>
        </h1>

        <p className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl text-gold-light italic mb-2">
          सुनहरे 50 साल
        </p>

        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-8" />

        <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-5xl text-white font-semibold mb-2">
          Madhu Gupta
        </h2>
        <p className="text-gold-light text-2xl md:text-3xl font-[family-name:var(--font-serif)] italic mb-2">&</p>
        <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-5xl text-white font-semibold mb-8">
          Dr Hari Gupta
        </h2>

        <p className="text-cream/80 text-lg md:text-xl tracking-wide">
          14th April 2026
        </p>
        <p className="text-gold-light text-lg md:text-xl mt-2 font-[family-name:var(--font-serif)] italic">
          And the celebration continues...
        </p>
        <p className="text-gold-light/70 text-base mt-3 italic">
          &ldquo;एक प्यार का नगमा है, मौजों की रवानी है...&rdquo;
        </p>

        <div className="mt-16 animate-bounce">
          <a href="#timeline" className="text-gold-light/60 text-3xl">↓</a>
        </div>
      </div>
    </section>
  );
}
