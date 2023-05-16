import styled from "styled-components";
import Logo from "./Logo";
import Search from "./Search";
import StoresList from "./StoresList";
import backgroundImg from "../../img/minesweeper-game.png";

const StyledHeader = styled.header`
  background: linear-gradient(
      to top,
      #fffaef 0%,
      #19150abb 10%
    ),
    url(${backgroundImg});
  background-size: fill;
  background-repeat: no-repeat;
  background-position: top;
  padding: 30px 0 ;
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
