import styled from "styled-components";
import { GameData } from "../../ctx/GamesListProvider";
import Button from "../UI/Button";
import { useContext } from "react";
import { StoreContext } from "../../ctx/StoreProvider";
import arrow from "../../img/keyboard_arrow_down.svg";

const Game = styled.div`
  color: red;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;

  img {
    height: 32px;
  }

  .svg-icon {
    background-image: url(${arrow});
    height: 32px;
    aspect-ratio: 1/1;
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
      <div className="best-wrapper">
        <p>BEST OFFER</p>
        <p>{store[0].storeName}</p>
      </div>
      <div className="best-wrapper">
        <p>More Shops</p>
        <div className="svg-icon"></div>
      </div>
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
