import { createActions } from "reduxsauce";

export const { Types, Creators } = createActions(
  {
    get: [],
    set: ["data"],
    add: ["data"],
    drop: ["id"],
    edit: ["id"],
    setEdit: ["data"],
    update: ["data"],
    reset: null
  },
  { prefix: `@PROCESSES/` }
);
