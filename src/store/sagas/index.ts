import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_TODO_LIST, RENDER_TODO_LIST } from '../constants';

export function* fetchToDoList(): any {
  const endpoint =
    'http://www.omdbapi.com/?apikey=b9bd48a6&s=Marvel&type=movie';
  const response: any = yield call(fetch, endpoint);
  const data: any = yield response.json();
  yield put({ type: RENDER_TODO_LIST, toDoList: data });
}

export function* loadToDoList() {
  yield takeEvery(LOAD_TODO_LIST, fetchToDoList);
}

export default function* rootSaga() {
  yield all([loadToDoList()]);
}
