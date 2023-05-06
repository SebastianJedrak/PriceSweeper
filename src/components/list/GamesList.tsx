import { useState } from "react";
import GameItem from "./GameItem";

export default function GamesList() {
  const [gamesList, setGamesList] = useState<string[]>(["game1", "game2"]);

  return (
    <>
      {gamesList.map((game) => (
        <GameItem key={game} name={game} />
      ))}
    </>
  );
}
