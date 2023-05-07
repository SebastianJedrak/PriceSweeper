import styled from "styled-components";
import { GameData } from "./GamesList";
import Button from "../UI/Button";

const Game = styled.div`
  color: red;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;

export default function GameItem(props: GameData) {
  const metacriticUrl = `https://www.metacritic.com${props.metacriticLink}`;
  return (
    <Game>
      <div className="meta-wrapper">
        <p>{props.metacriticScore}</p>
        <a href={metacriticUrl} target="_blank" rel="noreferrer">
          MORE
        </a>
      </div>
      <div className="prices-wrapper">
        <p>{props.normalPrice}</p>
        <p>{props.salePrice}</p>
      </div>
      <img src={props.thumb} alt={props.title} />
      <span>{props.title}</span>
      <Button text="Go!" />
    </Game>
  );
}
