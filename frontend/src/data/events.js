export const featuredEvent = {
  id: "satrang-2026",
  name: "SATRANG 2026",
  tag: "Mega Event",
  tagline: "The celebration of everything.",
  description:
    "Our flagship three-day cultural festival — music, dance, drama and everything in between.",
  dateLabel: "Sept 30 – Oct 2, 2026",
  venue: "Main Auditorium, Karim City College",
  countdownTarget: "2026-09-30T09:00:00",
  about:
    "SATRANG is SPArC's flagship annual festival, bringing every club together for three days of competitions, performances and workshops open to the entire college.",
  schedule: [
    "Day 1 — Curtain Raiser & Music Night",
    "Day 2 — Drama & Dance Finals",
    "Day 3 — Fine Arts Showcase & Closing",
  ],
  rules: "Team size, eligibility and code of conduct detailed here.",
  sponsors: ["Sponsor", "Sponsor"],
};

export const upcomingEvents = [
  { id: "we-the-poets", name: "We The Poets", tag: "Poetry", dateLabel: "Aug 14, 2026" },
  { id: "enigma", name: "Enigma", tag: "Quiz", dateLabel: "Aug 22, 2026" },
  { id: "qalamkaar", name: "Qalamkaar", tag: "Drama", dateLabel: "Sep 4, 2026" },
  { id: "curtain-raiser", name: "Curtain Raiser", tag: "Orientation", dateLabel: "Sep 12, 2026" },
];

export const pastEvents = [
  { id: "satrang-25", name: "SATRANG '25", tag: "Satrang '25", year: 2025 },
  { id: "qalamkaar-25", name: "Qalamkaar '25", tag: "Qalamkaar '25", year: 2025 },
  { id: "enigma-25", name: "Enigma '25", tag: "Enigma '25", year: 2025 },
];

export const pastEventYears = ["All", "2025", "2024", "2023"];

export const allEvents = [featuredEvent, ...upcomingEvents, ...pastEvents];

export const getEventById = (id) => allEvents.find((event) => event.id === id);
