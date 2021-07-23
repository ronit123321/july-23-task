import { MovieDetail } from '../../models/movie';
import { MovieQuickInfo } from '../../models/moviesQuery';
import { APP_CONSTANTS } from '../constants';

export function loadMoviesList(
  searchCriteria: string,
  page: number,
  paginatedRequest: boolean
) {
  return {
    type: APP_CONSTANTS.LOAD_MOVIES_LIST,
    payload: { searchCriteria, page, paginatedRequest },
  };
}

export function updateMoviesList(data: MovieQuickInfo[]) {
  return {
    type: APP_CONSTANTS.UPDATE_MOVIES_LIST,
    payload: data,
  };
}

export function updateMoviesListPaginated(data: MovieQuickInfo[]) {
  return {
    type: APP_CONSTANTS.UPDATE_MOVIES_LIST_PAGINATED,
    payload: data,
  };
}

export function updateSearchCriteria(value: string) {
  return {
    type: APP_CONSTANTS.UPDATE_SEARCH_CRITERIA,
    payload: value,
  };
}

export function loadMovieDetails(id: string) {
  return {
    type: APP_CONSTANTS.LOAD_MOVIES_DETAILS_BY_ID,
    payload: id,
  };
}

export function updateMovieDetail(data: MovieDetail | null) {
  return {
    type: APP_CONSTANTS.UPDATE_MOVIE_DETAILS,
    payload: data,
  };
}

export function updateTotalResult(count: number) {
  return {
    type: APP_CONSTANTS.UPDATE_TOTAL_MOVIES,
    payload: count,
  };
}

export function updatePageNumber(page: number) {
  return {
    type: APP_CONSTANTS.UPDATE_PAGE_NUMBER,
    payload: page,
  };
}

export function resetMovieList() {
  return {
    type: APP_CONSTANTS.RESET_MOVIE_LIST,
  };
}
