import { createReducer } from "reduxsauce";
import { Types } from "../actions/workers.actions";

export const INITIAL_STATE = { workers: [], worker: null };

export const ADD = (state, { data = [] }) => ({ ...state, workers: data });
export const EDIT = (state, { data = {} }) => ({ ...state, worker: data });
export const RESET = state => ({
  ...state,
  worker: null
});

export const HANDLERS = {
  [Types.ADD]: ADD,
  [Types.SET_EDIT]: EDIT,
  [Types.RESET]: RESET
};

export default createReducer(INITIAL_STATE, HANDLERS);
