import { SelectFilter } from ".";

declare module "react-select/dist/declarations/src/Select" {
  export interface Props<Options> {
    value: SelectFilter;
  }
}
