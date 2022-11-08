import { useEffect, useState } from "react";

import ReactStars from "react-rating-stars-component";
import { useHeroes } from "../../hooks/useHeroes";
import { api } from "../../services/api";
import { Info, X } from "react-feather";
import swal from "sweetalert";

import * as Styles from "./styles";
import { CharactersTypes, StorageCharactersTypes } from "../../@types";

export function MyHeroCard({ id, name, rating }: StorageCharactersTypes) {
  const [character, setCharacter] = useState<CharactersTypes>(
    {} as CharactersTypes
  );

  const { removeItemStorage } = useHeroes();

  function openModal() {
    if (character.description === "") {
      swal({
        title: "Aviso",
        text: "Este heroi não tem descrição registrada.",
        icon: "warning",
      });
    } else {
      swal({
        title: "Descrição",
        text: character.description,
        icon: "info",
      });
    }
  }

  function RemoveCharacter() {
    swal({
      title: "Tem certeza?",
      text: "Tem certeza que deseja excluir a avaliação deste herói?",
      icon: "warning",
      buttons: ["Cancelar", "Sim"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        removeItemStorage(id);
      }
    });
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
      <Styles.RemoveIcon onClick={RemoveCharacter}>
        <X size={24} />
      </Styles.RemoveIcon>
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
