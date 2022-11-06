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
  function openModal() {
    swal({
      title: "Descrição",
      text: description,
      icon: "info",
    });
  }

  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.Figure>
          <Styles.HeroImg src={`${thumbnail?.path}${thumbnail?.extension}`} />
        </Styles.Figure>
        <Styles.Name>{name}</Styles.Name>
      </Styles.Content>

      {description !== "" && (
        <Styles.DescriptionIcon onClick={openModal}>
          <Info size={24} />
        </Styles.DescriptionIcon>
      )}
    </Styles.Container>
  );
}
