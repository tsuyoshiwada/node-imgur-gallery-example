/* eslint-disable */
import { takeEvery } from "redux-saga";
import * as Items from "../actions/items";

function handleFetchItemsRequest() {
  // TODO
  console.log("FETCH: Saga");
}

export default function *itemsSaga() {
  yield [
    takeEvery(Items.FETCH_ITEMS_REQUEST, handleFetchItemsRequest)
  ];
}
