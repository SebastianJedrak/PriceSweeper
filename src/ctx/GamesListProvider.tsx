import { createContext, useEffect, useState } from "react";

export type GameData = {
  title: string;
  thumb: string;
  normalPrice: string;
  salePrice: string;
  metacriticScore: string;
  metacriticLink: string;
  storeID: string;
};


export const GamesListContext = createContext<{gamesList: GameData[]}>({ gamesList: [] });

export default function GamesListProvider(props: {
  children: React.ReactNode;
}) {
  const [gamesList, setGamesList] = useState<GameData[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getData() {
      const response = await window.fetch(
        `https://www.cheapshark.com/api/1.0/deals?sortBy=recent&title=${search}`
      );
      const data = await response.json();
      setGamesList(data);
    }
    getData();
  }, [search]);

  return (
    <GamesListContext.Provider value={{gamesList}}>
      {props.children}
    </GamesListContext.Provider>
  );
}
