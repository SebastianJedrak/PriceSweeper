import styled from "styled-components";
import { GameData } from "./GamesList";
import Button from "../UI/Button";
import { useContext } from "react";
import { StoreContext } from "../../ctx/StoreProvider";

const Game = styled.div`
  color: red;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;

  img {
    height: 32px;
  }
`;

export default function GameItem(props: GameData) {
  const metacriticUrl = `https://www.metacritic.com${props.metacriticLink}`;
  const stores = useContext(StoreContext);

  const store = stores.filter((store) => {
    return store.storeID === props.storeID;
  });

  return (
    <Game>
      <img src={store[0].images.icon} alt={store[0].storeName} />
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
