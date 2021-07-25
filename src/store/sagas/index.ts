import { all, call, put, takeEvery } from 'redux-saga/effects';
import { MovieDetail } from '../../models/movie';
import { MoviesQuery } from '../../models/moviesQuery';
import {
  updateMovieDetail,
  updateMoviesList,
  updateMoviesListPaginated,
  updateTotalResult,
} from '../actions';
import { APP_CONSTANTS } from '../constants';
import { extractJSON } from './utils';

export function* fetchMovieList(action: any): any {
  const { searchCriteria, page, paginatedRequest } = action.payload;
  const endpoint = `https://www.omdbapi.com/?apikey=b9bd48a6&s=${searchCriteria}&type=movie&page=${page}`;
  try {
    const response: any = yield call(fetch, endpoint);
    const data: MoviesQuery = yield extractJSON(response);
    if (!paginatedRequest) {
      yield put(updateMoviesList(data?.Search));
      yield put(updateTotalResult(Number(data?.totalResults)));
    } else {
      yield put(updateMoviesListPaginated(data?.Search));
    }
  } catch (e) {
    yield put(updateMoviesList([]));
    yield put(updateTotalResult(0));
  }
}

export function* fetchMovieDetailsById(action: any): any {
  const endpoint = `https://www.omdbapi.com/?apikey=b9bd48a6&i=${action.payload}`;
  const response: any = yield call(fetch, endpoint);
  const data: MovieDetail = yield extractJSON(response);
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
