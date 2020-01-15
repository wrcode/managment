import { createActions } from "reduxsauce";

export const { Types, Creators } = createActions(
  {
    get: [],
    set: ["data"],
    add: ["data"],
    drop: ["id"]
  },
  {}
);
