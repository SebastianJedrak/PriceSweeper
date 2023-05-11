import { createContext, useContext, useEffect, useState } from "react";
import { GamesListContext } from "./GamesListProvider";

export type Store = {
  isActive: number;
  storeName: string;
  storeID: string;
  images: { logo: string; icon: string };
};

export const StoreContext = createContext<{
  stores: Store[];

}>({ stores: [] });

export default function StoreProvider(props: { children: React.ReactNode }) {
  const [stores, setStores] = useState([]);
  const {setActiveStores} = useContext(GamesListContext)
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
        store.images.icon = `${imgUrl}${store.images.icon}`;
        return store;
      });
      setStores(transformedData);
      setActiveStores(transformedData);
    }
    getData();
  }, [imgUrl]);

  

  return (
    <StoreContext.Provider value={{ stores}}>
      {props.children}
    </StoreContext.Provider>
  );
}
