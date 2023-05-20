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
  max-height: 110px;

  //Card
  background-color: ${({ theme }) => theme.secondaryColor.secondary100};
  border: 1px solid ${({ theme }) => theme.secondaryColor.secondaryDark};
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  box-shadow: 2px 2px 2px lightgray;

  .store-wrapper {
    display: flex;
    align-items: center;

    @media all and (max-width: 1000px) {
      flex-direction: column;
      align-items: start;
    }
  }

  img {
    height: 32px;
    width: 32px;
    margin-right: 1vw;
  }

  .thumb {
    width: 90px;
    object-fit: contain;
    @media all and (max-width: 1000px) {
      width: fit-content;
    }
    @media all and (max-width: 600px) {
      margin-bottom: 5px;
    }
  }

  .offer-link {
    margin-left: auto;
    min-width: 80px;
  }

  .store-prices-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 2.5vw;
    min-width: 300px;
    overflow: auto;
    @media all and (max-width: 1000px) {
      min-width: 240px;
    }
    @media all and (max-width: 600px) {
      align-items: start;
      min-width: 32px;
    }
  }

  .prices-wrapper {
    width: 48px;
    margin-right: 2.5vw;
  }

  .meta-wrapper-anchor {
    min-width: 80px;
    margin-right: 2.5vw;
  }

  .meta-wrapper-anchor > .meta-wrapper {
    min-width: 0;
    margin-right: 0;
  }

  .meta-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60px;
    margin-right: 2.5vw;
    border: 1px solid ${({ theme }) => theme.secondaryColor.secondaryDark};
    border-radius: 2.5px;
    color: ${({ theme }) => theme.secondaryColor.secondaryDark};
    min-width: 80px;
    font-weight: 500;
    &:focus-visible {
      outline: 2px dotted ${({ theme }) => theme.secondaryColor.secondary600};
    }

    @media all and (max-width: 600px) {
      height: 48px;
margin-bottom: 5px;
    }
  }

  .link-to-meta {
    text-decoration: underline;
  }

  .meta-green {
    cursor: pointer;
    background-color: ${({ theme }) => theme.primaryColor.primary600};
    &:hover {
      background-color: ${({ theme }) => theme.primaryColor.primary500};
      color:white;
    }
  }

  .meta-yellow {
    cursor: pointer;
    background-color: ${({ theme }) => theme.secondaryColor.secondary600};
    &:hover {
      background-color: ${({ theme }) => theme.secondaryColor.secondary500};
      color:white;
    }
  }

  .meta-red {
    cursor: pointer;
    background-color: ${({ theme }) => theme.red.red600};
    &:hover {
      background-color: ${({ theme }) => theme.red.red400};
      color:white;
    }
  }

  .meta-gray {
    background-color: #cccccc;
    color: ${({ theme }) => theme.primaryColor.primaryDark};
  }

  .game-details {
    display: flex;
    width: 50%;
    align-items: center;
    max-height: 90px;
    @media all and (max-width: 1000px) {
      flex-direction: column;
      align-items: start;
      margin-bottom: auto;
    }
  }

  .game-title {
    word-wrap: break-word;
    overflow: auto;

  }

  .store-name {
    word-wrap: break-word;
    @media all and (max-width: 600px) {
      display: none;
    }
  }

  :nth-child(2n) {
    background-color: ${({ theme }) => theme.primaryColor.primary100};
  }

  .normal-price-on-sale {
    text-decoration: line-through;
  }

  .metacrtic-store-price-wrapper {
    display: flex;
    @media all and (max-width: 600px) {
      flex-direction: column;
    }
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
      <div className="metacrtic-store-price-wrapper">
        {" "}
        {/* Metacritic */}
        {-props.metacriticScore !== 0 ? (
          <a
            className={`meta-wrapper-anchor`}
            href={metacriticUrl}
            target="_blank"
            rel="noreferrer"
          >
            <div
              tabIndex={0}
              className={`meta-wrapper ${metacriticBackgroundColor}`}
            >
              {" "}
              <p>{props.metacriticScore}</p>{" "}
              <p className="link-to-meta">Metacritic</p>{" "}
            </div>
          </a>
        ) : (
          <div
            tabIndex={0}
            className={`meta-wrapper ${metacriticBackgroundColor}`}
          >
            {" "}
            <p>No Rating</p>{" "}
          </div>
        )}
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
      </div>

      {/* Game Details */}
      <div className="game-details">
        {" "}
        <img className="thumb" src={props.thumb} alt={props.title} />
        <h3 className="game-title">{props.title}</h3>
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
