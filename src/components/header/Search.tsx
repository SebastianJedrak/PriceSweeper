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
  const search = useRef<HTMLInputElement>(null);
  const { setSearch } = useContext(GamesListContext);

  const getSearchValue = () => {
    setSearch(search.current!.value);
  };

  return (
    <>
      <SearchForm action="">
        <input type="text" placeholder="Search" ref={search} />
        <select>
          <option>sortBy</option>
        </select>
        <Button text="Search" onClickFunction={getSearchValue} />
        <input type="checkbox" id="isOnSale" defaultChecked />
        <label htmlFor="isOnSale">On Sale</label>
      </SearchForm>
    </>
  );
}
