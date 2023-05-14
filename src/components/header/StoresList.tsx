import { useContext } from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import { Store, StoreContext } from "../../ctx/StoreProvider";
import { GamesListContext } from "../../ctx/GamesListProvider";

const Stores = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 64px;
  justify-content: center;

  .store-item {
    color: white;
    margin: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    width: 140px;
    padding: 20px 5px;
    border: 1px solid transparent;

    img {
      height: 48px;
      width: 48px;
    }
  }

  .active {
    background-color: #ffffff28;
    border: 1px solid white;
    border-radius: 5px;
  }

  .button-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
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

  return (
    <section>
      <Stores onClick={onStoresHandler}>
        <div className="button-wrapper">
          <Button onClick={allStoresHandler} text="All Stores" />
        </div>
        {stores.map((store: Store) => {
          return (
            <div
              className={`store-item ${
                activeStoresId.includes(store.storeID) && "active"
              }`}
              key={store.storeID}
              data-id={store.storeID}
            >
              <img src={store.images.logo} alt={store.storeName} />
              <p>{store.storeName}</p>
            </div>
          );
        })}
      </Stores>
    </section>
  );
}
