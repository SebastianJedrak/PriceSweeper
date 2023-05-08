import styled from "styled-components";
import { GameData } from "../../ctx/GamesListProvider";
import Button from "../UI/Button";
import { useContext } from "react";
import { StoreContext } from "../../ctx/StoreProvider";

const Game = styled.li`
  color: black;
  display: flex;
  flex-direction: row;
  align-items: center;


  //Card
  background-color: darkgray;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;

  * {
    margin: 0 10px;
  }
  img {
    height: 32px;
  }

  .thumb{
    width: 90px;
    object-fit: contain;
  }

  Button {
    margin-left:auto
  }

  .prices-wrapper {
    width: 68px;
    text-align: center;
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
          <p>More Shops &#11167;</p>
        <div className="meta-wrapper">
          <p>{props.metacriticScore}</p>
          <a href={metacriticUrl} target="_blank" rel="noreferrer">
            MORE
          </a>
        </div>
        <div className="prices-wrapper">
          <p>{props.normalPrice}&#x24;</p>
          <p>{props.salePrice}&#x24;</p>
        </div>
        <img className="thumb" src={props.thumb} alt={props.title} />
        <span>{props.title}</span>
        <Button text="Go!" />
      </Game>

  );
}
