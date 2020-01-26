import { Types } from "../actions/workers.actions";
import { createDefaultReducer } from "./helpers";

export default createDefaultReducer("workers", "worker", Types);
