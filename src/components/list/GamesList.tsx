import { useEffect, useState } from "react";
import GameItem from "./GameItem";

export default function GamesList() {
  const [gamesList, setGamesList] = useState<{ title: string }[]>([
    { title: "game1" },
    { title: "game2" },
  ]);

  useEffect(() => {
    async function getData() {
      const response = await window.fetch(
        "https://www.cheapshark.com/api/1.0/deals?storeID=1&sortBy=recent"
      );
      const data = await response.json();
      setGamesList(data)
    }
    getData();
  }, []);

  return (
    <>
      {gamesList.map((game) => (
        <GameItem key={game.title} name={game.title} />
      ))}
    </>
  );
}
