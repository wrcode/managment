import { Types } from "../actions/payments.actions";
import { createDefaultReducer } from "./helpers";

export default createDefaultReducer("payments", "payment", Types);
