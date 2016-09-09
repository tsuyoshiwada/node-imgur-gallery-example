import { normalize, arrayOf } from "normalizr";
import { takeEvery } from "redux-saga";
import { call, put } from "redux-saga/effects";
import { ItemSchema } from "../schemas/";
import * as Services from "../services/items";
import * as Items from "../actions/items";


function *handleFetchItemsRequest() {
  try {
    const response = yield call(Services.fetchItems);
    const normalized = normalize(response, { items: arrayOf(ItemSchema) });
    yield put(Items.fetchItemsSuccess(normalized));
  } catch (error) {
    yield put(Items.fetchItemsFailure(error));
  }
}

function *handleAddItemRequest({ payload }) {
  try {
    const { file, name } = payload;
    const response = yield call(Services.addItem, file, name);
    const normalized = normalize(response, { item: ItemSchema });
    yield put(Items.addItemSuccess(normalized));
  } catch (error) {
    yield put(Items.addItemFailure(error));
  }
}


export default function *itemsSaga() {
  yield [
    takeEvery(Items.FETCH_ITEMS_REQUEST, handleFetchItemsRequest),
    takeEvery(Items.ADD_ITEM_REQUEST, handleAddItemRequest)
  ];
}
