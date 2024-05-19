import Nexus from "./Nexus";
import Mana from "./Mana";
import EndTurnButton from "./EndTurnButton";
import Hand from "./Hand";
import Bench from "./Bench";
import Turf from "./Turf";

export default function UserSide() {
  return (
    <>
      <Nexus />
      <Mana />
      <EndTurnButton />
      <Hand />
      <Bench />
      <Turf />
    </>
  );
}
