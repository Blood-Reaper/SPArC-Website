import { PEOPLE } from "./people";

export const activityMentors = [
  {
    domain: "Music",
    icon: "🎵",
    description: "Guiding vocalists and instrumentalists in classical, light and contemporary music genres.",
    mentors: [
      { ...PEOPLE["pankaj-jha"], role: "Music Mentor" },
      { ...PEOPLE["jitesh-sah"], role: "Music Mentor" }
    ]
  },
  {
    domain: "Drama",
    icon: "🎭",
    description: "Nurturing theatrical performance, stagecraft, scriptwriting and street plays.",
    mentors: [
      { ...PEOPLE["shivlal-sagar"], role: "Drama Mentor" }
    ]
  },
  {
    domain: "Literary",
    icon: "✍️",
    description: "Mentoring creative writing, poetry, debate, essay writing and literary analysis.",
    mentors: [
      { ...PEOPLE["dr-basudhara-roy"], role: "Literary Mentor" }
    ]
  },
  {
    domain: "Fine Arts",
    icon: "🎨",
    description: "Guiding visual arts, painting, sketch craft, sculpture and artistic design.",
    mentors: [
      { ...PEOPLE["apurba-dey"], role: "Fine Arts Mentor" }
    ]
  }
];
