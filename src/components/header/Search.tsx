import styled from "styled-components";
import Button from "../UI/Button";
import { useRef, useContext } from "react";
import { GamesListContext } from "../../ctx/GamesListProvider";

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  color: white;
`;

export default function Search() {
  const { setSearch, setSortBy } = useContext(GamesListContext);

  // Search
  const search = useRef<HTMLInputElement>(null);
  const getSearchValue = () => {
    setSearch(search.current!.value);
  };

  // sortBy
  const sortBy = useRef<HTMLSelectElement>(null);
  const changeSortHandler = () => {
    setSortBy(sortBy.current!.value);
  };

  return (
    <>
      <SearchForm action="">
        <input type="text" placeholder="Search" ref={search} />
        <select ref={sortBy} name="sortBy" onChange={changeSortHandler}>
          <option value="Title">Title</option>
          <option value="Price">Price</option>
          <option value="Store">Store</option>
          <option value="Metacritic">Rating</option>
        </select>
        <Button text="Search" onClickFunction={getSearchValue} />
        <input type="checkbox" id="isOnSale" defaultChecked />
        <label htmlFor="isOnSale">On Sale</label>
      </SearchForm>
    </>
  );
}
