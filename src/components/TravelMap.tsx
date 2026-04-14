"use client";

const destinations = [
  { name: "Nepal", flag: "🇳🇵" },
  { name: "UAE", flag: "🇦🇪" },
  { name: "Thailand", flag: "🇹🇭" },
  { name: "Singapore", flag: "🇸🇬" },
  { name: "South Korea", flag: "🇰🇷" },
  { name: "Taiwan", flag: "🇹🇼" },
  { name: "France", flag: "🇫🇷" },
  { name: "Switzerland", flag: "🇨🇭" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "Belgium", flag: "🇧🇪" },
  { name: "UK", flag: "🇬🇧" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "USA", flag: "🇺🇸" },
  { name: "Tanzania", flag: "🇹🇿" },
];

export default function TravelMap() {
  return (
    <section id="travels" className="py-20 px-4 bg-cream-dark">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl text-center font-bold text-text-dark mb-2">
          Around the World Together
        </h2>
        <p className="text-center text-gold-dark font-[family-name:var(--font-serif)] italic text-xl mb-4">
          साथ-साथ दुनिया भर में
        </p>
        <p className="text-center text-text-muted mb-10 max-w-2xl mx-auto">
          From Solan to countries across Europe, Asia, Africa, and North America,
          they&apos;ve explored the world hand in hand.
        </p>

        <div className="flex justify-center gap-8 md:gap-16 mb-14">
          <div className="text-center">
            <p className="font-[family-name:var(--font-serif)] text-5xl font-bold text-gold-dark">14</p>
            <p className="text-text-muted text-base">Countries</p>
          </div>
          <div className="w-[1px] bg-gold-light/40" />
          <div className="text-center">
            <p className="font-[family-name:var(--font-serif)] text-5xl font-bold text-gold-dark">4</p>
            <p className="text-text-muted text-base">Continents</p>
          </div>
          <div className="w-[1px] bg-gold-light/40" />
          <div className="text-center">
            <p className="font-[family-name:var(--font-serif)] text-5xl font-bold text-gold-dark">50</p>
            <p className="text-text-muted text-base">Years of Adventure</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gold-light/20">
          <p className="text-center text-text-muted mb-8 max-w-2xl mx-auto">
            Every journey added another story, another photograph, and another memory to
            these 50 years together.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {destinations.map((dest) => (
              <div
                key={dest.name}
                className="flex items-center gap-3 bg-cream rounded-xl px-4 py-3 border border-gold-light/15"
              >
                <span className="text-2xl">{dest.flag}</span>
                <span className="text-text-dark font-medium text-base">{dest.name}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-text-muted mt-8 text-base italic">
          ✈️ And the journey continues...
        </p>
      </div>
    </section>
  );
}
