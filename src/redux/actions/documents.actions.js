import { createActions } from "reduxsauce";
import { createDefaultActions } from "./index";
export const { Types, Creators } = createActions(
  createDefaultActions({ addImage: ["data"] }),
  {
    prefix: `@DOCUMENTS/`
  }
);
