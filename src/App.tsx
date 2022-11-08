import { HeroesProvider } from "./hooks/useHeroes";
import { GlobalStyle } from "./styles/global";
import { AppRoutes } from "./routes";

function App() {
  return (
    <HeroesProvider>
      <GlobalStyle />
      <AppRoutes />
    </HeroesProvider>
  );
}

export default App;
