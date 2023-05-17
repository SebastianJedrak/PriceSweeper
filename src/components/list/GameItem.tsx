import styled from "styled-components";
import { GameData } from "../../ctx/GamesListProvider";
import Button from "../UI/Button";
import { useContext } from "react";
import { StoreContext } from "../../ctx/StoreProvider";

const Game = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({ theme }) => theme.primaryColor.primaryDark};

  //Card
  background-color: ${({ theme }) => theme.secondaryColor.secondary100};
  border: 1px solid ${({ theme }) => theme.secondaryColor.secondaryDark};
  border-radius: 5px;
  padding: 10px;
  margin: 10px;

  .store-wrapper {
    display: flex;
   
    @media all and (max-width: 1000px) {
      flex-direction: column;
    }
    @media all and (max-width: 500px) {
      min-width: max-content;
    }
  }

  img {
    height: 32px;
    width: 32px;
    margin-right: 10px;
  }

  .thumb {
    width: 90px;
    object-fit: contain;
    @media all and (max-width: 1000px) {
      width: fit-content;
    }
  }

  .offer-link {
    margin-left: auto;
    min-width: 100px;
  }

  .store-prices-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 20%;
    margin-right: 20px;
    @media all and (max-width: 500px) {
      flex-direction: column;
      align-items: start;
      margin-right: 5px;
    }
  }

  .prices-wrapper {
    width: 68px;
    margin-right: 20px;
    @media all and (max-width: 500px) {
      margin-right: 0px;
      min-width: fit-content;
    }
  }

  .meta-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60px;
    margin-right: 20px;
    border: 1px solid ${({ theme }) => theme.secondaryColor.secondaryDark};
    border-radius: 5px;
    color: ${({ theme }) => theme.secondaryColor.secondaryLight};
    min-width: 80px;
    @media all and (max-width: 500px) {
      margin-right: 5px;
      min-width: 50px;

    }
  }

  .meta-wrapper a {
    text-decoration: underline;
    color: ${({ theme }) => theme.secondaryColor.secondaryLight};
    @media all and (max-width: 500px) {
display:none    }
  }
  
  .meta-wrapper p {
    text-align: center;
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
    color: ${({ theme }) => theme.primaryColor.primaryDark};
  }

  .game-details {
    display: flex;
    flex-direction: row;
    width: 50%;

    @media all and (max-width: 1000px) {
      flex-direction: column;
    }
  }

  .store-name {
    word-wrap: break-word;
    @media all and (max-width: 500px) {
      display: none;
    }
  }

  :nth-child(2n) {
    background-color: ${({ theme }) => theme.primaryColor.primary100};
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

      <div className="store-prices-wrapper">
        {" "}
        {/* Stores */}
        <div className="store-wrapper">
          {" "}
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
        </div>
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
      </div>

      {/* Game Details */}
      <div className="game-details">
        {" "}
        <img className="thumb" src={props.thumb} alt={props.title} />
        <span className="game-title">{props.title}</span>
      </div>

      {/* Button */}
      <div className="offer-link">
        {" "}
        <a href={dealUrl} target="_blank" rel="noreferrer">
          <Button text="Go to Offer &#128681;" />
        </a>
      </div>
    </Game>
  );
}
