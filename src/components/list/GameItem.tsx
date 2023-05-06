import styled from "styled-components";

type Props = {
  name: string;
};

const Game = styled.p`
  color: red;
`;

export default function GameItem(props: Props) {
  return <Game>{props.name}</Game>;
}
