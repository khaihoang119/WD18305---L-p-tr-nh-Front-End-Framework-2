import { combineReducers } from "redux";
import count from "./Count";
import auth from "./Auth";
const result = combineReducers({
  count,
  auth,
  // product
});

export default result;
