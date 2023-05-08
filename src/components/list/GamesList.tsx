import { useContext, useState, useRef } from "react";
import GameItem from "./GameItem";
import { GamesListContext } from "../../ctx/GamesListProvider";
import Pagination from "./Pagination";
import styled from "styled-components";
import Button from "../UI/Button";

const ITEM_PER_PAGE = 10;

const Ul = styled.ul`
  margin: 0 auto;
`;

const Select = styled.div`
  
  display: flex;
 select {
  margin: 0 10px;
 }
`;

export default function GamesList() {
  const { gamesList, sortBy , setSortBy} = useContext(GamesListContext);

  const [page, setPage] = useState<number>(1);
  const gamesPage = gamesList.slice(
    page * ITEM_PER_PAGE - ITEM_PER_PAGE,
    page * ITEM_PER_PAGE
  );
  const numberOfPages = Math.trunc(gamesList.length / 10);

  const setPageHandler = (page: number) => {
    setPage(page);
  };

  const sortByRef = useRef<HTMLSelectElement>(null);
  const changeSortHandler = () => {
    setSortBy(sortByRef.current!.value);
  };

  return (
    <section>
      <Select>
        <select ref={sortByRef} value={sortBy} name="sortBy" onChange={changeSortHandler}>
          <option value="Title">Title</option>
          <option value="Price">Price</option>
          <option value="Store">Store</option>
          <option value="Metacritic">Rating</option>
        </select>
        <Button text="Desc &#11167;"></Button>
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

      <Pagination
        pages={numberOfPages}
        onChangePage={setPageHandler}
        activePage={page}
      />
    </section>
  );
}
