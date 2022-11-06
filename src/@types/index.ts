export interface CharactersTypes {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  };
  comics: {
    available: string;
    items: [
      {
        name: string;
      }
    ];
  };
  events: {
    items: [
      {
        name: string;
      }
    ];
  };
  urls: [
    {
      type: string;
      url: string;
    }
  ];
}

export interface filterTypes {
  id: number;
  title: string;
  characters: {
    collectionURI: string;
  };
}

export type ContextTypes = {
  characters: CharactersTypes[];
  filter: filterTypes[];
  loading: boolean;
  fetchCharacters: (start: string) => Promise<void>;
  fetchFilters: (typeFilter: string) => Promise<void>;
};
