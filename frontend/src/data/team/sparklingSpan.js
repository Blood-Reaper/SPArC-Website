import { PEOPLE } from "./people";

/**
 * Sparkling Span - Official Magazine of SPArC.
 * Distinct editorial team responsible for publishing creative writing, art, and journalism.
 */
export const sparklingSpanTeam = {
  title: "Sparkling Span",
  subtitle: "Official Magazine of SPArC",
  description:
    "The flagship annual publication capturing the literary reflections, multilingual poetry, art essays, and cultural archives of Karim City College.",
  chiefEditor: {
    ...PEOPLE["harmeet-bawa"],
    role: "Chief Editor"
  },
  editors: [
    { ...PEOPLE["sabiha-firdaus"], role: "Editor, Urdu" },
    { ...PEOPLE["anusha-das"], role: "Editor, English" },
    { ...PEOPLE["farheen"], role: "Editor, Hindi" },
    { ...PEOPLE["shruti-mandal"], role: "Editor, Bangla" },
    { ...PEOPLE["rishu-kumar-singh"], role: "Editor, Designing" }
  ]
};
