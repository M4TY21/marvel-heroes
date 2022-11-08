import * as Styles from "./styles";

type NotFoundType = {
  title: string;
};

export function NotFound({ title }: NotFoundType) {
  return (
    <Styles.Container>
      <Styles.Icon color="black" size={48} />
      <Styles.Message>{title}</Styles.Message>
    </Styles.Container>
  );
}
