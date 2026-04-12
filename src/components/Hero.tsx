"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2d1810] via-[#3d2520] to-[#2d1810]">
        {/* Photo 1 */}
        <div className="absolute inset-0 hero-img-1">
          <img
            src="/photos/hero-1.JPG"
            alt="Dr Hari & Madhu Gupta"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        {/* Photo 2 */}
        <div className="absolute inset-0 hero-img-2">
          <img
            src="/photos/Seoul-palace-both-night.jpeg"
            alt="Dr Hari & Madhu Gupta at Seoul Palace"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
      </div>

      {/* Decorative elements */}
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

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <a href="#timeline" className="text-gold-light/60 text-3xl">↓</a>
        </div>
      </div>
    </section>
  );
}
