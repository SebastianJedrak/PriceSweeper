import { useContext, useState } from "react";
import GameItem from "./GameItem";
import { GamesListContext } from "../../ctx/GamesListProvider";
import Pagination from "./Pagination";

const ITEM_PER_PAGE = 10;

export default function GamesList() {
  const gamesFullList = useContext(GamesListContext);

  const [page, setPage] = useState<number>(1);
  const gamesPage = gamesFullList.slice(
    page * ITEM_PER_PAGE - ITEM_PER_PAGE,
    page * ITEM_PER_PAGE
  );

  const numberOfPages = Math.trunc(gamesFullList.length / 10);

  return (
    <>
      {gamesPage.map((game) => (
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
      <Pagination pages={numberOfPages}/>
    </>
  );
}
