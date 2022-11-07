import * as Styles from "./styles";

export function NotFound() {
  return (
    <Styles.Container>
      <Styles.Icon color="black" size={48} />
      <Styles.Message>Não possui nenhum herói com esse filtro</Styles.Message>
    </Styles.Container>
  );
}
