export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-6 overflow-hidden">
      <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-gold/60" />
      <svg
        width="40"
        height="20"
        viewBox="0 0 40 20"
        className="mx-3 text-gold/50"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M2 10 C8 2, 14 2, 20 10 S32 18, 38 10" />
        <circle cx="20" cy="10" r="2" fill="currentColor" stroke="none" />
      </svg>
      <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-gold/60" />
    </div>
  );
}
