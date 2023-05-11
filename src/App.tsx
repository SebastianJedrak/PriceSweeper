import "./App.css";
import Header from "./components/header/Header";
import GamesList from "./components/list/GamesList";
import StoreProvider from "./ctx/StoreProvider";
import GamesListProvider from "./ctx/GamesListProvider";
import PageProvider from "./ctx/PageProvider";
import Footer from "./components/Footer";

function App() {
  return (
    <GamesListProvider>
      <PageProvider>
        <StoreProvider>
          <Header />
          <GamesList />
          <Footer />
        </StoreProvider>
      </PageProvider>
    </GamesListProvider>
  );
}

export default App;
