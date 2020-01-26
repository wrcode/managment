import workers from "./workers.reducer";
import processes from "./processes.reducer";
import advances from "./advances.reducer";
import documents from "./documents.reducer";
import payments from "./payments.reducer";

import { combineReducers } from "redux";

export default combineReducers({
  documents,
  advances,
  processes,
  workers,
  payments
});
