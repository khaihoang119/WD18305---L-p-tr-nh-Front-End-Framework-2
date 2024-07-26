import { combineReducers } from "redux";
import count from "./Count";
import auth from "./Auth";
import student from "./Student";

const result = combineReducers({
  count,
  auth,
  student,
});

export default result;
