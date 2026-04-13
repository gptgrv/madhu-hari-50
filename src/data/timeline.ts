export interface TimelineEvent {
  year: string;
  title: string;
  titleHi?: string;
  description: string;
  icon: string;
  photo?: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: "~1970s",
    title: "Dr Hari Gupta — The Young Doctor",
    titleHi: "युवा डॉक्टर",
    description: "Before the journey together began — a young, dashing Dr Hari Gupta, MBBS from Darbhanga Medical College. The man who would heal thousands.",
    icon: "🩺",
    photo: "/photos/papa_standing.jpg",
  },
  {
    year: "~1970s",
    title: "Madhu Malita — Chemistry Scholar",
    titleHi: "रसायन शास्त्र की विदुषी",
    description: "At HPU, Madhu completed her MPhil in Chemistry, topped the exam, and impressed her professors so deeply that they encouraged her to continue on to a PhD.",
    icon: "🧪",
    photo: "/photos/madhu_malita.jpeg",
  },
  {
    year: "1976",
    title: "The Beginning",
    titleHi: "शुरुआत",
    description: "Dr Hari Gupta and Madhu tied the knot. A bond that would last a lifetime and beyond.",
    icon: "💍",
    photo: "/photos/beginning.jpeg",
  },
  {
    year: "1976–80",
    title: "Paonta Sahib",
    titleHi: "पांवटा साहिब",
    description: "Papa began his medical service in Paonta Sahib. The first chapter of their journey together.",
    icon: "🏥",
  },
  {
    year: "1980",
    title: "Garima is Born",
    titleHi: "गरिमा का जन्म",
    description: "Their firstborn, Garima, arrived — filling the home with joy.",
    icon: "👶",
    photo: "/photos/garima_born.jpeg",
  },
  {
    year: "1982",
    title: "Gaurav is Born",
    titleHi: "गौरव का जन्म",
    description: "The family grew with the arrival of Gaurav. The team was now complete!",
    icon: "👶",
    photo: "/photos/gaurav_born.jpeg",
  },
  {
    year: "~1983",
    title: "Kasauli Days",
    titleHi: "कसौली के दिन",
    description: "Moved to Kasauli. Papa served at the hospital, Mummy joined St. Mary's School. Pine trees, misty mornings, and a beautiful life in the hills.",
    icon: "🏔️",
  },
  {
    year: "~1985",
    title: "Dharampur Chapter",
    titleHi: "धरमपुर",
    description: "A brief but memorable stint in Dharampur. The kids were growing up fast.",
    icon: "🏡",
  },
  {
    year: "1989",
    title: "Solan — Home Forever",
    titleHi: "सोलन — अपना घर",
    description: "The family settled in Solan — the place they'd call home for decades. Mummy became Principal of MVM School, later joining St. Luke's School.",
    icon: "🏠",
  },
  {
    year: "2006 onwards",
    title: "Grandparents!",
    titleHi: "नाना-नानी बने! दादा-दादी भी",
    description: "The best role yet. Spoiling grandchildren became a full-time job.",
    icon: "👨‍👩‍👧‍👦",
    photo: "/photos/tis-tvi-aala.jpeg",
  },
  {
    year: "2006",
    title: "Papa Retires",
    titleHi: "रिटायरमेंट",
    description: "After decades of healing others, Dr. Hari Gupta retired from service. But the real adventures were just beginning.",
    icon: "🎉",
  },
  {
    year: "2010s",
    title: "The Travel Bug Bites",
    titleHi: "सफ़र शुरू",
    description: "With the kids grown up, the adventures began — Europe, Asia, and beyond. A new country every year!",
    icon: "✈️",
  },
  {
    year: "2026",
    title: "50 Golden Years",
    titleHi: "सुनहरे 50 साल",
    description: "Half a century of love, laughter, chai, and endless journeys together. Here's to many more! 🥂",
    icon: "💛",
  },
];
