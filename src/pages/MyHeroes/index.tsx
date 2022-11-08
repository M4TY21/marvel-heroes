import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StorageCharactersTypes } from "../../@types";
import { Button } from "../../components/Button";
import { MyHeroCard } from "../../components/MyHeroCard";
import { useHeroes } from "../../hooks/useHeroes";
import * as Styles from "./styles";

export function MyHeroes() {
  const { atualStorage } = useHeroes();

  const [name, setName] = useState("");
  const [character, setCharacter] = useState("");
  const [count, setCount] = useState(20);

  const navigation = useNavigate();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setCharacter(name);
    setCount(count + 1);
  }

  function handleNavigateToHome() {
    navigation("/");
  }

  return (
    <Styles.Container>
      <Styles.InputContainer>
        <Styles.ButtonContainer>
          <Button onClick={handleNavigateToHome}>Voltar</Button>
        </Styles.ButtonContainer>
        <Styles.Content onSubmit={(e) => handleSubmit(e)}>
          <Styles.SearchInput
            type="search"
            placeholder="Nome do herói"
            name="hero"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button type="submit">Procurar</Button>
        </Styles.Content>
      </Styles.InputContainer>
      <Styles.TodoContainer>
        <Styles.TodoGrid>
          {atualStorage.map((item) =>
            character === "" ? (
              <MyHeroCard
                key={item.id}
                id={item.id}
                name={item.name}
                rating={item.rating}
              />
            ) : (
              item.name.startsWith(character) && (
                <MyHeroCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  rating={item.rating}
                />
              )
            )
          )}
        </Styles.TodoGrid>
      </Styles.TodoContainer>
    </Styles.Container>
  );
}
