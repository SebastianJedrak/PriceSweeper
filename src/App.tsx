import "./App.css";
import Header from "./components/header/Header";
import GamesList from "./components/list/GamesList";
import StoreProvider from "./ctx/StoreProvider";

function App() {
  return (
    <StoreProvider>
      <Header />
      <GamesList />
    </StoreProvider>
  );
}

export default App;
