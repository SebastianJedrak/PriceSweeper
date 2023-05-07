import "./App.css";
import Header from "./components/header/Header";
import GamesList from "./components/list/GamesList";
import StoreProvider from "./ctx/StoreProvider";
import GamesListProvider from "./ctx/GamesListProvider";

function App() {
  return (
    <GamesListProvider>
      <StoreProvider>
        <Header />
        <GamesList />
      </StoreProvider>
    </GamesListProvider>
  );
}

export default App;
