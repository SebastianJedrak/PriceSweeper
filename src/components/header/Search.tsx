import styled from "styled-components";
import Button from "../UI/Button";
import { useRef, useContext } from "react";
import { GamesListContext } from "../../ctx/GamesListProvider";
import { resultsHeader } from "../list/GamesList";
import { PageContext } from "../../ctx/PageProvider";

const SearchForm = styled.form`
  margin: 0 auto;
  width: max-content;
  color: ${({theme}) => theme.white};

  .sale-input {
    display: block;
  }

  .input-search {
    padding: 5px;
    min-width: 250px;
  }
`;

export default function Search() {
  const { setSearch, setSortBy, onSale, setOnSale } =
    useContext(GamesListContext);

  // Search
  const search = useRef<HTMLInputElement>(null);
  const { setPageHandler } = useContext(PageContext);
  const getSearchValue = (e: React.FormEvent) => {
    e.preventDefault();
    setSearch(search.current!.value);

    //scroll
    const { top } = resultsHeader!.current!.getBoundingClientRect();
    window.scroll({ top: top, behavior: "smooth" });

    //reset
    setPageHandler(1);
    setSortBy("title");
  };

  //On Sale
  const onSaleHandler = () => {
    if (onSale === 0) setOnSale(1);
    if (onSale === 1) setOnSale(0);
  };

  return (
    <>
      <SearchForm onSubmit={getSearchValue}>
        <input className="input-search" type="text" placeholder="Search" ref={search} />
        <Button
          text="Search"
          // onClickFunction={getSearchValue}
        />
        <div className="sale-input">
          <input type="checkbox" id="isOnSale" onClick={onSaleHandler} />
          <label htmlFor="isOnSale">Only on Sale</label>
        </div>
      </SearchForm>
    </>
  );
}
