"use client";

export default function Personalities() {
  return (
    <section id="personalities" className="py-20 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl text-center font-bold text-text-dark mb-2">
          Two Halves, One Whole
        </h2>
        <p className="text-center text-gold-dark font-[family-name:var(--font-serif)] italic text-xl mb-16">
          दो आधे, एक पूरा
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-0">
          {/* Papa */}
          <div className="relative bg-gradient-to-br from-[#f5f0e8] to-[#ebe5d8] rounded-2xl md:rounded-r-none p-8 md:p-12 border border-gold-light/20">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gold-light/40 mb-6 mx-auto md:mx-0">
              <img src="/photos/510317981_10228135768611422_6961161557252829862_n.jpg" alt="Dr Hari Gupta" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-[family-name:var(--font-serif)] text-3xl font-bold text-text-dark mb-1">
              Dr Hari Gupta
            </h3>
            <p className="text-gold-dark italic text-sm mb-6">डॉ. हरि गुप्ता — Papa</p>

            <div className="space-y-4">
              <Quality icon="🩺" text="A doctor who healed with care and compassion" />
              <Quality icon="🧘" text="A meditator — calm, centered, and thoughtful" />
              <Quality icon="🙏" text="Courteous to a fault — everyone's gentleman" />
              <Quality icon="📚" text="Thoughtful and reflective, a quiet strength" />
              <Quality icon="🏔️" text="From Paonta to Solan — a life of service in the hills" />
            </div>

            <div className="mt-8 p-4 bg-white/60 rounded-xl border border-gold-light/20">
              <p className="text-text-muted italic text-base">
                &ldquo;The quiet one in the room, but the one everyone looks up to.&rdquo;
              </p>
            </div>
          </div>

          {/* Mummy */}
          <div className="relative bg-gradient-to-br from-[#fdf2f0] to-[#f8e8e4] rounded-2xl md:rounded-l-none p-8 md:p-12 border border-maroon-light/10 md:border-l-0">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-maroon-light/30 mb-6 mx-auto md:mx-0">
              <img src="/photos/madhu_taj.jpeg" alt="Madhu Gupta" className="w-full h-full object-cover object-top" />
            </div>
            <h3 className="font-[family-name:var(--font-serif)] text-3xl font-bold text-text-dark mb-1">
              Madhu Gupta
            </h3>
            <p className="text-maroon italic text-sm mb-6">मधु गुप्ता — Mummy</p>

            <div className="space-y-4">
              <Quality icon="👩‍🏫" text="A chemistry teacher who made learning come alive" color="maroon" />
              <Quality icon="💃" text="Dynamic, chirpy, and full of life" color="maroon" />
              <Quality icon="👥" text="The social butterfly — everyone's friend" color="maroon" />
              <Quality icon="🏫" text="From St. Mary's to Principal of MVM — a leader" color="maroon" />
              <Quality icon="🌟" text="The energy that lights up every room" color="maroon" />
            </div>

            <div className="mt-8 p-4 bg-white/60 rounded-xl border border-maroon-light/10">
              <p className="text-text-muted italic text-base">
                &ldquo;Where Mummy goes, the party follows.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Center merge message */}
        <div className="text-center mt-12">
          <div className="inline-block bg-white rounded-2xl px-8 py-6 shadow-md border border-gold-light/30">
            <p className="font-[family-name:var(--font-serif)] text-2xl text-text-dark font-semibold">
              Together, Complete 💛
            </p>
            <p className="text-text-muted mt-2 italic">
              साथ मिलकर, एक दूसरे को पूरा करते हुए — 50 साल से
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Quality({ icon, text, color = "gold" }: { icon: string; text: string; color?: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-xl flex-shrink-0">{icon}</span>
      <p className={`text-base leading-relaxed ${color === "maroon" ? "text-text-dark" : "text-text-dark"}`}>
        {text}
      </p>
    </div>
  );
}
