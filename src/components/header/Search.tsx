import styled from "styled-components";
import Button from "../UI/Button";
import { useRef, useContext } from "react";
import { GamesListContext } from "../../ctx/GamesListProvider";
import { resultsHeader } from "../list/GamesList";
import { PageContext } from "../../ctx/PageProvider";

const SearchForm = styled.form`
  margin: 0 auto;
  width: max-content;
  color: white;

  .sale-input {
    display: block;
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

    //reset page
    setPageHandler(1);
  };

  //On Sale
  const onSaleHandler = () => {
    if (onSale === 0) setOnSale(1);
    if (onSale === 1) setOnSale(0);
  };

  // sortBy
  const sortByRef = useRef<HTMLSelectElement>(null);
  const changeSortHandler = () => {
    setSortBy(sortByRef.current!.value);
  };

  return (
    <>
      <SearchForm onSubmit={getSearchValue}>
        <input type="text" placeholder="Search" ref={search} />
        <select ref={sortByRef} name="sortBy" onChange={changeSortHandler}>
          <option disabled value="Title">Sort By</option>
          <option value="Title">Title</option>
          <option value="Price">Price</option>
          <option value="Store">Store</option>
          <option value="Metacritic">Rating</option>
        </select>
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
