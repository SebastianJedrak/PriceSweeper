import { createContext, useState, useContext } from "react";
import { GamesListContext } from "./GamesListProvider";

export const PageContext = createContext<number>(1);

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
    <PageProvider.Provider value={{ gamesPage, numberOfPages, setPageHandler }}>
      {props.children}
    </PageProvider.Provider>
  );
}
