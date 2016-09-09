import { fork } from "redux-saga/effects";
import itemsSaga from "./items";

export default function *rootSaga() {
  yield [
    fork(itemsSaga)
  ];
}
