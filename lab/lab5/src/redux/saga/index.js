import { all } from "redux-saga/effects";
import studentWatch from "./Student";

function* middleware() {
  yield all([studentWatch()]);
}

export default middleware;