import styled from "styled-components";
import { GameData } from "../../ctx/GamesListProvider";
import Button from "../UI/Button";
import { useContext } from "react";
import { StoreContext } from "../../ctx/StoreProvider";

const Game = styled.li`
  color: red;
  display: flex;
  flex-direction: row;
  width: 100%;
  /* justify-content: space-around; */
  align-items: center;

  background-color: darkgray;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
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
        <div className="best-wrapper">
          <p>BEST OFFER</p>
          <p>{store[0].storeName}</p>
        </div>
        <div className="best-wrapper">
          <p>More Shops</p>
          <p>&#x2304;</p>
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
