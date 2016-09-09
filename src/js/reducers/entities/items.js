import { handleActions } from "redux-actions";
import * as Items from "../../actions/items";

export default handleActions({
  // Fetch
  [Items.FETCH_ITEMS_SUCCESS]: (state, { payload }) => ({
    ...state,
    ...payload.entities.items
  }),

  // Add
  [Items.ADD_ITEM_SUCCESS]: (state, { payload }) => ({
    ...state,
    ...payload.entities.items
  })
}, {});
