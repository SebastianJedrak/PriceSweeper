import { useEffect, useState } from "react";
import styled from "styled-components";

type Store = {
  isActive: number;
  storeName: string;
  storeID: string
};

const StoreItem = styled.div`
  color: white;
`;

export default function StoresList() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await window.fetch(
        "https://www.cheapshark.com/api/1.0/stores"
      );
      const data = await response.json();
      setStores(data.filter((store: Store) => store.isActive === 1));
    }
    getData();
    console.log(stores);
  }, []);

  return (
    <>
      {stores.map((store: Store) => {
        return (
          <StoreItem key={store.storeID}>
            <span>{store.storeName}</span>
          </StoreItem>
        );
      })}
    </>
  );
}
