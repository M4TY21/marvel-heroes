import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";

const HeroesContext = createContext({});

function HeroesProvider(children: ReactNode) {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchheroes() {
    const response = await api.get("/heroes");
    setHeroes(response.data.heroes);
    setLoading(false);
  }

  return (
    <HeroesContext.Provider value={{ heroes, loading, fetchheroes }}>
      {children}
    </HeroesContext.Provider>
  );
}

function useHeroes() {
  const context = useContext(HeroesContext);
  return context;
}

export { HeroesProvider, useHeroes };
