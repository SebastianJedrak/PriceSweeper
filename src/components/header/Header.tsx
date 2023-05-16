import styled from "styled-components";
import Logo from "./Logo";
import Search from "./Search";
import StoresList from "./StoresList";
import backgroundImg from "../../img/minesweeper-game.png";

const StyledHeader = styled.header`
  background: linear-gradient(
      to top,
      #fffaef 0%,
      #1e2b09bb 20%
    ),
    url(${backgroundImg});
  background-size: 140%;
  background-repeat: no-repeat;
  background-position: top;
  padding: 50px 0 ;
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
