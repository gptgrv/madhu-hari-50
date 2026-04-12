export default function Footer() {
  return (
    <footer className="bg-[#2d1810] text-cream/80 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-[family-name:var(--font-serif)] text-2xl text-gold-light mb-2">
          Dr Hari & Madhu Gupta
        </p>
        <p className="text-cream/50 text-sm mb-6">
          50 years of love, laughter, and togetherness
        </p>

        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto mb-6" />

        <p className="text-gold-light/60 italic text-sm mb-2">
          &ldquo;एक प्यार का नगमा है, मौजों की रवानी है,
          <br />
          ज़िन्दगी और कुछ भी नहीं, तेरी मेरी कहानी है&rdquo;
        </p>

        <p className="text-cream/30 text-xs mt-8">
          Made with 💛 by the family — April 2026
        </p>
      </div>
    </footer>
  );
}
