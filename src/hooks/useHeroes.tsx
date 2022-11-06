import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";

import {
  CharactersTypes,
  ContextTypes,
  FilterTypes,
  SelectFilterType,
} from "../@types";

interface HeroesProviderProps {
  children: ReactNode;
}

const HeroesContext = createContext({} as ContextTypes);

function HeroesProvider({ children }: HeroesProviderProps) {
  const [characters, setCharacters] = useState<CharactersTypes[]>([]);
  const [filter, SetFilter] = useState<FilterTypes[]>([]);

  async function fetchCharacters(limit: number) {
    const response = await api.get("/characters", {
      params: {
        limit,
      },
    });
    console.log(response.data.data);
  }

  async function fetchFilters(typeFilter: string) {
    if (typeFilter === "") {
      return;
    }
    const response = await api.get(`/${typeFilter}`);
    SetFilter(response.data.data.results);
  }

  return (
    <HeroesContext.Provider
      value={{ characters, filter, fetchCharacters, fetchFilters }}
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
