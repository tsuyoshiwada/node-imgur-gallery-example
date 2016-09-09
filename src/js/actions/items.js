import { createAction } from "redux-actions";


// Fetch
export const FETCH_ITEMS_REQUEST = "FETCH_ITEMS_REQUEST";
export const FETCH_ITEMS_SUCCESS = "FETCH_ITEMS_SUCCESS";
export const FETCH_ITEMS_FAILURE = "FETCH_ITEMS_FAILURE";

export const fetchItemsRequest = createAction(FETCH_ITEMS_REQUEST);
export const fetchItemsSuccess = createAction(FETCH_ITEMS_SUCCESS);
export const fetchItemsFailure = createAction(FETCH_ITEMS_FAILURE);


// Add
export const ADD_ITEM_REQUEST = "ADD_ITEM_REQUEST";
export const ADD_ITEM_SUCCESS = "ADD_ITEM_SUCCESS";
export const ADD_ITEM_FAILURE = "ADD_ITEM_FAILURE";

export const addItemRequest = createAction(ADD_ITEM_REQUEST);
export const addItemSuccess = createAction(ADD_ITEM_SUCCESS);
export const addItemFailure = createAction(ADD_ITEM_FAILURE);


// Update
export const UPDATE_ITEM_REQUEST = "UPDATE_ITEM_REQUEST";
export const UPDATE_ITEM_SUCCESS = "UPDATE_ITEM_SUCCESS";
export const UPDATE_ITEM_FAILURE = "UPDATE_ITEM_FAILURE";

export const updateItemRequest = createAction(UPDATE_ITEM_REQUEST);
export const updateItemSuccess = createAction(UPDATE_ITEM_SUCCESS);
export const updateItemFailure = createAction(UPDATE_ITEM_FAILURE);


// Delete
export const DELETE_ITEM_REQUEST = "DELETE_ITEM_REQUEST";
export const DELETE_ITEM_SUCCESS = "DELETE_ITEM_SUCCESS";
export const DELETE_ITEM_FAILURE = "DELETE_ITEM_FAILURE";

export const deleteItemRequest = createAction(DELETE_ITEM_REQUEST);
export const deleteItemSuccess = createAction(DELETE_ITEM_SUCCESS);
export const deleteItemFailure = createAction(DELETE_ITEM_FAILURE);
