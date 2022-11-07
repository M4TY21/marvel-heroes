import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export type CharactersTypes = {
  id: string;
  name: string;
  description: string;
  thumbnail?: {
    extension: string;
    path: string;
  };
};

export type FilterTypes = {
  id: number;
  title: string;
  characters: {
    collectionURI: string;
  };
};

export type SelectFilterType = {
  value: string;
  label: string;
};

export type fetchCharactersTypes = {
  limit: number;
  typeFilter: string;
  filterId: string;
  nameStartsWith: string;
};

export interface ContextTypes {
  characters: CharactersTypes[];
  filter: FilterTypes[];
  fetchCharacters: ({
    limit,
    typeFilter,
    filterId,
    nameStartsWith,
  }: fetchCharactersTypes) => Promise<void>;
  fetchFilters: (typeFilter: string) => Promise<void>;
}
