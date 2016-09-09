import { handleActions } from "redux-actions";
import * as Items from "../actions/items";

const initialState = {
  isFetching: false,
  isAdding: false,
  results: []
};

// TODO
export default handleActions({
  [Items.FETCH_ITEMS_REQUEST]: state => ({
    ...state,
    isFetching: true
  })
}, initialState);
