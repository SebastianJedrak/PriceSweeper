import { createContext, useEffect, useState } from "react";

export type GameData = {
  title: string;
  thumb: string;
  normalPrice: string;
  salePrice: string;
  metacriticScore: string;
  metacriticLink: string;
  storeID: string;
  gameID: string;
};

export const GamesListContext = createContext<{
  gamesList: GameData[];
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}>({ gamesList: [], setSearch: () => {}, setSortBy: () => {} });

export default function GamesListProvider(props: {
  children: React.ReactNode;
}) {
  const [gamesList, setGamesList] = useState<GameData[]>([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("recent");
  
  // Metacritic, recent, Store, Price, Title

  useEffect(() => {
    async function getData() {
      const response = await window.fetch(
        `https://www.cheapshark.com/api/1.0/deals?sortBy=${sortBy}&title=${search}`
      );
      const data = await response.json();
      setGamesList(data);
      console.log(sortBy);
    }
    getData();
  }, [search, sortBy]);

  return (
    <GamesListContext.Provider value={{ gamesList, setSearch, setSortBy }}>
      {props.children}
    </GamesListContext.Provider>
  );
}
