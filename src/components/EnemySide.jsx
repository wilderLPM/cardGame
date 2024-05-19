import Nexus from "./Nexus";
import Hand from "./Hand";
import Bench from "./Bench";
import Turf from "./Turf";

export default function EnemySide({nexusHp}) {
  return (
    <>
      <Nexus nexusHp={nexusHp} />
      <Hand />
      <Bench />
      <Turf />
    </>
  );
}
