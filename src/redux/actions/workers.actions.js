import { createActions } from "reduxsauce";

export const { Types, Creators } = createActions(
  {
    get: [],
    getEdit: ["id"],
    set: ["data"],
    add: ["data"],
    drop: ["id"],
    edit: ["id"]
  },
  {}
);
