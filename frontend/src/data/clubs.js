import { PEOPLE } from "./team/people";

export const clubCategories = [
  "All",
  "Performing Arts",
  "Visual Arts",
  "Literary",
  "Important Bodies",
];

export const clubs = [
  {
    id: "literary-club",
    name: "Literary Club",
    shortName: "Literary",
    category: "Literary",
    tagline: "Fostering creative writing, poetry sessions, debates, book discussions and multilingual expression.",
    description:
      "The Literary Club is where ideas are argued, poems are drafted and stories find their first audience — through debates, creative writing circles, poetry sessions and storytelling nights.",
    since: 2004,
    moderator: PEOPLE["rohit-sharma"],
    members: [
      PEOPLE["anusha-das"],
      PEOPLE["aaliya-kauser"],
      PEOPLE["umme-adiba"],
      PEOPLE["tushar-kumbhakar"],
    ],
    events: ["We The Poets", "Enigma"],
    achievements: [
      { year: 2021, label: "Best Literary Society, District Meet" },
      { year: 2023, label: "State Debate Championship — Runners-up" },
    ],
    relatedClubs: ["book-club", "fine-art-club"],
  },
  {
    id: "fine-art-club",
    name: "Fine Art Club",
    shortName: "Fine Art",
    category: "Visual Arts",
    tagline: "Inspiring visual artistry, poster design, sketching, exhibition curation and creative art workshops.",
    description:
      "The Fine Art Club turns hallways and galleries into canvases — painting, sketching, poster design and installation work produced year-round and showcased at SATRANG.",
    since: 2004,
    moderator: PEOPLE["deepankar-das"],
    members: [
      PEOPLE["shruti-mandal"],
      PEOPLE["manasi-kumari"],
      PEOPLE["anidhya-kumari"],
    ],
    events: ["SATRANG Showcase"],
    achievements: [{ year: 2018, label: "National Winners, Fine Arts" }],
    relatedClubs: ["music-club", "literary-club"],
  },
  {
    id: "book-club",
    name: "Book Club",
    shortName: "Book",
    category: "Literary",
    tagline: "Encouraging a vibrant reading culture, critical book reviews, author spotlights and literary circles.",
    description:
      "A running conversation across genres — the Book Club meets to discuss, review and occasionally disagree passionately about everything on the shelf.",
    since: 2004,
    moderator: PEOPLE["astha-priya"],
    members: [
      PEOPLE["anupama-singh"],
      PEOPLE["bhumika-patar"],
      PEOPLE["ayna-marziya"],
    ],
    events: ["We The Poets"],
    achievements: [],
    relatedClubs: ["literary-club", "fine-art-club"],
  },
  {
    id: "music-club",
    name: "Music Club",
    shortName: "Music",
    category: "Performing Arts",
    tagline: "Celebrating melody, rhythm, vocal harmonies, band performances and musical competitions.",
    description:
      "From classical vocal recitals to fusion bands formed overnight for SATRANG, the Music Club is the sound of SPArC — open to every instrument and every genre.",
    since: 2004,
    moderator: PEOPLE["sujata-bhadra"],
    members: [
      PEOPLE["abishek-hansda"],
      PEOPLE["anitro-siddharto"],
      PEOPLE["varsha-durai-buru"],
      PEOPLE["swati-kumari"],
    ],
    events: ["SATRANG", "Curtain Raiser"],
    achievements: [
      { year: 2019, label: "Best Band, Inter-College Fest" },
      { year: 2024, label: "Regional Music Excellence Award" },
    ],
    relatedClubs: ["drama-club", "fine-art-club"],
  },
  {
    id: "drama-club",
    name: "Drama Club",
    shortName: "Drama",
    category: "Performing Arts",
    tagline: "Bringing stories to life through theatrical plays, street plays (Nukkad Natak), and mime acts.",
    description:
      "From street plays that spark conversation to full-length productions on the main stage, the Drama Club is where students learn to inhabit stories — and tell them boldly.",
    since: 2004,
    moderator: PEOPLE["rahul-soren"],
    members: [
      PEOPLE["raunak-roushan"],
      PEOPLE["sumit-bari"],
    ],
    events: ["Qalamkaar", "Curtain Raiser"],
    achievements: [
      { year: 2022, label: "Best Ensemble, Inter-College Fest" },
      { year: 2024, label: "Regional Theatre Award" },
    ],
    relatedClubs: ["music-club", "literary-club"],
  },
  {
    id: "hr",
    name: "HR (Human Resources)",
    shortName: "HR",
    category: "Important Bodies",
    tagline: "Managing student volunteer orientation, team coordination, conflict resolution and member welfare.",
    description:
      "Managing student volunteer orientation, team coordination, conflict resolution and member welfare across all SPArC operations and event executions.",
    since: 2004,
    moderator: PEOPLE["afsana-khaatoon"],
    members: [
      PEOPLE["taniya-parveen"],
      PEOPLE["farheen"],
      PEOPLE["anu-jha"],
      PEOPLE["ipshita-mangaraj"],
    ],
    events: [],
    achievements: [],
    relatedClubs: ["logistics", "press-media", "digital-desk"],
  },
  {
    id: "logistics",
    name: "Logistics",
    shortName: "Logistics",
    category: "Important Bodies",
    tagline: "Overseeing venue management, equipment setup, stage management, transport and event infrastructure.",
    description:
      "Overseeing venue management, equipment setup, stage management, transport and complete event infrastructure for all SPArC programs.",
    since: 2004,
    moderator: PEOPLE["gourav-mahato"],
    members: [
      PEOPLE["hanifa-moab"],
      PEOPLE["aashish-mahato"],
      PEOPLE["aryan-kumar"],
    ],
    events: [],
    achievements: [],
    relatedClubs: ["hr", "press-media", "digital-desk"],
  },
  {
    id: "press-media",
    name: "Press & Media",
    shortName: "Press & Media",
    category: "Important Bodies",
    tagline: "Managing press relations, event documentation, photography, journalism and official announcements.",
    description:
      "Managing press relations, event documentation, photography, journalism and official announcements across all campus and public channels.",
    since: 2004,
    moderator: PEOPLE["moushami-kalindi"],
    members: [
      PEOPLE["sanskriti-sharma"],
      PEOPLE["sundar-hembrom"],
    ],
    events: [],
    achievements: [],
    relatedClubs: ["digital-desk", "hr", "logistics"],
  },
  {
    id: "digital-desk",
    name: "Digital Desk",
    shortName: "Digital Desk",
    category: "Important Bodies",
    tagline: "Handling digital assets, web updates, social media outreach, graphic design and live streaming.",
    description:
      "Handling digital assets, web updates, social media outreach, graphic design and live streaming for SPArC activities.",
    since: 2004,
    moderator: PEOPLE["rishu-kumar-singh"],
    members: [
      PEOPLE["ritik-gorasawe"],
      PEOPLE["sartaj-fatima"],
    ],
    events: [],
    achievements: [],
    relatedClubs: ["press-media", "hr", "logistics"],
  },
];

export const getClubById = (id) => clubs.find((club) => club.id === id);
