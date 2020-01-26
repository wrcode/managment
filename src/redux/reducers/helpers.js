import { createReducer } from "reduxsauce";

export const createDefaultReducer = (multi, single, types) => {
  return createReducer(
    { [multi]: [], [single]: null },
    {
      [types.ADD]: (state, { data = [] }) => ({ ...state, [multi]: data }),
      [types.SET_EDIT]: (state, { data = {} }) => ({
        ...state,
        [single]: data
      }),
      [types.RESET]: state => ({
        ...state,
        [single]: null
      })
    }
  );
};
