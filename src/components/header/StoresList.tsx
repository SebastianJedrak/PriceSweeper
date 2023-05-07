import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../UI/Button";

type Store = {
  isActive: number;
  storeName: string;
  storeID: string;
  images: { logo: string };
};

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

    p {
      margin: 0;
    }
  }
  .button-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export default function StoresList() {
  const [stores, setStores] = useState([]);
  const imgUrl = `https://www.cheapshark.com`;

  useEffect(() => {
    async function getData() {
      const response = await window.fetch(
        "https://www.cheapshark.com/api/1.0/stores"
      );
      const data = await response.json();
      const filteredData = data.filter((store: Store) => store.isActive === 1);
      const transformedData = filteredData.map((store: Store) => {
        store.images.logo = `${imgUrl}${store.images.logo}`;
        return store;
      });
      setStores(transformedData);
    }
    getData();
  }, [imgUrl]);

  return (
    <>
      {" "}
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
          {" "}
          <Button text="All Stores" />
        </div>
      </Stores>
    </>
  );
}
