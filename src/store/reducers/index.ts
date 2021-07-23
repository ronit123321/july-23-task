import { AppState } from '../../models/state';
import { APP_CONSTANTS } from '../constants';

const initialState: AppState = {
  moviesList: [],
  searchCriteria: '',
  selectedMovieDetails: null,
};

const updateMoviesList = (state: AppState, action: any): AppState => {
  return {
    ...state,
    moviesList: action.payload,
  };
};

const updateSearchCriteria = (state: AppState, action: any): AppState => {
  return {
    ...state,
    searchCriteria: action.payload,
  };
};

const updateMovieDetails = (state: AppState, action: any): AppState => {
  return {
    ...state,
    selectedMovieDetails: action.payload,
  };
};

export default function toDoApp(state: AppState = initialState, action: any) {
  switch (action.type) {
    case APP_CONSTANTS.UPDATE_MOVIES_LIST:
      return updateMoviesList(state, action);
    case APP_CONSTANTS.UPDATE_SEARCH_CRITERIA:
      return updateSearchCriteria(state, action);
    case APP_CONSTANTS.UPDATE_MOVIE_DETAILS:
      return updateMovieDetails(state, action);
    default:
      return state;
  }
}
