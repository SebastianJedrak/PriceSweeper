import "./App.css";
import Header from "./components/header/Header";
import GamesList from "./components/list/GamesList";
import StoreProvider from "./ctx/StoreProvider";
import GamesListProvider from "./ctx/GamesListProvider";
import Footer from "./components/Footer";

function App() {
  return (
    <GamesListProvider>
      <StoreProvider>
        <Header />
        <GamesList />
        <Footer/>
      </StoreProvider>
    </GamesListProvider>
  );
}

export default App;
