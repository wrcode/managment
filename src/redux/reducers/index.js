import { combineReducers } from "redux";
import workers from "./workers.reducer";
import processes from "./processes.reducer";

export default combineReducers({
  processes,
  workers
});
