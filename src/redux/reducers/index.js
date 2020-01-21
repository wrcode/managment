import { combineReducers } from "redux";
import workers from "./workers.reducer";
import processes from "./processes.reducer";
import advances from "./advances.reducer";
import documents from "./documents.reducer";

export default combineReducers({
  documents,
  advances,
  processes,
  workers
});
