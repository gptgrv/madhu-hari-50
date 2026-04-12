"use client";
import { useState } from "react";

interface FamilyLetter {
  name: string;
  relation: string;
  emoji: string;
  color: string;
  message: string;
}

const letters: FamilyLetter[] = [
  {
    name: "Garima",
    relation: "Daughter / बेटी",
    emoji: "👧",
    color: "from-pink-50 to-rose-50",
    message:
      "Dear Papa and Mummy, [Your heartfelt message here. Write about your memories, what they mean to you, and your wishes for them.]",
  },
  {
    name: "Gaurav",
    relation: "Son / बेटा",
    emoji: "👦",
    color: "from-blue-50 to-indigo-50",
    message:
      "Dear Papa and Mummy, [Your heartfelt message here. Write about your memories, what they mean to you, and your wishes for them.]",
  },
  {
    name: "Grandchildren",
    relation: "Grandkids / पोते-पोतियाँ",
    emoji: "👶",
    color: "from-amber-50 to-yellow-50",
    message:
      "Dear Nana-Nani / Dada-Dadi, [A sweet message from the grandchildren. Share what makes them the best grandparents!]",
  },
  {
    name: "Son-in-law & Daughter-in-law",
    relation: "Extended Family",
    emoji: "👨‍👩‍👧‍👦",
    color: "from-green-50 to-emerald-50",
    message:
      "[A warm message from the extended family. Share your perspective on being part of this wonderful family.]",
  },
];

export default function FamilyLetters() {
  const [openLetter, setOpenLetter] = useState<number | null>(null);

  return (
    <section id="family-letters" className="py-20 px-4 bg-cream-dark">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl text-center font-bold text-text-dark mb-2">
          From the Family
        </h2>
        <p className="text-center text-gold-dark font-[family-name:var(--font-serif)] italic text-xl mb-4">
          परिवार की ओर से
        </p>
        <p className="text-center text-text-muted mb-16 max-w-xl mx-auto">
          Personal letters from those who know them best — and love them most.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {letters.map((letter, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${letter.color} rounded-2xl border border-gold-light/20 overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300`}
              onClick={() => setOpenLetter(openLetter === i ? null : i)}
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{letter.emoji}</span>
                  <div>
                    <h3 className="font-[family-name:var(--font-serif)] text-xl font-semibold text-text-dark">
                      {letter.name}
                    </h3>
                    <p className="text-text-muted text-sm">{letter.relation}</p>
                  </div>
                </div>

                {openLetter === i ? (
                  <div className="mt-4">
                    <p className="text-text-dark leading-relaxed whitespace-pre-line italic">
                      &ldquo;{letter.message}&rdquo;
                    </p>
                    <p className="text-gold-dark text-sm mt-4 font-medium">Click to close</p>
                  </div>
                ) : (
                  <p className="text-gold-dark text-sm font-medium">
                    ✉️ Click to read the letter...
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
