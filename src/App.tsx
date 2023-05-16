import Header from "./components/header/Header";
import GamesList from "./components/list/GamesList";
import StoreProvider from "./ctx/StoreProvider";
import GamesListProvider from "./ctx/GamesListProvider";
import PageProvider from "./ctx/PageProvider";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  return (
    <GamesListProvider>
      <PageProvider>
        <StoreProvider>
          {" "}
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header />
            <GamesList />
            <Footer />
          </ThemeProvider>
        </StoreProvider>
      </PageProvider>
    </GamesListProvider>
  );
}

export default App;
