import { all, call, put, takeEvery } from 'redux-saga/effects';
import { MovieDetail } from '../../models/movie';
import { MovieQuickInfo, MoviesQuery } from '../../models/moviesQuery';
import {
  updateMovieDetail,
  updateMoviesList,
  updateMoviesListPaginated,
  updateTotalResult,
} from '../actions';
import { APP_CONSTANTS } from '../constants';

export function* fetchMovieList(action: any): any {
  const { searchCriteria, page, paginatedRequest } = action.payload;
  const endpoint = `https://www.omdbapi.com/?apikey=b9bd48a6&s=${searchCriteria}&type=movie&page=${page}`;
  const response: any = yield call(fetch, endpoint);
  const data: MoviesQuery = yield response.json();
  const movieList: MovieQuickInfo[] = data.hasOwnProperty('Search')
    ? data.Search
    : [];
  if (!paginatedRequest) {
    yield put(updateMoviesList(movieList));
    yield put(
      updateTotalResult(data.totalResults ? Number(data.totalResults) : 0)
    );
  }
  else {
    yield put(updateMoviesListPaginated(movieList));
  }
}

export function* fetchMovieDetailsById(action: any): any {
  const endpoint = `https://www.omdbapi.com/?apikey=b9bd48a6&i=${action.payload}`;
  const response: any = yield call(fetch, endpoint);
  const data: MovieDetail = yield response.json();
  yield put(updateMovieDetail(data));
}

export function* movieSagas() {
  yield takeEvery(APP_CONSTANTS.LOAD_MOVIES_LIST, fetchMovieList);
  yield takeEvery(
    APP_CONSTANTS.LOAD_MOVIES_DETAILS_BY_ID,
    fetchMovieDetailsById
  );
}

export default function* rootSaga() {
  yield all([movieSagas()]);
}
