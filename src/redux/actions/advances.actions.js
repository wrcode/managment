import { createActions } from "reduxsauce";
import { createDefaultActions } from "./index";
export const { Types, Creators } = createActions(createDefaultActions(), {
  prefix: `@ADVANCES/`
});
