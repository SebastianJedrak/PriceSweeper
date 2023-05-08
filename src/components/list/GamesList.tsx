import { useContext, useState } from "react";
import GameItem from "./GameItem";
import { GamesListContext } from "../../ctx/GamesListProvider";
import Pagination from "./Pagination";
import styled from "styled-components";

const ITEM_PER_PAGE = 10;

const Ul = styled.ul`
  margin: 0 auto;
`;

const Select = styled.select`
  margin-left: 10px;
`;

export default function GamesList() {
  const { gamesList } = useContext(GamesListContext);

  const [page, setPage] = useState<number>(1);
  const gamesPage = gamesList.slice(
    page * ITEM_PER_PAGE - ITEM_PER_PAGE,
    page * ITEM_PER_PAGE
  );
  const numberOfPages = Math.trunc(gamesList.length / 10);

  const setPageHandler = (page: number) => {
    setPage(page);
  };

  return (
    <section>
      <Select>
        <option>sortBy</option>
      </Select>
      <Ul>
        {" "}
        {gamesPage.map((game) => (
          <GameItem
            key={`${game.gameID}${game.storeID}`}
            title={game.title}
            thumb={game.thumb}
            normalPrice={game.normalPrice}
            salePrice={game.salePrice}
            metacriticScore={game.metacriticScore}
            metacriticLink={game.metacriticLink}
            storeID={game.storeID}
            gameID={game.gameID}
          />
        ))}
      </Ul>

      <Pagination pages={numberOfPages} onChangePage={setPageHandler} activePage={page}/>
    </section>
  );
}
