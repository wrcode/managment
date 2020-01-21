import { createReducer } from "reduxsauce";
import { Types } from "../actions/documents.actions";

export const INITIAL_STATE = { documents: [], document: null };

export const ADD = (state, { data = [] }) => ({ ...state, documents: data });
export const EDIT = (state, { data = {} }) => ({ ...state, document: data });
export const ADD_IMAGE = (state, { data = {} }) => ({
  ...state,
  document: { ...state.data, image: data }
});
export const RESET = state => ({
  ...state,
  document: null
});

export const HANDLERS = {
  [Types.ADD]: ADD,
  [Types.SET_EDIT]: EDIT,
  [Types.RESET]: RESET,
  [Types.ADD_IMAGE]: ADD_IMAGE
};

export default createReducer(INITIAL_STATE, HANDLERS);
