"use client";

const destinations = [
  { id: 1, name: "Nepal", flag: "🇳🇵" },
  { id: 2, name: "UAE", flag: "🇦🇪" },
  { id: 3, name: "Thailand", flag: "🇹🇭" },
  { id: 4, name: "Singapore", flag: "🇸🇬" },
  { id: 5, name: "South Korea", flag: "🇰🇷" },
  { id: 6, name: "Taiwan", flag: "🇹🇼" },
  { id: 7, name: "France", flag: "🇫🇷" },
  { id: 8, name: "Switzerland", flag: "🇨🇭" },
  { id: 9, name: "Germany", flag: "🇩🇪" },
  { id: 10, name: "Belgium", flag: "🇧🇪" },
  { id: 11, name: "UK", flag: "🇬🇧" },
  { id: 12, name: "Canada", flag: "🇨🇦" },
  { id: 13, name: "USA", flag: "🇺🇸" },
  { id: 14, name: "Tanzania", flag: "🇹🇿" },
  { id: 15, name: "India", flag: "🇮🇳" },
];

// Simplified continent outlines for SVG world map
// Clean, thick strokes, no clutter
function WorldOutlines() {
  return (
    <g opacity="0.12" fill="var(--gold)" stroke="none">
      {/* North America */}
      <path d="M80,100 Q110,70 160,80 Q180,90 190,120 Q185,160 170,180 Q140,200 120,190 Q90,170 80,140 Z" />
      {/* South America */}
      <path d="M150,220 Q170,210 180,230 Q185,270 175,310 Q160,340 150,330 Q140,300 145,260 Z" />
      {/* Europe */}
      <path d="M420,80 Q450,70 480,80 Q500,95 495,120 Q480,130 460,125 Q440,115 430,100 Z" />
      {/* Africa */}
      <path d="M440,150 Q470,140 490,160 Q500,200 490,250 Q470,290 450,280 Q430,250 435,200 Z" />
      {/* Asia */}
      <path d="M520,60 Q600,50 680,70 Q720,100 710,140 Q680,170 640,175 Q580,170 540,150 Q510,120 520,90 Z" />
      {/* India subcontinent */}
      <path d="M570,150 Q590,145 600,160 Q605,190 595,220 Q580,235 570,220 Q565,190 570,160 Z" />
      {/* Southeast Asia / Indonesia */}
      <path d="M640,180 Q670,175 700,185 Q720,195 710,210 Q680,215 650,205 Q635,195 640,180 Z" />
      {/* Australia */}
      <path d="M680,280 Q720,270 750,285 Q760,310 740,330 Q710,335 690,320 Q675,300 680,280 Z" />
    </g>
  );
}

// Marker positions on the SVG — placed relative to continent shapes
const markerPositions: Record<number, { x: number; y: number }> = {
  1: { x: 580, y: 155 }, // Nepal
  2: { x: 530, y: 175 }, // UAE
  3: { x: 640, y: 185 }, // Thailand
  4: { x: 660, y: 210 }, // Singapore
  5: { x: 700, y: 95 }, // South Korea
  6: { x: 710, y: 130 }, // Taiwan
  7: { x: 455, y: 95 }, // France
  8: { x: 465, y: 108 }, // Switzerland
  9: { x: 470, y: 88 }, // Germany
  10: { x: 450, y: 85 }, // Belgium
  11: { x: 435, y: 80 }, // UK
  12: { x: 145, y: 105 }, // Canada
  13: { x: 110, y: 130 }, // USA
  14: { x: 470, y: 240 }, // Tanzania
  15: { x: 592, y: 188 }, // India
};

// Home: Solan
const home = { x: 575, y: 155 };

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

        {/* Stats */}
        <div className="flex justify-center gap-8 md:gap-16 mb-14">
          <div className="text-center">
            <p className="font-[family-name:var(--font-serif)] text-5xl font-bold text-gold-dark">15</p>
            <p className="text-text-muted text-base">Destinations</p>
          </div>
          <div className="w-[1px] bg-gold-light/40" />
          <div className="text-center">
            <p className="font-[family-name:var(--font-serif)] text-5xl font-bold text-gold-dark">5</p>
            <p className="text-text-muted text-base">Continents</p>
          </div>
          <div className="w-[1px] bg-gold-light/40" />
          <div className="text-center">
            <p className="font-[family-name:var(--font-serif)] text-5xl font-bold text-gold-dark">50</p>
            <p className="text-text-muted text-base">Years of Adventure</p>
          </div>
        </div>

        {/* Route map */}
        <div className="bg-white rounded-3xl p-4 md:p-8 shadow-sm border border-gold-light/20 overflow-hidden">
          <svg viewBox="0 0 800 380" className="w-full" style={{ minHeight: 250 }}>
            {/* Background */}
            <rect width="800" height="380" fill="#faf6ee" rx="16" />

            {/* World continent shapes */}
            <WorldOutlines />

            {/* Flight paths from home to each destination */}
            {destinations.map((dest) => {
              const pos = markerPositions[dest.id];
              return (
                <line
                  key={`line-${dest.id}`}
                  x1={home.x} y1={home.y}
                  x2={pos.x} y2={pos.y}
                  stroke="var(--gold)"
                  strokeWidth="1.2"
                  strokeDasharray="6 4"
                  opacity="0.35"
                />
              );
            })}

            {/* Home marker */}
            <circle cx={home.x} cy={home.y} r="10" fill="var(--maroon)" stroke="white" strokeWidth="3" />
            <circle cx={home.x} cy={home.y} r="16" fill="none" stroke="var(--maroon)" strokeWidth="1.5" opacity="0.3">
              <animate attributeName="r" from="10" to="22" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.4" to="0" dur="2s" repeatCount="indefinite" />
            </circle>
            <text x={home.x} y={home.y - 16} textAnchor="middle" fill="var(--maroon)" fontSize="13" fontWeight="700" fontFamily="'Lora',serif">
              🏠 Home
            </text>

            {/* Destination numbered markers */}
            {destinations.map((dest) => {
              const pos = markerPositions[dest.id];
              return (
                <g key={dest.id}>
                  <circle cx={pos.x} cy={pos.y} r="11" fill="var(--gold)" stroke="white" strokeWidth="2.5" />
                  <text x={pos.x} y={pos.y + 4.5} textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="sans-serif">
                    {dest.id}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Legend — numbered flags grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-gold-light/15"
            >
              <span className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                {dest.id}
              </span>
              <span className="text-xl">{dest.flag}</span>
              <span className="text-text-dark font-medium text-base">{dest.name}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-text-muted mt-8 text-base italic">
          ✈️ And the journey continues...
        </p>
      </div>
    </section>
  );
}
