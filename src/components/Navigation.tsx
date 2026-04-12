"use client";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Our Story", href: "#timeline" },
  { label: "Travels", href: "#travels" },
  { label: "Two Halves", href: "#personalities" },
  { label: "Wall of Love", href: "#wall-of-love" },
  { label: "Gallery", href: "#gallery" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

        {/* Desktop */}
        <div className="hidden md:flex gap-6">
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

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gold-dark text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream/98 backdrop-blur-sm border-t border-gold-light/30 px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block text-text-muted hover:text-gold-dark transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
