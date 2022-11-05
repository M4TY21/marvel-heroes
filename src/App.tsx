import { HeroesProvider } from "./hooks/useHeroes";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <HeroesProvider>
      <GlobalStyle />
      <AppRoutes />
    </HeroesProvider>
  );
}

export default App;
