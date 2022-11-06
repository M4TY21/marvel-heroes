import * as Styles from "./styles";

import { ButtonProps } from "../../@types";

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <Styles.Container {...rest}>
      <Styles.Title>{children}</Styles.Title>
    </Styles.Container>
  );
}
