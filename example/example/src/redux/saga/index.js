import { all } from "redux-saga/effects";
import countWatch from "./Count";
import authMatch from "./Auth";

function* middleware() {
  yield all([countWatch(), authMatch()]);
}

export default middleware;