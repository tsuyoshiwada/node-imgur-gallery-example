import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import entities from "./entities/";
import items from "./items";

const rootReducer = combineReducers({
  routing: routerReducer,
  entities,
  items
});

export default rootReducer;
