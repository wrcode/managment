import { createReducer } from "reduxsauce";
import { Types } from "../actions/workers.actions";

export const INITIAL_STATE = { workers: [] };

export const SET = (state, { data }) => {
  return { ...state, data };
};

export const HANDLERS = {
  [Types.SET]: SET
};

export default createReducer(INITIAL_STATE, HANDLERS);
