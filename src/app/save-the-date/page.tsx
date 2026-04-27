import Image from "next/image";

export const metadata = {
  title: "Save the Date · Hari & Madhu 50",
};

export default function SaveTheDate() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-neutral-900 p-4 print:p-0 print:bg-white">
      <div
        className="card relative overflow-hidden shadow-2xl"
        style={{
          width: "1080px",
          height: "1920px",
          transform: "scale(var(--card-scale, 1))",
          transformOrigin: "top center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#fdf4e3] via-[#f5e3c4] to-[#7a1f3d]" />

        <div className="absolute inset-0 opacity-20 pointer-events-none"
             style={{
               backgroundImage:
                 "radial-gradient(circle at 20% 10%, #fff 0, transparent 40%), radial-gradient(circle at 85% 80%, #c9a84c 0, transparent 50%)",
             }}
        />

        <div className="absolute bottom-0 left-0 right-0 h-[55%] pointer-events-none">
          <svg viewBox="0 0 1080 1000" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,1000 L0,650 L150,500 L300,600 L450,400 L600,550 L780,350 L900,500 L1080,430 L1080,1000 Z"
                  fill="#3a2a3a" opacity="0.45" />
            <path d="M0,1000 L0,750 L120,650 L260,730 L400,570 L560,670 L720,550 L880,650 L1080,590 L1080,1000 Z"
                  fill="#2a1a2a" opacity="0.65" />
          </svg>

          <svg viewBox="0 0 1080 1000" className="w-full h-full absolute inset-0" preserveAspectRatio="none" fill="#0a0610">
            {/* Two rows: back row (smaller, lighter) + front row (taller, darker) */}
            {([
              // back row — shorter, offset
              [85,  940, 260, 28, 0.38],
              [165, 940, 210, 22, 0.38],
              [245, 940, 280, 30, 0.40],
              [320, 940, 195, 20, 0.38],
              [395, 940, 265, 28, 0.40],
              [475, 940, 230, 24, 0.38],
              [550, 940, 275, 29, 0.40],
              [625, 940, 205, 21, 0.38],
              [700, 940, 260, 27, 0.40],
              [775, 940, 215, 22, 0.38],
              [850, 940, 270, 29, 0.40],
              [925, 940, 195, 20, 0.38],
              [1000,940, 255, 27, 0.38],
              // front row — taller, darker
              [40,  1000, 370, 44, 0.72],
              [115, 1000, 300, 36, 0.70],
              [185, 1000, 420, 50, 0.74],
              [260, 1000, 275, 32, 0.70],
              [325, 1000, 360, 43, 0.75],
              [395, 1000, 240, 29, 0.70],
              [455, 1000, 400, 48, 0.76],
              [530, 1000, 330, 39, 0.74],
              [600, 1000, 385, 46, 0.78],
              [670, 1000, 260, 31, 0.76],
              [735, 1000, 370, 44, 0.78],
              [805, 1000, 295, 35, 0.76],
              [870, 1000, 415, 50, 0.80],
              [945, 1000, 340, 40, 0.80],
              [1015,1000, 270, 32, 0.76],
            ] as [number,number,number,number,number][]).map(([cx, base, h, hw, op], i) => (
              <polygon
                key={i}
                opacity={op}
                points={`${cx},${base - h} ${cx - hw},${base} ${cx + hw},${base}`}
              />
            ))}
          </svg>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-between py-32 px-20 text-center">
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-6">
              <span className="h-px w-20 bg-[#a07c2a]" />
              <span
                className="text-[#7a1f3d] tracking-[0.5em] text-sm font-semibold uppercase"
                style={{ fontFamily: "Lora, Georgia, serif" }}
              >
                Save the Date
              </span>
              <span className="h-px w-20 bg-[#a07c2a]" />
            </div>

            <h1
              className="text-[#2d1810] leading-none"
              style={{
                fontFamily: "Playfair Display, Georgia, serif",
                fontSize: "120px",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              Madhu <span className="italic font-normal text-[#7a1f3d]">&amp;</span> Hari
            </h1>

            <div
              className="text-[#a07c2a]"
              style={{
                fontFamily: "Playfair Display, Georgia, serif",
                fontSize: "280px",
                fontWeight: 700,
                lineHeight: 0.9,
                letterSpacing: "-0.04em",
                textShadow: "0 4px 20px rgba(160, 124, 42, 0.3)",
              }}
            >
              50
            </div>

            <p
              className="text-[#2d1810] italic max-w-xl"
              style={{
                fontFamily: "Playfair Display, Georgia, serif",
                fontSize: "36px",
                lineHeight: 1.4,
              }}
            >
              One love story,
              <br />
              countless chai cups.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex items-center justify-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden border-[6px] border-[#faf6ee] shadow-2xl">
                  <Image
                    src="/photos/marriage.jpeg"
                    alt="Hari & Madhu, 1976"
                    fill
                    className="object-cover"
                    sizes="300px"
                    priority
                  />
                </div>
                <span className="text-[#7a1f3d] tracking-[0.3em] text-sm font-semibold"
                      style={{ fontFamily: "Lora, Georgia, serif" }}>1976</span>
              </div>

              <div className="flex flex-col items-center text-[#a07c2a]">
                <span style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "60px" }}>→</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden border-[6px] border-[#faf6ee] shadow-2xl">
                  <Image
                    src="/photos/Busan-both.jpeg"
                    alt="Hari & Madhu, today"
                    fill
                    className="object-cover"
                    sizes="300px"
                    priority
                  />
                </div>
                <span className="text-[#7a1f3d] tracking-[0.3em] text-sm font-semibold"
                      style={{ fontFamily: "Lora, Georgia, serif" }}>2026</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 text-[#faf6ee]">
            <div
              className="flex items-center justify-center gap-8"
              style={{ fontFamily: "Playfair Display, Georgia, serif" }}
            >
              <div className="flex flex-col items-end leading-none">
                <span style={{ fontSize: "44px", fontWeight: 600 }}>MAY</span>
              </div>
              <span style={{ fontSize: "120px", fontWeight: 700, lineHeight: 1 }}>16</span>
              <div className="flex flex-col items-start leading-none">
                <span style={{ fontSize: "28px", letterSpacing: "0.3em", fontWeight: 500 }}>2026</span>
              </div>
            </div>

            <div className="flex items-center gap-4 my-2">
              <span className="h-px w-16 bg-[#e8d48b]" />
              <span className="text-[#e8d48b] text-2xl">✦</span>
              <span className="h-px w-16 bg-[#e8d48b]" />
            </div>

            <p
              className="text-[#faf6ee]/95"
              style={{ fontFamily: "Lora, Georgia, serif", fontSize: "32px" }}
            >
              Solan Hills, Himachal
            </p>

            <div
              className="text-[#faf6ee]/85 text-center leading-relaxed"
              style={{ fontFamily: "Lora, Georgia, serif", fontSize: "26px" }}
            >
              Dinner under the stars
              <br />
              <span className="text-[#e8d48b]">·</span> overnight stay <span className="text-[#e8d48b]">·</span>
            </div>

            <p
              className="text-[#e8d48b] mt-6 italic"
              style={{ fontFamily: "Lora, Georgia, serif", fontSize: "22px" }}
            >
              Trade plains heat for hill breeze.
              <br />
              Block the date. Come ready to dance.
            </p>

            <p
              className="text-[#faf6ee]/60 mt-4 tracking-[0.3em] text-sm uppercase"
              style={{ fontFamily: "Lora, Georgia, serif" }}
            >
              ✶ Details to follow ✶
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1120px) {
          .card { --card-scale: calc((100vw - 32px) / 1080); }
        }
      `}</style>
    </main>
  );
}
