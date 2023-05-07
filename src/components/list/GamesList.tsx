import { useEffect, useState } from "react";
import GameItem from "./GameItem";

export type GameData = {
  title: string;
  thumb: string;
};

export default function GamesList() {
  const [gamesList, setGamesList] = useState<GameData[]>([]);

  useEffect(() => {
    async function getData() {
      const response = await window.fetch(
        "https://www.cheapshark.com/api/1.0/deals?storeID=1&sortBy=recent"
      );
      const data = await response.json();
      setGamesList(data);
    }
    getData();
  }, []);
  console.log(gamesList);
  return (
    <>
      {gamesList.map((game) => (
        <GameItem key={game.title} title={game.title} thumb={game.thumb}/>
      ))}
    </>
  );
}
