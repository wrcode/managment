import { Types } from "../actions/transactions.actions";

import { createDefaultReducer } from "./helpers";

export default createDefaultReducer("transactions", "transaction", Types);
