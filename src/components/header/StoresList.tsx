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
    margin: 16px 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    img {
      height: 64px;
      width: 64px;
    }
  }

  .active {
    background-color: #ffffff28;
  }

  .button-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export default function StoresList() {
  const { stores } = useContext(StoreContext);
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

  return (
    <section>
      <Stores onClick={onStoresHandler}>
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
        <div className="button-wrapper">
          <Button text="All Stores" />
        </div>
      </Stores>
    </section>
  );
}
