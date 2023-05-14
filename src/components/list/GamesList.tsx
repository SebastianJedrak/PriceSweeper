import { useContext, useState, useRef } from "react";
import GameItem from "./GameItem";
import { GamesListContext } from "../../ctx/GamesListProvider";
import Pagination from "./Pagination";
import styled from "styled-components";
import { PageContext } from "../../ctx/PageProvider";
import logo from "../../img/minesweeper-logo.png";

const Section = styled.section`
  min-height: 100vh;

  .select-wrapper {
    display: flex;
  }

  .select-wrapper * {
    margin-left: 10px;
  }

  .sort-desc-wrapper {
    cursor: pointer;
    width: 120px;
    display: flex;
    justify-content: space-between;
  }

  .sort-desc {
    margin: 0
  }

  ul {
    margin: 0 auto;
  }

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .logo {
    display: flex;
    justify-content: center;
    margin-top: 60px;
  }

  .logo > img {
    animation: rotate 2.5s infinite linear;
  }
`;

export let resultsHeader: React.RefObject<HTMLHeadingElement> | null;

export default function GamesList() {
  //Sort
  const {
    sortBy,
    setSortBy,
    sortDirection,
    setSortDirection,
    isLoading,
    gamesList,
    search,
    isError,
  } = useContext(GamesListContext);
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
  const { gamesPage, numberOfPages, setPageHandler, page } =
    useContext(PageContext);

  // Error

  if (isError !== "")
    return (
      <Section>
        <h2 ref={resultsHeader}>{isError}</h2>
      </Section>
    );

  // Loading
  if (isLoading)
    return (
      <Section>
        <h2 ref={resultsHeader}>Loading...</h2>
        <div className="logo">
          <img src={logo} alt="loading" />
        </div>
      </Section>
    );

  // No results
  if (gamesList.length === 0)
    return (
      <Section>
        {search ? (
          <h2 ref={resultsHeader}>No Results of {search}</h2>
        ) : (
          <h2 ref={resultsHeader}>No Results</h2>
        )}
      </Section>
    );

  return (
    <Section>
      {search ? (
        <h2 ref={resultsHeader}>Results of {search}</h2>
      ) : (
        <h2 ref={resultsHeader}>Recent Deals</h2>
      )}
      <div className="select-wrapper">
        <span>Sort By:</span>
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
          <div className="sort-desc-wrapper" onClick={sortDirectionHandler}>
            <span className="sort-desc">Descending</span>
            <span>&#11167;</span>
          </div>
        ) : (
          <div className="sort-desc-wrapper" onClick={sortDirectionHandler}>
            <span className="sort-desc">Ascending</span>
            <span>&#x2B9D;</span>
          </div>
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
            dealID={game.dealID}
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
