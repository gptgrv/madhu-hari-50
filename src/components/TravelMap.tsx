"use client";
import { travels } from "@/data/travels";

const destinations = travels.filter((t) => t.name !== "Solan");

export default function TravelMap() {
  return (
    <section id="travels" className="py-20 px-4 bg-cream-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl text-center font-bold text-text-dark mb-2">
          Around the World Together
        </h2>
        <p className="text-center text-gold-dark font-[family-name:var(--font-serif)] italic text-xl mb-4">
          साथ-साथ दुनिया भर में
        </p>
        <p className="text-center text-text-muted mb-10 max-w-2xl mx-auto">
          From the hills of Solan to the streets of Paris, from Seoul to Toronto —
          they&apos;ve explored the world hand in hand.
        </p>

        {/* Stats bar */}
        <div className="flex justify-center gap-8 mb-12">
          <div className="text-center">
            <p className="font-[family-name:var(--font-serif)] text-4xl font-bold text-gold-dark">14</p>
            <p className="text-text-muted text-sm">Destinations</p>
          </div>
          <div className="w-[1px] bg-gold-light/40" />
          <div className="text-center">
            <p className="font-[family-name:var(--font-serif)] text-4xl font-bold text-gold-dark">4</p>
            <p className="text-text-muted text-sm">Continents</p>
          </div>
          <div className="w-[1px] bg-gold-light/40" />
          <div className="text-center">
            <p className="font-[family-name:var(--font-serif)] text-4xl font-bold text-gold-dark">50</p>
            <p className="text-text-muted text-sm">Years of Adventure</p>
          </div>
        </div>

        {/* Desktop: SVG map + pills */}
        <div className="hidden md:block">
          <div className="relative bg-white rounded-3xl p-8 shadow-sm border border-gold-light/20 overflow-hidden mb-10">
            <div className="relative w-full" style={{ paddingBottom: "50%" }}>
              <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full" fill="none">
                <rect width="1000" height="500" fill="#faf6ee" rx="16" />
                {[...Array(10)].map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={i * 50} x2="1000" y2={i * 50} stroke="#e8d48b" strokeWidth="0.5" opacity="0.3" />
                ))}
                {[...Array(20)].map((_, i) => (
                  <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="500" stroke="#e8d48b" strokeWidth="0.5" opacity="0.3" />
                ))}
                <ellipse cx="500" cy="140" rx="80" ry="50" fill="#e8d48b" opacity="0.15" />
                <ellipse cx="680" cy="180" rx="120" ry="70" fill="#e8d48b" opacity="0.15" />
                <ellipse cx="250" cy="160" rx="100" ry="70" fill="#e8d48b" opacity="0.15" />
                <ellipse cx="720" cy="280" rx="60" ry="40" fill="#e8d48b" opacity="0.15" />

                {destinations.map((dest) => {
                  const homeX = lngToX(77.0967);
                  const homeY = latToY(30.9045);
                  return (
                    <line
                      key={dest.name}
                      x1={homeX} y1={homeY}
                      x2={lngToX(dest.lng)} y2={latToY(dest.lat)}
                      stroke="#c9a84c" strokeWidth="1" opacity="0.3" strokeDasharray="4 4"
                    />
                  );
                })}

                {/* Home pin */}
                <g>
                  <circle cx={lngToX(77.0967)} cy={latToY(30.9045)} r={9} fill="#7a1f3d" stroke="white" strokeWidth="2" />
                  <circle cx={lngToX(77.0967)} cy={latToY(30.9045)} r="14" fill="none" stroke="#7a1f3d" strokeWidth="1" opacity="0.4">
                    <animate attributeName="r" from="9" to="20" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <text x={lngToX(77.0967)} y={latToY(30.9045) - 13} textAnchor="middle" fill="#7a1f3d" fontSize="9" fontWeight="700" fontFamily="'Lora', serif">Home</text>
                </g>

                {destinations.map((dest) => (
                  <g key={dest.name}>
                    <circle cx={lngToX(dest.lng)} cy={latToY(dest.lat)} r={5} fill="#c9a84c" stroke="white" strokeWidth="2" />
                    <text x={lngToX(dest.lng)} y={latToY(dest.lat) - 9} textAnchor="middle" fill="#2d1810" fontSize="8" fontWeight="600" fontFamily="'Lora', serif">{dest.name}</text>
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>

        {/* Mobile: beautiful destination cards grid */}
        <div className="md:hidden grid grid-cols-2 gap-3 mb-8">
          {destinations.map((dest) => (
            <div
              key={dest.name}
              className="bg-white rounded-2xl p-4 shadow-sm border border-gold-light/20 flex items-center gap-3"
            >
              <span className="text-2xl">{dest.emoji}</span>
              <div>
                <p className="font-semibold text-text-dark text-sm">{dest.name}</p>
                <p className="text-text-muted text-xs">{dest.country}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop pills */}
        <div className="hidden md:flex flex-wrap justify-center gap-3">
          {destinations.map((dest) => (
            <div
              key={dest.name}
              className="bg-white rounded-full px-5 py-2 shadow-sm border border-gold-light/20 hover:border-gold hover:shadow-md transition-all duration-300 cursor-default"
            >
              <span className="mr-2">{dest.emoji}</span>
              <span className="text-text-dark font-medium text-sm">{dest.name}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-text-muted mt-8 text-sm italic">
          ✈️ And the journey continues...
        </p>
      </div>
    </section>
  );
}

function lngToX(lng: number): number {
  return ((lng + 180) / 360) * 1000;
}

function latToY(lat: number): number {
  return ((90 - lat) / 180) * 500;
}
