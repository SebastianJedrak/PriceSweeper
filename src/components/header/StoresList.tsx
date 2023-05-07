import { useEffect, useState } from "react";
import styled from "styled-components";

type Store = {
  isActive: number;
  storeName: string;
  storeID: string;
  images: { logo: string };
};

const Stores = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StoreItem = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  margin: 16px;
  align-items: center;

  img {
    height: 64px;
    width: 64px;
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
    <Stores>
      {stores.map((store: Store) => {
        return (
          <StoreItem key={store.storeID}>
            <input type="checkbox" id={store.storeID} />
            <label htmlFor={store.storeID}>{store.storeName}</label>
            <img src={store.images.logo} alt={store.storeName} />
          </StoreItem>
        );
      })}
    </Stores>
  );
}
