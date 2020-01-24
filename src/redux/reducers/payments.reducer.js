import { createReducer } from "reduxsauce";
import { Types } from "../actions/payments.actions";

export const INITIAL_STATE = { payments: [], payment: null };

export const ADD = (state, { data = [] }) => ({ ...state, payments: data });
export const EDIT = (state, { data = {} }) => ({ ...state, payment: data });
export const RESET = state => ({
  ...state,
  payment: null
});

export const HANDLERS = {
  [Types.ADD]: ADD,
  [Types.SET_EDIT]: EDIT,
  [Types.RESET]: RESET
};

export default createReducer(INITIAL_STATE, HANDLERS);
