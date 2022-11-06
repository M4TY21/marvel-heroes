import { FormEvent, useEffect, useState } from "react";
import { useHeroes } from "../../hooks/useHeroes";

import * as Styles from "./styles";

import { SelectFilterType } from "../../@types";
import { HomeCard } from "../../components/HomeCard";
import { Button } from "../../components/Button";

export function Home() {
  const [name, setName] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [count, setCount] = useState(20);
  const [filterSelect, setFilterSelect] = useState<SelectFilterType>(
    {} as SelectFilterType
  );

  const { characters, filter, fetchCharacters, fetchFilters } = useHeroes();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setCount(count + 10);
  }

  // useEffect(() => {
  //   fetchFilters(typeFilter);
  // }, [typeFilter]);

  // useEffect(() => {
  //   fetchCharacters(count);
  // }, [count]);

  // useEffect(() => {
  //   console.log(filterSelect);
  // }, [filterSelect]);

  return (
    <Styles.Container>
      <Styles.InputContainer>
        <Styles.ButtonContainer>
          <Button>Meus Herois</Button>
        </Styles.ButtonContainer>
        <Styles.Content onSubmit={(e) => handleSubmit(e)}>
          <Styles.SearchInput
            type="search"
            placeholder="Nome do herói"
            name="hero"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Styles.Filter>
            <Styles.Label>
              <Styles.Radio
                type="radio"
                value=""
                name="typeFilter"
                onChange={(e) => setTypeFilter(e.target.value)}
              />
              Sem Filtro
            </Styles.Label>

            <Styles.Label>
              <Styles.Radio
                type="radio"
                value="series"
                name="typeFilter"
                onChange={(e) => setTypeFilter(e.target.value)}
              />
              Series
            </Styles.Label>

            <Styles.Label>
              <Styles.Radio
                type="radio"
                value="comics"
                name="typeFilter"
                onChange={(e) => setTypeFilter(e.target.value)}
              />
              Quadrinhos
            </Styles.Label>
          </Styles.Filter>
          {typeFilter && (
            <Styles.SelectInput
              name="filter"
              options={filter.map((item) => ({
                value: item.id,
                label: item.title,
              }))}
              onChange={(value: SelectFilterType) => {
                setFilterSelect(value);
              }}
            />
          )}

          <Button type="submit">Procurar</Button>
        </Styles.Content>
      </Styles.InputContainer>
      <Styles.TodoContainer>
        <Styles.TodoGrid>
          <HomeCard
            id={"1"}
            name={"3-D Man"}
            description={"321"}
            thumbnail={{
              path: "https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
              extension: ".jpg",
            }}
          />
          <HomeCard
            id={"2"}
            name={"3-D Man"}
            description={"321"}
            thumbnail={{
              path: "https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
              extension: ".jpg",
            }}
          />
          <HomeCard
            id={"3"}
            name={"3-D Man"}
            description={"321"}
            thumbnail={{
              path: "https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
              extension: ".jpg",
            }}
          />
          <HomeCard
            id={"4"}
            name={"3-D Man"}
            description={"321"}
            thumbnail={{
              path: "https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
              extension: ".jpg",
            }}
          />
          <Styles.Button onClick={() => fetchCharacters(count)}>
            Ver mais
          </Styles.Button>
        </Styles.TodoGrid>
      </Styles.TodoContainer>
    </Styles.Container>
  );
}
