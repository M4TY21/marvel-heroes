import { Formik } from "formik";

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
  return (
    <Container>
      <InputContainer>
        <Formik
          initialValues={{ hero: "", typeFilter: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values, handleSubmit }) => (
            <Content
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <SearchInput
                type="search"
                placeholder="Nome do herói"
                name="hero"
              />
              <Filter>
                <Label>
                  <Radio type="radio" value="" name="typeFilter" />
                  Sem Filtro
                </Label>

                <Label>
                  <Radio type="radio" value="Filmes" name="typeFilter" />
                  Filme
                </Label>

                <Label>
                  <Radio type="radio" value="Quadrinhos" name="typeFilter" />
                  Quadrinhos
                </Label>

                <Label>
                  <Radio type="radio" value="Criadores" name="typeFilter" />
                  Criadores
                </Label>
              </Filter>
              {values.typeFilter && <SelectInput name="filter" />}

              <Button type="submit">Search</Button>
            </Content>
          )}
        </Formik>
      </InputContainer>
      <TodoContainer>dasda</TodoContainer>
    </Container>
  );
}
