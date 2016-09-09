import { createStore, compose, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import createLogger from "redux-logger";
import rootReducer from "../reducers/";
import rootSaga from "../sagas/";

export default function configureStore(history) {
  const sagaMiddleware = createSagaMiddleware();
  const logger = createLogger();

  const middlewares = applyMiddleware(
    routerMiddleware(history),
    sagaMiddleware,
    logger
  );

  const store = createStore(
    rootReducer,
    {},
    compose(middlewares)
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
