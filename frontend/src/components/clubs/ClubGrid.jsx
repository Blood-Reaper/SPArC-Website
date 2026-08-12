import Stagger from "../common/Stagger";
import ClubCard from "./ClubCard";

export default function ClubGrid({ clubs }) {
  return (
    <Stagger className="grid grid-3">
      {clubs.map((club) => (
        <ClubCard club={club} key={club.id} />
      ))}
    </Stagger>
  );
}
