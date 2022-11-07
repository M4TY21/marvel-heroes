import { FormEvent, useEffect, useState } from "react";
import { useHeroes } from "../../hooks/useHeroes";

import { HomeCard } from "../../components/HomeCard";
import { Button } from "../../components/Button";

import * as Styles from "./styles";

import { SelectFilterType } from "../../@types";
import { Load } from "../../components/Load";
import { NotFound } from "../../components/NotFound";

export function Home() {
  const [name, setName] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [count, setCount] = useState(20);
  const [filterSelect, setFilterSelect] = useState<SelectFilterType>(
    {} as SelectFilterType
  );

  const { characters, loading, filter, fetchCharacters, fetchFilters } =
    useHeroes();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setCount(count + 1);
  }

  // useEffect(() => {
  //   fetchFilters(typeFilter);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [typeFilter]);

  // useEffect(() => {
  //   fetchCharacters({
  //     limit: count,
  //     typeFilter,
  //     filterId: filterSelect.value,
  //     nameStartsWith: name,
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
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
                onChange={(e) => {
                  setTypeFilter(e.target.value);
                  setFilterSelect({} as SelectFilterType);
                }}
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
          {characters[0] ? (
            characters.map((item) => (
              <HomeCard
                key={item.id}
                name={item.name}
                description={item.description}
                thumbnail={item.thumbnail}
              />
            ))
          ) : (
            <NotFound />
          )}
          <Styles.Button onClick={() => setCount(count + 20)}>
            Ver mais
          </Styles.Button>
        </Styles.TodoGrid>
      </Styles.TodoContainer>
      {loading && <Load />}
    </Styles.Container>
  );
}
