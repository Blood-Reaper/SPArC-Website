import { clubs } from "./clubs";

export const portalRoles = [
  {
    id: "member",
    icon: "🎭",
    eyebrow: "Current Member",
    title: "Member Login",
    description:
      "Already part of SPArC? Log in with your roll number to access your dashboard, event registrations and club activities.",
    flow: "login",
  },
  {
    id: "alumni",
    icon: "🎓",
    eyebrow: "Alumni",
    title: "Alumni Login",
    description:
      "Stay connected with SPArC. Access alumni events, mentorship opportunities and your legacy profile.",
    flow: "login",
  },
  {
    id: "join",
    icon: "✨",
    eyebrow: "New Student",
    title: "Join SPArC",
    description:
      "Ready to explore your creative side? Apply to join one of our clubs and become part of the SPArC family.",
    flow: "join",
  },
];

export const clubOptions = clubs.map((c) => ({
  id: c.id,
  name: c.name,
  category: c.category,
}));

export const branchOptions = [
  "Computer Science & Engineering",
  "Information Technology",
  "Electronics & Communication",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "Chemical Engineering",
  "Biotechnology",
  "Applied Sciences",
  "Management Studies",
  "Other",
];

export const yearOptions = [
  "1st Year",
  "2nd Year",
  "3rd Year",
  "4th Year",
];
