import { all } from "redux-saga/effects";
import countWatch from "./Count";

function* middleware() {
  yield all([countWatch()]);
}

export default middleware;