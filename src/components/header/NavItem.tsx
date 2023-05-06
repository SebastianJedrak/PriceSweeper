import styled from "styled-components";

type Props = {
  text: string;
};

const NavItemText = styled.span`
  color: white;
  margin: 10px;
`;

export default function NavItem(props: Props) {
  return <NavItemText>{props.text}</NavItemText>;
}
