import { createReducer } from "reduxsauce";
import { Types } from "../actions/workers.actions";

export const INITIAL_STATE = { workers: [] };

export const SET = (state, { workers }) => {
  return { ...state, workers };
};

export const HANDLERS = {
  [Types.SET]: SET
};

export default createReducer(INITIAL_STATE, HANDLERS);
