import { combineReducers } from "redux";
import count from "./Count";

const result = combineReducers({
  count,
  // profile,
  // product
});

export default result;
