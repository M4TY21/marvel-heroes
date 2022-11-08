import { useEffect, useState } from "react";

import ReactStars from "react-rating-stars-component";
import { api } from "../../services/api";
import { Info } from "react-feather";
import swal from "sweetalert";

import * as Styles from "./styles";

import { CharactersTypes, StorageCharactersTypes } from "../../@types";

export function MyHeroCard({ id, name, rating }: StorageCharactersTypes) {
  const [character, setCharacter] = useState<CharactersTypes>(
    {} as CharactersTypes
  );

  function openModal() {
    // if (description === "") {
    //   swal({
    //     title: "Aviso",
    //     text: "Este heroi não tem descrição registrada.",
    //     icon: "warning",
    //   });
    // } else {
    //   swal({
    //     title: "Descrição",
    //     text: description,
    //     icon: "info",
    //   });
    // }
  }

  async function fetchCharacterById() {
    const response = await api.get(`/characters/${id}`);
    setCharacter(response.data.data.results[0]);
  }

  useEffect(() => {
    fetchCharacterById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Styles.Container>
      <Styles.DescriptionIcon onClick={openModal}>
        <Info size={24} />
      </Styles.DescriptionIcon>
      <Styles.Content>
        <Styles.Figure>
          <Styles.HeroImg
            src={`${character.thumbnail?.path}.${character.thumbnail?.extension}`}
          />
        </Styles.Figure>
        <Styles.Name>{name}</Styles.Name>
      </Styles.Content>
      <ReactStars
        count={5}
        edit={false}
        value={rating}
        size={24}
        activeColor="#ffd700"
      />
    </Styles.Container>
  );
}
