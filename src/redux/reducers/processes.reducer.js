import { createReducer } from "reduxsauce";
import { Types } from "../actions/processes.actions";

export const INITIAL_STATE = { processes: [], process: null };

export const ADD = (state, { data = [] }) => ({ ...state, processes: data });
export const EDIT = (state, { data = {} }) => ({ ...state, process: data });
export const RESET = state => ({
  ...state,
  process: null
});

export const HANDLERS = {
  [Types.ADD]: ADD,
  [Types.SET_EDIT]: EDIT,
  [Types.RESET]: RESET
};

export default createReducer(INITIAL_STATE, HANDLERS);
