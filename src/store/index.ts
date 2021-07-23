import { applyMiddleware, createStore } from "redux";
import movieApp from "./reducers";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(movieApp, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;