import { createContext, useEffect, useState } from "react";

export type Store = {
  isActive: number;
  storeName: string;
  storeID: string;
  images: { logo: string; icon: string };
};

export const StoreContext = createContext<Store[]>([]);

export default function StoreProvider(props: { children: React.ReactNode }) {
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
    <StoreContext.Provider value={stores}>
      {props.children}
    </StoreContext.Provider>
  );
}
