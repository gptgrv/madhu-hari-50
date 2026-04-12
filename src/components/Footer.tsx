export default function Footer() {
  return (
    <footer className="bg-[#2d1810] text-cream/80">
      {/* Emotional CTA */}
      <div className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <img
            src="/photos/footer-together.jpg"
            alt="Madhu & Dr Hari Gupta"
            className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-full mx-auto mb-8 border-4 border-gold/40 shadow-lg shadow-gold/20"
          />
          <p className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl text-gold-light font-semibold mb-3">
            Here&apos;s to 50 more
          </p>
          <p className="text-cream/60 text-lg max-w-xl mx-auto mb-8">
            Half a century of love, laughter, chai, and countless journeys together.
            The best is yet to come.
          </p>
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto mb-8" />
          <p className="text-gold-light/50 italic text-base">
            &ldquo;एक प्यार का नगमा है, मौजों की रवानी है,
            <br />
            ज़िन्दगी और कुछ भी नहीं, तेरी मेरी कहानी है&rdquo;
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10 py-4 px-4">
        <p className="text-cream/30 text-xs text-center">
          Made with 💛 by the family — April 2026
        </p>
      </div>
    </footer>
  );
}
