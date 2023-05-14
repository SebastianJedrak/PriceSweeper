import styled from "styled-components";
import Logo from "./Logo";
import Search from "./Search";
import StoresList from "./StoresList";
import backgroundImg from "../../img/main-header-img.png";

const StyledHeader = styled.header`
  background: linear-gradient(
      to top,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.0) 10%
    ),
    url(${backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
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
