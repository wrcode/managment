import { Types } from "../actions/processes.actions";

import { createDefaultReducer } from "./helpers";

export default createDefaultReducer("processes", "process", Types);
