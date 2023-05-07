import styled from "styled-components";
import { GameData } from "./GamesList";

const Game = styled.p`
  color: red;
`;

export default function GameItem(props: GameData) {
  return <Game>{props.title}</Game>;
}
