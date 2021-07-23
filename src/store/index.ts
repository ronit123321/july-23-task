import { applyMiddleware, createStore } from "redux";
import toDoApp from "./reducers";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas";
import { loadToDoList } from "./actions";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(toDoApp, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

store.dispatch(loadToDoList());

export default store;