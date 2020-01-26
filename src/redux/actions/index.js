export const createDefaultActions = (more = {}) => ({
  get: ["data"],
  set: ["data"],
  add: ["data"],
  drop: ["id"],
  edit: ["id"],
  setEdit: ["data"],
  update: ["data"],
  reset: null,
  ...more
});
