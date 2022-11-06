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

export function Home() {
  const [name, setName] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [filterSelect, setFilterSelect] = useState<unknown>({});
  const { filter, fetchFilters } = useHeroes();

  const options = filter.map((item) => ({ value: item.id, label: item.title }));

  useEffect(() => {
    fetchFilters(typeFilter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeFilter]);

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
              options={options}
              onChange={(value) => setFilterSelect(value)}
            />
          )}

          <Button type="submit">Search</Button>
        </Content>
      </InputContainer>
      <TodoContainer></TodoContainer>
    </Container>
  );
}
