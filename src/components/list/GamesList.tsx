import { useEffect, useState } from "react";
import GameItem from "./GameItem";

export default function GamesList() {
  const [gamesList, setGamesList] = useState<string[]>(["game1", "game2"]);
  useEffect(() => {
    async function getData(){
      const fetch = await window.fetch(
        
        "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15"
      );
      const data = fetch.json();
      console.log(data);
    }
  }, []);

  return (
    <>
      {gamesList.map((game) => (
        <GameItem key={game} name={game} />
      ))}
    </>
  );
}
