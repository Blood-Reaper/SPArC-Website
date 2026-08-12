import { PEOPLE } from "./people";

/**
 * SPArC Functional Bodies.
 * These are organizational support units responsible for operations, human resources, media, and digital presence.
 */
export const sparcBodies = [
  {
    id: "hr",
    name: "HR",
    description: "Managing student volunteer orientation, team coordination, conflict resolution and member welfare.",
    moderator: PEOPLE["afsana-khaatoon"],
    members: [
      PEOPLE["taniya-parveen"],
      PEOPLE["farheen"],
      PEOPLE["anu-jha"],
      PEOPLE["ipshita-mangaraj"]
    ]
  },
  {
    id: "logistics",
    name: "Logistics",
    description: "Overseeing venue management, equipment setup, stage management, transport and event infrastructure.",
    moderator: PEOPLE["gourav-mahato"],
    members: [
      PEOPLE["hanifa-moab"],
      PEOPLE["aashish-mahato"],
      PEOPLE["aryan-kumar"]
    ]
  },
  {
    id: "press-media",
    name: "Press & Media",
    description: "Managing press relations, event documentation, photography, journalism and official announcements.",
    moderator: PEOPLE["moushami-kalindi"],
    members: [
      PEOPLE["sanskriti-sharma"],
      PEOPLE["sundar-hembrom"]
    ]
  },
  {
    id: "digital-desk",
    name: "Digital Desk",
    description: "Handling digital assets, web updates, social media outreach, graphic design and live streaming.",
    moderator: PEOPLE["rishu-kumar-singh"],
    members: [
      PEOPLE["ritik-gorasawe"],
      PEOPLE["sartaj-fatima"]
    ]
  }
];
