import styled from "styled-components";
import Button from "../UI/Button";
import { useRef, useContext, useState } from "react";
import { GamesListContext } from "../../ctx/GamesListProvider";
import { resultsHeader } from "../list/GamesList";
import { PageContext } from "../../ctx/PageProvider";

const SearchForm = styled.form`
  margin: 0 auto;
  width: max-content;
  color: ${({ theme }) => theme.secondaryColor.secondaryLight};

  .sale-input {
    display: block;
  }

  .sale-input * {
    cursor: pointer;
  }

  .input-search {
    padding: 5px;
    min-width: 250px;
    height: 30px;
    border: 1px solid ${({ theme }) => theme.primaryColor.primaryDark};
    border-right: none;
    color: 1px solid ${({ theme }) => theme.primaryColor.primaryDark};
    background-color: ${({ theme }) => theme.secondaryColor.secondaryLight};
  }

  .sale-input-checkbox {
    filter: hue-rotate(220deg);
    margin-right: 5px;
    &:focus-visible {
      outline: 1px dotted ${({ theme }) => theme.secondaryColor.secondary600};
    }
  }

  Button {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
`;

export default function Search() {
  const [noSearch, setNoSearch] = useState(false)
  const { setSearch, setSortBy, onSale, setOnSale } =
    useContext(GamesListContext);

  // Search
  const search = useRef<HTMLInputElement>(null);
  const { setPageHandler } = useContext(PageContext);
  const getSearchValue = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (search.current!.value === "") return setNoSearch(true);
    setSearch(search.current!.value);

    //scroll
    const { top } = resultsHeader!.current!.getBoundingClientRect();
    window.scroll({ top: top, behavior: "smooth" });

    //reset
    setPageHandler(1);
    setSortBy("title");
  };

  // No search value
  const changeSearchHandler = () => {
    setNoSearch(false)
  }

  //On Sale
  const onSaleHandler = () => {
    if (onSale === 0) setOnSale(1);
    if (onSale === 1) setOnSale(0);
  };

  return (
    <>
      <SearchForm onSubmit={getSearchValue}>
        <input
          className={`input-search ${noSearch ? "no-value" : ""}`}
          type="text"
          placeholder="Search"
          ref={search}
          onClick={changeSearchHandler}
        />
        <Button
          text="Search"
          // onClickFunction={getSearchValue}
        />
        <div className="sale-input">
          <input
            className="sale-input-checkbox"
            type="checkbox"
            id="isOnSale"
            onClick={onSaleHandler}
          />
          <label htmlFor="isOnSale">Only on Sale</label>
        </div>
      </SearchForm>
    </>
  );
}
