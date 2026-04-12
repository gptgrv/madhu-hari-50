"use client";
import { useEffect, useRef } from "react";
import { timelineEvents } from "@/data/timeline";

export default function Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll(".timeline-item");
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline" className="py-20 px-4 bg-cream" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl text-center font-bold text-text-dark mb-2">
          Our Story
        </h2>
        <p className="text-center text-gold-dark font-[family-name:var(--font-serif)] italic text-xl mb-16">
          हमारी कहानी
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="timeline-line hidden md:block" />

          <div className="space-y-12">
            {timelineEvents.map((event, i) => (
              <div
                key={i}
                className={`timeline-item relative flex flex-col md:flex-row items-start md:items-center gap-4 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {/* Content card */}
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gold-light/20 hover:shadow-md hover:border-gold-light/40 transition-all duration-300">
                    <span className="text-3xl mb-2 block">{event.icon}</span>
                    <span className="text-gold-dark font-bold text-sm tracking-wider uppercase">
                      {event.year}
                    </span>
                    <h3 className="font-[family-name:var(--font-serif)] text-xl font-semibold text-text-dark mt-1">
                      {event.title}
                    </h3>
                    {event.titleHi && (
                      <p className="text-gold-dark/70 text-sm italic">{event.titleHi}</p>
                    )}
                    <p className="text-text-muted mt-2 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold border-4 border-cream z-10" />

                {/* Spacer for other side */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
