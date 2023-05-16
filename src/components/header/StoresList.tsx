import { useContext, useState } from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import { Store, StoreContext } from "../../ctx/StoreProvider";
import { GamesListContext } from "../../ctx/GamesListProvider";

const Stores = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px;
  margin-bottom: 100px;
  justify-content: center;
  @media all and (max-width: 1000px) {
    margin: 48px 24px;
  }

  .stores-header {
    color: ${({ theme }) => theme.secondaryColor.secondaryLight};
    text-align: center;
    text-decoration: underline;
    cursor: pointer;
    width: 100%;
    span {
      color: ${({ theme }) => theme.primaryColor.primary400};
    }
  }

  .store-item {
    color: ${({ theme }) => theme.secondaryColor.secondaryLight};
    margin: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 140px;
    padding: 20px 5px;
    border: 1px solid transparent;
    @media all and (max-width: 1000px) {
      flex-direction: row;
      padding: 10px 10px;
      width: 180px;
    }
    @media all and (max-width: 500px) {
      width: fit-content;
    }
  }

  .store-name {
    @media all and (max-width: 500px) {
      display: none;
    }
  }

  img {
    height: 48px;
    width: 48px;
    @media all and (max-width: 1000px) {
      height: 16px;
      width: 16px;
      margin-right: 5px;
    }
    @media all and (max-width: 500px) {
      height: 32px;
      width: 32px;
      margin-right: 0;
    }
  }

  .active {
    background-color: ${({ theme }) =>
      theme.secondaryColor.secondary200 + "15"};
    border: 1px solid ${({ theme }) => theme.secondaryColor.secondary100};
    border-radius: 5px;
  }

  .button-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }
`;

export default function StoresList() {
  const { stores, isError } = useContext(StoreContext);
  const { setActiveStores, activeStoresId } = useContext(GamesListContext);

  const onStoresHandler = (e: React.MouseEvent) => {
    const storeTarget = (e.target as HTMLElement).closest("div.store-item");
    if (!storeTarget) return;
    const storeTargetId = storeTarget.getAttribute("data-id");

    if (activeStoresId.includes(storeTargetId!)) {
      setActiveStores((prev) => {
        return prev.filter((store) => store.storeID !== storeTargetId);
      });
    }

    if (!activeStoresId.includes(storeTargetId!)) {
      const storeToAdd = stores.find(
        (store) => store.storeID === storeTargetId
      );
      setActiveStores((prev) => {
        return [...prev, storeToAdd!];
      });
    }
  };

  // Hide stores

  const [hideStores, setHideStores] = useState(
    window.screen.width > 1000 ? false : true
  );

  const hideStoresHandler = () => {
    setHideStores(!hideStores);
  };

  // allStoresHandler button

  const allStoresHandler = () => {
    if (activeStoresId.length !== stores.length) setActiveStores(stores);
    if (activeStoresId.length === stores.length) setActiveStores([]);
  };

  // Error

  if (isError !== "")
    return (
      <section>
        <h2>{isError}</h2>
      </section>
    );

  // Hide stores return

  if (hideStores === true)
    return (
      <section>
        {" "}
        <Stores>
          <h2 className="stores-header" onClick={hideStoresHandler}>
            Pick Stores <span>&#11167;</span>
          </h2>
        </Stores>
      </section>
    );

  return (
    <section>
      <Stores onClick={onStoresHandler}>
        <h2 className="stores-header" onClick={hideStoresHandler}>
          Hide Stores <span>&#x2B9D;</span>
        </h2>
        <div className="button-wrapper">
          <Button onClick={allStoresHandler} text="Pick All" />
        </div>
        {stores.map((store: Store) => {
          return (
            <div
              tabIndex={0}
              className={`store-item ${
                activeStoresId.includes(store.storeID) && "active"
              }`}
              key={store.storeID}
              data-id={store.storeID}
            >
              <img src={store.images.logo} alt={store.storeName} />
              <p className="store-name">{store.storeName}</p>
            </div>
          );
        })}
      </Stores>
    </section>
  );
}
