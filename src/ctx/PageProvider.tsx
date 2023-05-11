import { createContext, useState, useContext } from "react";
import { GamesListContext } from "./GamesListProvider";
import { GameData } from "./GamesListProvider";

export const PageContext = createContext<{
    page: number,
  gamesPage: GameData[];
  numberOfPages: number;
  setItemPerPage: React.Dispatch<React.SetStateAction<number>>;
  setPageHandler: (page: number) => void;
}>({
    page: 1,
  gamesPage: [],
  numberOfPages: 1,
  setItemPerPage: () => {},
  setPageHandler: (page: number) => {},
});

export default function PageProvider(props: { children: React.ReactNode }) {
  const { gamesList } = useContext(GamesListContext);

  const [itemPerPage, setItemPerPage] = useState<number>(10);

  const [page, setPage] = useState<number>(1);
  const gamesPage = gamesList.slice(
    page * itemPerPage - itemPerPage,
    page * itemPerPage
  );
  const numberOfPages = Math.trunc(gamesList.length / 10);

  const setPageHandler = (page: number) => {
    setPage(page);
  };

  return (
    <PageContext.Provider
      value={{ page, gamesPage, numberOfPages, setItemPerPage, setPageHandler }}
    >
      {props.children}
    </PageContext.Provider>
  );
}
