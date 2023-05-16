import styled from "styled-components";
import Logo from "./Logo";
import Search from "./Search";
import StoresList from "./StoresList";
import backgroundImg from "../../img/minesweeper-game.png";

const StyledHeader = styled.header`
  background: linear-gradient(
      to top,
      #fffaef 0%,
      #19150a80 7.5%,
      #19150abb 25%
    ),
    url(${backgroundImg});
  background-size: fill;
  background-repeat: no-repeat;
  background-position: top;
  padding-top: 30px;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Search />
      <StoresList />
    </StyledHeader>
  );
}
