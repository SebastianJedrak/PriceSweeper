import { useContext, useState, useRef } from "react";
import GameItem from "./GameItem";
import { GamesListContext } from "../../ctx/GamesListProvider";
import Pagination from "./Pagination";
import styled from "styled-components";
import Button from "../UI/Button";

const ITEM_PER_PAGE = 10;

const Section = styled.section`
  ul {
    margin: 0 auto;
  }

  .select-wrapper {
    display: flex;
  }

  select {
    margin: 0 10px;
  }

  h2 {
    text-align: center;
  }
`;

export let resultsHeader: React.RefObject<HTMLHeadingElement> | null;

export default function GamesList() {
  const { gamesList, sortBy, setSortBy, sortDirection, setSortDirection } =
    useContext(GamesListContext);
  resultsHeader = useRef<HTMLHeadingElement>(null);

  //Page
  const [page, setPage] = useState<number>(1);
  const gamesPage = gamesList.slice(
    page * ITEM_PER_PAGE - ITEM_PER_PAGE,
    page * ITEM_PER_PAGE
  );
  const numberOfPages = Math.trunc(gamesList.length / 10);

  const setPageHandler = (page: number) => {
    setPage(page);
  };

  //Sort
  const sortByRef = useRef<HTMLSelectElement>(null);
  const changeSortHandler = () => {
    setSortBy(sortByRef.current!.value);
  };

  const sortDirectionHandler = () => {
    if (sortDirection === 0) {
      setSortDirection(1);
    }
    if (sortDirection === 1) {
      setSortDirection(0);
    }
  };

  return (
    <Section>
      <h2 ref={resultsHeader}>Result of / Recent/ No</h2>
      <div className="select-wrapper">
        <select
          ref={sortByRef}
          value={sortBy}
          name="sortBy"
          onChange={changeSortHandler}
        >
          <option value="Title">Title</option>
          <option value="Price">Price</option>
          <option value="Store">Store</option>
          <option value="Metacritic">Rating</option>
        </select>
        <Button onClick={sortDirectionHandler} text="Desc &#11167;"></Button>
      </div>
      <ul>
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
      </ul>

      <Pagination
        pages={numberOfPages}
        onChangePage={setPageHandler}
        activePage={page}
      />
    </Section>
  );
}
