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

  
  img {
    height: 32px;
  }

  .thumb {
    width: 90px;
    object-fit: contain;
  }

  Button {
    margin-left: auto;
  }

  .prices-wrapper {
    width: 68px;
    text-align: end;
  }

  .meta-wrapper {
    text-align: center;
  }

  .store-name {
    width: 150px;
  }

  :nth-child(2n) {
    background-color: #727272;
  }

  .normal-price-on-sale {
    text-decoration: line-through;
  }
`;

export default function GameItem(props: GameData) {
  const metacriticUrl = `https://www.metacritic.com${props.metacriticLink}`;
  const dealUrl = `https://www.cheapshark.com/redirect?dealID=${props.dealID}  `;
  const { stores } = useContext(StoreContext);

  const store = stores.filter((store) => {
    return store.storeID === props.storeID;
  });

  return (
    <Game>
      <div className="meta-wrapper">
        <p>{props.metacriticScore}</p>
        <a href={metacriticUrl} target="_blank" rel="noreferrer">
          MORE
        </a>
      </div>
      {store[0] ? (
        <img src={store[0].images.icon} alt={store[0].storeName} />
      ) : null}
      {store[0] ? <h3 className="store-name">{store[0].storeName}</h3> : null}
      <div className="prices-wrapper">
        {/* <p>{props.normalPrice}&#x24;</p> */}
        {props.normalPrice === props.salePrice ? (
          <p>{props.normalPrice}&#x24;</p>
        ) : (
          <p className="normal-price-on-sale">{props.normalPrice}&#x24;</p>
        )}
        {props.normalPrice === props.salePrice ? (
          ""
        ) : (
          <p>{props.salePrice}&#x24;</p>
        )}
      </div>
      <img className="thumb" src={props.thumb} alt={props.title} />
      <span>{props.title}</span>
      <Button text="">
        <a href={dealUrl} target="_blank" rel="noreferrer">Go To Offer!</a>
      </Button>
    </Game>
  );
}
