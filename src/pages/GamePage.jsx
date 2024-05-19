import {useState} from 'react';

import EnemySide from "../components/EnemySide";
import UserSide from "../components/UserSide";

export default function GamePage() {
  const [nexusHp, setNexusHp] = useState(10);
  const [enemyNexusHp, setEnemyNexusHp] = useState(10);

  return (
    <>
      <EnemySide nexusHp={enemyNexusHp} setNexusHp={setNexusHp}/>
      <UserSide nexusHp={nexusHp} setEnemyNexusHp={setEnemyNexusHp} />
    </>
  );
}
