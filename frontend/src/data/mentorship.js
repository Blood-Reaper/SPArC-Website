import { PEOPLE } from "./team/people";

export const disciplineMentorshipData = [
  {
    id: "music",
    domain: "Music",
    tagline: "Melody, Rhythm & Vocal Harmonies",
    description:
      "Guiding vocalists and instrumentalists in classical, light, and contemporary music genres. Mentors help students refine pitch, arrangement, ensemble dynamics, and stage presence for college showcases and national meets.",
    imageLabel: "Music Discipline Photography",
    mentors: [
      {
        ...PEOPLE["pankaj-jha"],
        role: "Activity Class Mentor (Music)",
        bio: "Veteran musical mentor specializing in classical vocal training and ensemble arrangement.",
      },
      {
        ...PEOPLE["jitesh-sah"],
        role: "Activity Class Mentor (Music)",
        bio: "Accomplished instrumentalist guiding band dynamics, light music, and sound design.",
      },
    ],
    club: {
      name: "Music Club",
      route: "/clubs/music-club",
      shortDesc: "Celebrate melody, rhythm, band performances, and musical competitions.",
    },
  },
  {
    id: "drama",
    domain: "Drama",
    tagline: "Stagecraft, Scripting & Street Theatre",
    description:
      "Nurturing theatrical performance, stagecraft, scriptwriting, and street plays (Nukkad Natak). Drama mentors train students in expression, voice modulation, mime, and impactful dramatic storytelling.",
    imageLabel: "Drama & Theatre Discipline Photography",
    mentors: [
      {
        ...PEOPLE["shivlal-sagar"],
        role: "Activity Class Mentor (Drama)",
        bio: "Prominent theatre director and actor guiding stage technique, voice modulation, and dramatic scripting.",
      },
    ],
    club: {
      name: "Drama Club",
      route: "/clubs/drama-club",
      shortDesc: "Bring stories to life through theatrical plays, street plays, and mime acts.",
    },
  },
  {
    id: "literary",
    domain: "Literary",
    tagline: "Creative Writing, Poetry & Oratory",
    description:
      "Mentoring creative writing, poetry, debate, essay writing, and literary analysis. Fostering sharp critical thought, articulate public speaking, and published student literature across multiple languages.",
    imageLabel: "Literary & Publishing Discipline Photography",
    mentors: [
      {
        ...PEOPLE["dr-basudhara-roy"],
        role: "Activity Class Mentor (Literary)",
        bio: "Published author and academician mentoring student poets, essayists, debaters, and journal editors.",
      },
    ],
    club: {
      name: "Literary Club",
      route: "/clubs/literary-club",
      shortDesc: "Fostering creative writing, poetry sessions, debates, and multilingual expression.",
    },
  },
  {
    id: "fine-arts",
    domain: "Fine Arts",
    tagline: "Visual Artistry, Sketching & Curation",
    description:
      "Guiding visual arts, painting, sketch craft, sculpture, poster design, and exhibition curation. Encouraging students to explore traditional and contemporary visual mediums.",
    imageLabel: "Fine Arts & Visual Media Photography",
    mentors: [
      {
        ...PEOPLE["apurba-dey"],
        role: "Activity Class Mentor (Fine Arts)",
        bio: "Renowned visual artist and painter training students in canvas techniques, sketching, and exhibition design.",
      },
    ],
    club: {
      name: "Fine Art Club",
      route: "/clubs/fine-art-club",
      shortDesc: "Inspiring visual artistry, poster design, sketching, and exhibition curation.",
    },
  },
];
