import ReactStars from "react-rating-stars-component";
import { useHeroes } from "../../hooks/useHeroes";
import { Info } from "react-feather";
import swal from "sweetalert";

import * as Styles from "./styles";

import { CharactersTypes } from "../../@types";

export function HomeCard({
  id,
  name,
  description,
  thumbnail,
}: CharactersTypes) {
  const { updateStorage } = useHeroes();

  function openModal() {
    if (description === "") {
      swal({
        title: "Aviso",
        text: "Este herói não tem descrição registrada.",
        icon: "warning",
      });
    } else {
      swal({
        title: "Descrição",
        text: description,
        icon: "info",
      });
    }
  }

  function handleRating(rating: number) {
    updateStorage({ id, name, rating });
  }

  return (
    <Styles.Container>
      <Styles.DescriptionIcon onClick={openModal}>
        <Info size={24} color="black" />
      </Styles.DescriptionIcon>
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
