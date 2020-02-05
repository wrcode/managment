import { createActions } from "reduxsauce";
import { createDefaultActions } from "./index";

export const { Types, Creators } = createActions(
  { setAuth: ["data"] },
  {
    prefix: `@USER/`
  }
);
