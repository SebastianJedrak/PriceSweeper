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
    width: 32px;
    margin-right: 10px;
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
    margin-right: 20px;
  }

  .meta-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 60px;
    margin-right: 20px;
    border: 1px solid white;
    border-radius: 5px;
    color: white;
  }


  .meta-wrapper a {
    text-decoration: underline;
    color: white;
  }

  .meta-green {
    background-color: #66cc33;
  }

  .meta-yellow {
    background-color: #ffcc33;
  }

  .meta-red {
    background-color: #ff0000;
  }

  .meta-gray {
    background-color: #cccccc;
    color: black;
  }

  .store-name {
    width: 200px;
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

  // Metacritic background color
  let metacriticBackgroundColor;
  const metacriticScoreNumber = Number(props.metacriticScore);
  if (metacriticScoreNumber >= 70) {
    metacriticBackgroundColor = "meta-green";
  }
  if (metacriticScoreNumber < 70 && metacriticScoreNumber >= 40) {
    metacriticBackgroundColor = "meta-yellow";
  }
  if (metacriticScoreNumber < 40 && metacriticScoreNumber !== 0) {
    metacriticBackgroundColor = "meta-red";
  }
  if (metacriticScoreNumber === 0) {
    metacriticBackgroundColor = "meta-gray";
  }

  return (
    <Game>
      {/* Metacritic */}
      <div className={`meta-wrapper ${metacriticBackgroundColor}`}>
        {-props.metacriticScore !== 0 ? (
          <>
            {" "}
            <p>{props.metacriticScore}</p>
            <a href={metacriticUrl} target="_blank" rel="noreferrer">
              Metacritic
            </a>
          </>
        ) : (
          <p>No Rating</p>
        )}
      </div>

      {/* Stores */}
      {store[0] ? (
        <img src={store[0].images.icon} alt={store[0].storeName} />
      ) : (
        <div>
          <img src="" alt="" />
        </div>
      )}
      {store[0] ? (
        <h3 className="store-name">{store[0].storeName}</h3>
      ) : (
        <div className="store-name" />
      )}

      {/* Prices */}
      <div className="prices-wrapper">
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

      {/* Game Details */}
      <img className="thumb" src={props.thumb} alt={props.title} />
      <span>{props.title}</span>

      {/* Button */}
      <Button text="">
        <a href={dealUrl} target="_blank" rel="noreferrer">
          Go To Offer!
        </a>
      </Button>
    </Game>
  );
}
