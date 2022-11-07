import { Info } from "react-feather";
import swal from "sweetalert";
import ReactStars from "react-rating-stars-component";

import * as Styles from "./styles";

import { CharactersTypes } from "../../@types";
import { useHeroes } from "../../hooks/useHeroes";

export function HomeCard({
  id,
  name,
  description,
  thumbnail,
}: CharactersTypes) {
  const { updateStorage } = useHeroes();

  function openModal() {
    swal({
      title: "Descrição",
      text: description,
      icon: "info",
    });
  }

  function handleRating(rating: number | undefined) {
    updateStorage({ id, rating });
  }

  return (
    <Styles.Container>
      {description !== "" && (
        <Styles.DescriptionIcon onClick={openModal}>
          <Info size={24} />
        </Styles.DescriptionIcon>
      )}
      <Styles.Content>
        <Styles.Figure>
          <Styles.HeroImg src={`${thumbnail?.path}.${thumbnail?.extension}`} />
        </Styles.Figure>
        <Styles.Name>{name}</Styles.Name>
      </Styles.Content>
      <ReactStars
        count={5}
        onChange={handleRating}
        size={24}
        activeColor="#ffd700"
      />
    </Styles.Container>
  );
}
