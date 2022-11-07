import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

import {
  CharactersTypes,
  ContextTypes,
  fetchCharactersTypes,
  FilterTypes,
  StorageCharactersTypes,
} from "../@types";

interface HeroesProviderProps {
  children: ReactNode;
}

const HeroesContext = createContext({} as ContextTypes);

function HeroesProvider({ children }: HeroesProviderProps) {
  const [characters, setCharacters] = useState<CharactersTypes[]>([]);
  const [filter, SetFilter] = useState<FilterTypes[]>([]);
  const [loading, setLoading] = useState(false);
  const [atualStorage, setAtualStorage] = useState<StorageCharactersTypes[]>(
    []
  );

  async function fetchCharacters({
    limit,
    typeFilter,
    filterId,
    nameStartsWith,
  }: fetchCharactersTypes) {
    setLoading(true);
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
    setLoading(false);
  }

  async function fetchFilters(typeFilter: string) {
    if (typeFilter === "") {
      return;
    }
    setLoading(true);
    const response = await api.get(`/${typeFilter}`);
    SetFilter(response.data.data.results);
    setLoading(false);
  }

  function getStorage() {
    const storage = localStorage.getItem("characters");

    if (storage) {
      const storageParse = JSON.parse(storage);
      setAtualStorage(storageParse);
    }
  }

  function updateStorage({ id, rating }: StorageCharactersTypes) {
    localStorage.setItem(
      "characters",
      JSON.stringify([...atualStorage, { id, rating }])
    );

    getStorage();
  }

  useEffect(() => {
    getStorage();
  }, []);

  return (
    <HeroesContext.Provider
      value={{
        characters,
        loading,
        filter,
        fetchCharacters,
        fetchFilters,
        updateStorage,
      }}
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
