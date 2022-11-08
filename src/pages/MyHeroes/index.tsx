import { FormEvent, useState } from "react";

import ReactStars from "react-rating-stars-component";
import { NotFound } from "../../components/NotFound";
import { useHeroes } from "../../hooks/useHeroes";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { MyHeroCard } from "../../components/MyHeroCard";

import * as Styles from "./styles";

import { RatingSearchType } from "../../@types";

export function MyHeroes() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [character, setCharacter] = useState<RatingSearchType>({
    name,
    rating,
  } as RatingSearchType);
  const [count, setCount] = useState(20);

  const { atualStorage } = useHeroes();
  const navigation = useNavigate();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setCharacter({ name, rating });
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <ReactStars
            count={5}
            onChange={setRating}
            size={24}
            activeColor="#ffd700"
          />
          <Button type="submit">Procurar</Button>
        </Styles.Content>
      </Styles.InputContainer>
      <Styles.TodoContainer>
        <Styles.TodoGrid>
          {atualStorage[0] ? (
            atualStorage.map(
              (item) =>
                item.name.startsWith(character.name) &&
                item.rating >= character.rating && (
                  <MyHeroCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    rating={item.rating}
                  />
                )
            )
          ) : (
            <NotFound title="Você ainda não avaliou nenhum herói" />
          )}
        </Styles.TodoGrid>
      </Styles.TodoContainer>
    </Styles.Container>
  );
}
