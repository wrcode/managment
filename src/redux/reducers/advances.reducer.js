import { createReducer } from "reduxsauce";
import { Types } from "../actions/advances.actions";

export const INITIAL_STATE = { advances: [], advance: null };

export const ADD = (state, { data = [] }) => ({ ...state, advances: data });
export const EDIT = (state, { data = {} }) => ({ ...state, advance: data });
export const RESET = state => ({
  ...state,
  advance: null
});

export const HANDLERS = {
  [Types.ADD]: ADD,
  [Types.SET_EDIT]: EDIT,
  [Types.RESET]: RESET
};

export default createReducer(INITIAL_STATE, HANDLERS);
