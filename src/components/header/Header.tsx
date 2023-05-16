import styled from "styled-components";
import Logo from "./Logo";
import Search from "./Search";
import StoresList from "./StoresList";
import backgroundImg from "../../img/main-header-img.png";

const StyledHeader = styled.header`
  background: linear-gradient(
      to top,
      #ffffff 0%,
      #0f1604aa 5%
    ),
    url(${backgroundImg});
  background-size: cover;
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
