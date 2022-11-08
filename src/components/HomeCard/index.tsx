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
    if (description === "") {
      swal({
        title: "Aviso",
        text: "Este heroi não tem descrição registrada.",
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

  function handleRating(rating: number | undefined) {
    updateStorage({ id, name, rating });
  }

  return (
    <Styles.Container>
      <Styles.DescriptionIcon onClick={openModal}>
        <Info size={24} />
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
