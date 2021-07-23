import { applyMiddleware, createStore } from "redux";
import toDoApp from "./reducers";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(toDoApp, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;