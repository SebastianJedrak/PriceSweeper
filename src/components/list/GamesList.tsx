import { useContext } from "react";
import GameItem from "./GameItem";
import { GamesListContext } from "../../ctx/GamesListProvider";


export default function GamesList() {
  const gamesList = useContext(GamesListContext);

  return (
    <>
      {gamesList.map((game) => (
        <GameItem
          key={game.title}
          title={game.title}
          thumb={game.thumb}
          normalPrice={game.normalPrice}
          salePrice={game.salePrice}
          metacriticScore={game.metacriticScore}
          metacriticLink={game.metacriticLink}
          storeID={game.storeID}
        />
      ))}
    </>
  );
}
