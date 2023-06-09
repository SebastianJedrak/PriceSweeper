import { createContext, useEffect, useState } from "react";
import { Store } from "./StoreProvider";

export type GameData = {
  title: string;
  thumb: string;
  normalPrice: string;
  salePrice: string;
  metacriticScore: string;
  metacriticLink: string;
  storeID: string;
  gameID: string;
  dealID: string;
};

export const GamesListContext = createContext<{
  gamesList: GameData[];
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  setSortDirection: React.Dispatch<React.SetStateAction<number>>;
  setOnSale: React.Dispatch<React.SetStateAction<number>>;
  sortBy: string;
  sortDirection: number;
  onSale: number;
  activeStoresId: string[];
  setActiveStores: React.Dispatch<React.SetStateAction<Store[]>>;
  isLoading: boolean;
  search: string;
  isError: string;
}>({
  gamesList: [],
  setSearch: () => {},
  setSortBy: () => {},
  sortBy: "",
  sortDirection: 0,
  onSale: 0,
  setSortDirection: () => {},
  setOnSale: () => {},
  activeStoresId: [],
  setActiveStores: () => {},
  isLoading: false,
  search: "",
  isError: "",
});

export default function GamesListProvider(props: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [gamesList, setGamesList] = useState<GameData[]>([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("recent");
  const [sortDirection, setSortDirection] = useState(0);
  const [onSale, setOnSale] = useState(0);
  const [isError, setIsError] = useState<string>("");

  //active stores filter
  const [activeStores, setActiveStores] = useState<Store[]>([]);
  const activeStoresId = activeStores.map((store) => store.storeID);
  const activeStoresIdString = activeStoresId.join(",");

  // Filters: Metacritic, recent, Store, Price, Title

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const response = await window.fetch(
          `https://www.cheapshark.com/api/1.0/deals?sortBy=${sortBy}&title=${search}&desc=${sortDirection}&onSale=${onSale}&storeID=${activeStoresIdString}`
        );
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setGamesList(data);
      } catch (error: any) {
        setIsError(`Something goes wrong ${error.message}`);
      }
      setIsLoading(false);
    }
    getData();
  }, [search, sortBy, sortDirection, onSale, activeStoresIdString]);

  return (
    <GamesListContext.Provider
      value={{
        gamesList,
        setSearch,
        setSortBy,
        sortBy,
        sortDirection,
        setSortDirection,
        onSale,
        setOnSale,
        activeStoresId,
        setActiveStores,
        isLoading,
        search,
        isError,
      }}
    >
      {props.children}
    </GamesListContext.Provider>
  );
}
