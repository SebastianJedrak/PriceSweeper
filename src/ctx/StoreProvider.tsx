import { createContext, useEffect, useState } from "react";

export type Store = {
  isActive: number;
  storeName: string;
  storeID: string;
  images: { logo: string; icon: string };
};

export const StoreContext = createContext<{
  stores: Store[];
  activeStoresId: string[];
  setActiveStores: React.Dispatch<React.SetStateAction<Store[]>>;
}>({ stores: [], activeStoresId: [], setActiveStores: () => {} });

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
        store.images.icon = `${imgUrl}${store.images.icon}`;
        return store;
      });
      setStores(transformedData);
      setActiveStores(transformedData);
    }
    getData();
  }, [imgUrl]);

  //active stores filter
  const [activeStores, setActiveStores] = useState<Store[]>([]);
  // console.log(activeStores);
  const activeStoresId = activeStores.map((store) => store.storeID);

  return (
    <StoreContext.Provider value={{ stores, activeStoresId, setActiveStores }}>
      {props.children}
    </StoreContext.Provider>
  );
}
