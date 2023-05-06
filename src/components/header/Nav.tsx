import styled from "styled-components";
import NavItem from "./NavItem";

const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
`;

export default function Nav() {
  return (
    <Navigation>
      <NavItem text="DealZ"></NavItem>
      <NavItem text="About Us"></NavItem>
      <NavItem text="Shops"></NavItem>
    </Navigation>
  );
}
