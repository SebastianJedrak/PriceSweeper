import { useContext, useState } from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import { Store, StoreContext } from "../../ctx/StoreProvider";

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
  const { stores, setActiveStores, activeStoresId } = useContext(StoreContext);

  const onStoresHandler = (e: React.MouseEvent) => {
    const storeTarget = (e.target as HTMLElement).closest("div.store-item");
    if (!storeTarget) return;
    const storeTargetId = storeTarget.getAttribute("data-id");

    setActiveStores((prev) => {
      return prev.filter((store) => store.storeID !== storeTargetId);
    });
  };

  return (
    <section>
      <Stores onClick={onStoresHandler}>
        {stores.map((store: Store) => {
          return (
            <div
              className="store-item active"
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
