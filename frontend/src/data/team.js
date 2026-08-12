/**
 * SPArC Team Data Entry Point
 * Exports all team collections from modular sub-files in src/data/team/
 */
export * from "./team/people";
export * from "./team/leadership";
export * from "./team/executive";
export * from "./team/advisory";
export * from "./team/mentors";
export * from "./team/studentOrganising";
export * from "./team/clubs";
export * from "./team/bodies";
export * from "./team/sparklingSpan";

// Legacy exports for backward compatibility across other components (e.g. TeamPreview)
import { studentLeadershipByYear } from "./team/studentOrganising";
import { officialClubs } from "./team/clubs";
import { institutionalLeadership } from "./team/leadership";
import { executiveCommittee } from "./team/executive";

export const faculty = institutionalLeadership.map((p) => ({
  name: p.name,
  role: p.role,
}));

export const executiveCommitteeLegacy = executiveCommittee.map((p) => ({
  name: p.name,
  role: p.role,
}));

export const clubCoordinators = officialClubs.map((club) => ({
  name: club.moderator.name,
  role: `${club.name} Moderator`,
}));

export const pastLeaders = [];

export const homeCommittee = studentLeadershipByYear["2026–27"]
  ? studentLeadershipByYear["2026–27"].slice(0, 4)
  : [];
