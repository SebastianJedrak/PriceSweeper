import styled from "styled-components";
import Button from "../UI/Button";

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  color: white;
`;

export default function Search() {
  return (
    <>
      <SearchForm action="">
        <input type="text" placeholder="Search" />
        <Button text="Search"/>
        <input type="checkbox" id="isOnSale" defaultChecked/>
        <label htmlFor="isOnSale">On Sale</label>
      </SearchForm>
    </>
  );
}
