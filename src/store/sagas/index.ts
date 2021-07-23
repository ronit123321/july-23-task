import { all, call, put, takeEvery } from 'redux-saga/effects';
import { MovieDetail } from '../../models/movie';
import { MovieQuickInfo, MoviesQuery } from '../../models/moviesQuery';
import { updateMovieDetail, updateMoviesList } from '../actions';
import { APP_CONSTANTS } from '../constants';

export function* fetchMovieList(action: any): any {
  const endpoint = `http://www.omdbapi.com/?apikey=b9bd48a6&s=${action.payload}&type=movie`
  const response: any = yield call(fetch, endpoint);
  const data: MoviesQuery = yield response.json();
  const movieList: MovieQuickInfo[] = data.hasOwnProperty('Search') ? data.Search : []
  yield put(updateMoviesList(movieList));
}

export function* fetchMovieDetailsById(action: any): any {
  const endpoint = `http://www.omdbapi.com/?apikey=b9bd48a6&i=${action.payload}`
  const response: any = yield call(fetch, endpoint);
  const data: MovieDetail = yield response.json();
  yield put(updateMovieDetail(data));
}

export function* movieSagas() {
  yield takeEvery(APP_CONSTANTS.LOAD_MOVIES_LIST, fetchMovieList);
  yield takeEvery(APP_CONSTANTS.LOAD_MOVIES_DETAILS_BY_ID, fetchMovieDetailsById);
}

export default function* rootSaga() {
  yield all([movieSagas()]);
}
