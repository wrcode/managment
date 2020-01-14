import { createActions } from "reduxsauce";

export const { Types, Creators } = createActions(
  {
    get: ["id"],
    set: ["data"],
    drop: ["id"]
  },
  {}
);
