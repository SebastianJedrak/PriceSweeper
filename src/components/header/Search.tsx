import styled from "styled-components";
import Button from "../UI/Button";

const SearchForm = styled.form`
    display: flex;
    justify-content: center;
`

export default function Search() {
  return (
    <>
      <SearchForm action="">
        <input type="text" placeholder="Search" />
        <Button />
      </SearchForm>
    </>
  );
}
