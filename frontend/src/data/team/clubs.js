import { PEOPLE } from "./people";

/**
 * Official SPArC Clubs.
 * Note: HR, Logistics, Press & Media, and Digital Desk are SPArC Functional Bodies, NOT Clubs.
 */
export const officialClubs = [
  {
    id: "literary-club",
    name: "Literary Club",
    description: "Fostering creative writing, poetry sessions, debates, book discussions and multilingual expression.",
    moderator: PEOPLE["rohit-sharma"],
    members: [
      PEOPLE["anusha-das"],
      PEOPLE["aaliya-kauser"],
      PEOPLE["umme-adiba"],
      PEOPLE["tushar-kumbhakar"]
    ]
  },
  {
    id: "fine-art-club",
    name: "Fine Art Club",
    description: "Inspiring visual artistry, poster design, sketching, exhibition curation and creative art workshops.",
    moderator: PEOPLE["deepankar-das"],
    members: [
      PEOPLE["shruti-mandal"],
      PEOPLE["manasi-kumari"],
      PEOPLE["anidhya-kumari"]
    ]
  },
  {
    id: "book-club",
    name: "Book Club",
    description: "Encouraging a vibrant reading culture, critical book reviews, author spotlights and literary circles.",
    moderator: PEOPLE["astha-priya"],
    members: [
      PEOPLE["anupama-singh"],
      PEOPLE["bhumika-patar"],
      PEOPLE["ayna-marziya"]
    ]
  },
  {
    id: "music-club",
    name: "Music Club",
    description: "Celebrating melody, rhythm, vocal harmonies, band performances and musical competitions.",
    moderator: PEOPLE["sujata-bhadra"],
    members: [
      PEOPLE["abishek-hansda"],
      PEOPLE["anitro-siddharto"],
      PEOPLE["varsha-durai-buru"],
      PEOPLE["swati-kumari"]
    ]
  },
  {
    id: "drama-club",
    name: "Drama Club",
    description: "Bringing stories to life through theatrical plays, street plays (Nukkad Natak), and mime acts.",
    moderator: PEOPLE["rahul-soren"],
    members: [
      PEOPLE["raunak-roushan"],
      PEOPLE["sumit-bari"]
    ]
  }
];
