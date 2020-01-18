import { createReducer } from "reduxsauce";
import { Types } from "../actions/workers.actions";

export const INITIAL_STATE = { workers: [], worker: {} };

export const ADD = (state, { data = [] }) => ({ ...state, workers: data });
export const EDIT = (state, { data = [] }) => ({ ...state, worker: data });

export const HANDLERS = {
  [Types.ADD]: ADD,
  [Types.EDIT]: EDIT
};

export default createReducer(INITIAL_STATE, HANDLERS);
