import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";

interface HeroesProviderProps {
  children: ReactNode;
}

const HeroesContext = createContext({});

function HeroesProvider({ children }: HeroesProviderProps) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchCharacters() {
    const response = await api.get("/characters");
    setCharacters(response.data);
    setLoading(false);
  }

  return (
    <HeroesContext.Provider value={{ characters, loading, fetchCharacters }}>
      {children}
    </HeroesContext.Provider>
  );
}

function useHeroes() {
  const context = useContext(HeroesContext);
  return context;
}

export { HeroesProvider, useHeroes };
