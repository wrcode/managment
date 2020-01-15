import { createReducer } from "reduxsauce";
import { Types } from "../actions/workers.actions";

export const INITIAL_STATE = [];

export const ADD = (state, { data = [] }) => data;

export const HANDLERS = {
  [Types.ADD]: ADD
};

export default createReducer(INITIAL_STATE, HANDLERS);
