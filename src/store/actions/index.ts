import { APP_CONSTANTS } from '../constants';

export function loadMoviesList(searchCriteria: string) {
  return {
    type: APP_CONSTANTS.LOAD_MOVIES_LIST,
    payload: searchCriteria
  };
}

export function updateMoviesList(data: any) {
  return {
    type: APP_CONSTANTS.UPDATE_MOVIES_LIST,
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

export function updateMovieDetail(data: any) {
  return {
    type: APP_CONSTANTS.UPDATE_MOVIE_DETAILS,
    payload: data,
  };
}