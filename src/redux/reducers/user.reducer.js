import { createReducer } from "reduxsauce";

export default createReducer(
  { auth: false },
  {
    [Types.SET_AUTH]: (state, { data = [] }) => ({ ...state, [multi]: data })
  }
);
