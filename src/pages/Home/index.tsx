import { useEffect, useState } from "react";
import { useHeroes } from "../../hooks/useHeroes";

import {
  Container,
  InputContainer,
  Content,
  SearchInput,
  Filter,
  Radio,
  Label,
  SelectInput,
  Button,
  TodoContainer,
} from "./styles";
import { SelectFilterType } from "../../@types";

export function Home() {
  const [name, setName] = useState("");
  const [filterSelect, setFilterSelect] = useState<SelectFilterType>(
    {} as SelectFilterType
  );
  const { filter, fetchCharacters, fetchFilters } = useHeroes();
  const [typeFilter, setTypeFilter] = useState("");

  useEffect(() => {
    fetchFilters(typeFilter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeFilter]);

  useEffect(() => {
    fetchCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(filterSelect);
  }, [filterSelect]);

  return (
    <Container>
      <InputContainer>
        <Content onSubmit={(e) => {}}>
          <SearchInput
            type="search"
            placeholder="Nome do herói"
            name="hero"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Filter>
            <Label>
              <Radio
                type="radio"
                value=""
                name="typeFilter"
                onChange={(e) => setTypeFilter(e.target.value)}
              />
              Sem Filtro
            </Label>

            <Label>
              <Radio
                type="radio"
                value="series"
                name="typeFilter"
                onChange={(e) => setTypeFilter(e.target.value)}
              />
              Series
            </Label>

            <Label>
              <Radio
                type="radio"
                value="comics"
                name="typeFilter"
                onChange={(e) => setTypeFilter(e.target.value)}
              />
              Quadrinhos
            </Label>
          </Filter>
          {typeFilter && (
            <SelectInput
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

          <Button type="submit">Search</Button>
        </Content>
      </InputContainer>
      <TodoContainer></TodoContainer>
    </Container>
  );
}
