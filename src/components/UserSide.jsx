import {useState} from 'react';

import Nexus from "./Nexus";
import Mana from "./Mana";
import EndTurnButton from "./EndTurnButton";
import Hand from "./Hand";
import Bench from "./Bench";
import Turf from "./Turf";

export default function UserSide({nexusHp, setEnemyNexusHp}) {
  const [turn, setTurn] = useState(1)
  const [currentMana, setCurrentMana] = useState(turn);
  return (
    <div className="userSide">
      <Nexus nexusHp={nexusHp} />
      <Mana currentMana={currentMana} />
      <EndTurnButton turn={turn} setTurn={setTurn} setCurrentMana={setCurrentMana} />
      <Hand currentMana={currentMana} setCurrentMana={setCurrentMana} setEnemyNexusHp={setEnemyNexusHp} />
      <Bench />
      <Turf setEnemyNexusHp={setEnemyNexusHp} />
    </div>
  );
}
