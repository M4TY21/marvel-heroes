import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";

import { CharactersTypes, ContextTypes, filterTypes } from "../@types";

interface HeroesProviderProps {
  children: ReactNode;
}

const HeroesContext = createContext({} as ContextTypes);

function HeroesProvider({ children }: HeroesProviderProps) {
  const [characters, setCharacters] = useState<CharactersTypes[]>([]);
  const [filter, SetFilter] = useState<filterTypes[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchCharacters() {
    const response = await api.get("/characters");
    setCharacters(response.data.data.results);
    setLoading(false);
  }

  async function fetchFilters(typeFilter: string) {
    const response = await api.get(`/${typeFilter}`);
    SetFilter(response.data.data.results);
  }

  return (
    <HeroesContext.Provider
      value={{ characters, filter, loading, fetchCharacters, fetchFilters }}
    >
      {children}
    </HeroesContext.Provider>
  );
}

function useHeroes() {
  const context = useContext(HeroesContext);
  return context;
}

export { HeroesProvider, useHeroes };
