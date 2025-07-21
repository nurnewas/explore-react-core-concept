import { useState } from "react";

// player Addition
export default function Team() {
  const [player, setPlayer] = useState(0);
  const handelAddPlayer = () => {
    setPlayer(player + 1);
  };

  // player Substraction
  const handelRemovePlayer = () => {
    setPlayer(player - 1);
  };

  return (
    <>
      <h1>Team</h1>
      <h3>Player: {player}</h3>
      <button onClick={handelAddPlayer}>Add A player</button>
      <button onClick={handelRemovePlayer}>Remove A player</button>
    </>
  );
}
