import { useContext } from "react";
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
  .button-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export default function StoresList() {

  const stores = useContext(StoreContext)

  return (
    <section>
      <Stores>
        {stores.map((store: Store) => {
          return (
            <div className="store-item" key={store.storeID}>
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
