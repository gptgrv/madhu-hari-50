"use client";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Our Story", href: "#timeline" },
  { label: "Travels", href: "#travels" },
  { label: "Two Halves", href: "#personalities" },
  { label: "Gallery", href: "#gallery" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleSendWishes() {
    const section = document.getElementById("wall-of-love");
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.dispatchEvent(new CustomEvent("open-wish-form"));
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <a
          href="#hero"
          className="font-[family-name:var(--font-serif)] text-lg font-semibold text-gold-dark"
        >
          H & M
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-text-muted hover:text-gold-dark transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Send Wishes — always visible top right */}
        <button
          onClick={handleSendWishes}
          className="bg-gradient-to-r from-gold-dark to-gold text-white px-4 py-2 rounded-full text-sm font-semibold shadow hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-300"
        >
          💌 Send Wishes
        </button>
      </div>
    </nav>
  );
}
