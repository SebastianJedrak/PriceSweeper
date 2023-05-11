import { useContext, useState, useRef } from "react";
import GameItem from "./GameItem";
import { GamesListContext } from "../../ctx/GamesListProvider";
import Pagination from "./Pagination";
import styled from "styled-components";
import Button from "../UI/Button";
import { PageContext } from "../../ctx/PageProvider";

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
  //Sort
  const { sortBy, setSortBy, sortDirection, setSortDirection } =
    useContext(GamesListContext);
  resultsHeader = useRef<HTMLHeadingElement>(null);
  const [sortDesc, setSortDesc] = useState(true);

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
    setSortDesc(!sortDesc);
  };

  // Page
  const {gamesPage, numberOfPages, setPageHandler, page} = useContext(PageContext)

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
        {sortDesc ? (
          <Button
            onClick={sortDirectionHandler}
            text="Descending &#11167;"
          ></Button>
        ) : (
          <Button
            onClick={sortDirectionHandler}
            text="Ascending &#x2B9D;"
          ></Button>
        )}
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
