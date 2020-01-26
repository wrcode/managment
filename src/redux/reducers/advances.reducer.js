import { createDefaultReducer } from "./helpers";
import { Types } from "../actions/advances.actions";

export default createDefaultReducer("advances", "advance", Types);
