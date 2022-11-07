import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";

import {
  CharactersTypes,
  ContextTypes,
  fetchCharactersTypes,
  FilterTypes,
} from "../@types";

interface HeroesProviderProps {
  children: ReactNode;
}

const HeroesContext = createContext({} as ContextTypes);

function HeroesProvider({ children }: HeroesProviderProps) {
  const [characters, setCharacters] = useState<CharactersTypes[]>([]);
  const [filter, SetFilter] = useState<FilterTypes[]>([]);

  async function fetchCharacters({
    limit,
    typeFilter,
    filterId,
    nameStartsWith,
  }: fetchCharactersTypes) {
    const url = filterId
      ? `/${typeFilter}/${filterId}/characters`
      : "/characters";
    const params =
      nameStartsWith !== ""
        ? {
            limit,
            nameStartsWith,
          }
        : {
            limit,
          };

    const response = await api.get(url, {
      params,
    });
    setCharacters(response.data.data.results);
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
